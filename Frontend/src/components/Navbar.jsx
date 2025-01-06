import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearAuthToken, setUser } from "../redux/authSlice";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  // Access authentication state from Redux
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    // Dispatch clearAuthToken to reset Redux auth state
    dispatch(clearAuthToken());
    setIsModalOpen(false);
  };

  // Simulate setting user details (replace this with actual API call or session logic)
  useEffect(() => {
    if (isAuthenticated && !user) {
      // Example user data from backend
      const userData = {
        _id: "6778c9f0e77bb7c5c4c06c7c",
        username: "Abhishekgurjar",
        email: "abhishekgurjar@gmail.com",
        profilePicture:
          "https://cdn-icons-png.freepik.com/512/7053/7053329.png",
        isBlogger: true,
        createdAt: "2025-01-04T05:41:04.300Z",
        updatedAt: "2025-01-04T05:41:04.300Z",
      };
      dispatch(setUser(userData));
    }
  }, [isAuthenticated, user, dispatch]);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">MERN Blog</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-gray-200">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>

        {/* Profile Icon or Sign In */}
        <div className="relative">
          {isAuthenticated ? (
            // If logged in, show profile icon
            <div>
              <button
                className="flex items-center space-x-2 focus:outline-none"
                onClick={toggleModal}
              >
                <img
                  src={user?.profilePicture || "https://via.placeholder.com/40"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              </button>

              {/* Modal */}
              {isModalOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg p-4 text-gray-800">
                  {/* Profile Image */}
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={user?.profilePicture || "https://via.placeholder.com/50"}
                      alt="Profile"
                      className="w-12 h-12 rounded-full border-2 border-blue-500"
                    />
                    <div>
                      <h3 className="font-bold text-lg">
                        {user?.username || "User"}
                      </h3>
                      <p className="text-sm text-gray-600">{user?.email}</p>
                    </div>
                  </div>

                  <hr className="my-2" />

                  {/* Edit Profile Button */}
                  <button
                    className="w-full bg-green-500 text-white py-1 mb-2 rounded-md hover:bg-green-700"
                  
                  >
                     <Link to="/profile" className="hover:text-gray-200">
        Profile
            </Link>
                  </button>

                  {/* Logout Button */}
                  <button
                    className="w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-700"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // If not logged in, show Sign In button
            <Link
              to="/signin"
              className="bg-white text-blue-600 py-1 px-4 rounded-md hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
