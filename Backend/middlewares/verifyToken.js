import jwt from 'jsonwebtoken';
import { errorHandler} from './errorHandler.js';

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return next(errorHandler(401, 'Access denied, no token provided'));

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return next(errorHandler(403, 'Invalid token'));
    req.user = decoded; // Make sure 'isBlogger' is part of the decoded payload
    next();
  });
};
