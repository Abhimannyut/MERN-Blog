

# MERN Blog Website

Welcome to the **MERN Blog Website** repository! This is a fully functional blogging platform built with the MERN stack, offering powerful features and a seamless user experience.  

## 📌 Features  

- **User Authentication**: Secure login and registration using JWT.  
- **Blog Management**: Create, update, delete, and view blog posts effortlessly.  
- **Rich Text Editor**: Write engaging blog content with a feature-rich editor.  
- **Image Support**: Add visuals to enhance your blogs.  
- **Comment System**: Interact with readers through a dynamic commenting feature.  
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.  
- **Search Functionality**: Quickly find blogs using keywords or categories.  
- **User Profiles**: Manage your account and view personal blog collections.  

## 🛠️ Technologies Used  

- **Frontend**:  
  - React.js  
  - Redux (for state management)  
  - React Router  
  - TailwindCSS (for styling)  

- **Backend**:  
  - Node.js  
  - Express.js  
  - MongoDB (NoSQL Database)  
  - JWT for authentication  

- **Tools & Libraries**:  
  - Axios  
  - Mongoose  
  - bcrypt  

## 🚀 Getting Started  

### Prerequisites  

Ensure you have the following installed:  
- Node.js (v14 or higher)  
- MongoDB (local or cloud)  
- npm or yarn  

### Installation  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/abhishekboadgurjar/mern-blog.git  
   cd mern-blog  
   ```  

2. **Install dependencies**:  
   - Backend:  
     ```bash  
     cd server  
     npm install  
     ```  
   - Frontend:  
     ```bash  
     cd client  
     npm install  
     ```  

3. **Set up environment variables**:  
   - Create a `.env` file in the `server` directory with the following:  
     ```env  
     PORT=5000  
     MONGO_URI=mongodb://localhost:27017/mern-blog  
     JWT_SECRET=your_jwt_secret  
     ```  

4. **Start the application**:  
   - Backend:  
     ```bash  
     cd server  
     npm start  
     ```  
   - Frontend:  
     ```bash  
     cd client  
     npm start  
     ```  

5. Open your browser and navigate to `http://localhost:3000`.  

## 📂 Project Structure  

### Backend (`/server`)  
- **Routes**: API endpoints for authentication, blogs, and comments.  
- **Models**: Mongoose schemas for Users and Blogs.  
- **Controllers**: Business logic for handling API requests.  
- **Middleware**: Authentication and error handling.  

### Frontend (`/client`)  
- **Components**: Modular and reusable UI components.  
- **Pages**: Key views like Home, Blog Details, and Create Blog.  
- **Redux**: State management for user sessions and blog operations.  
- **Services**: API interaction layer.  
  

## 🤝 Contributing  

Contributions are welcome! Follow these steps:  
1. Fork the repository.  
2. Create a new branch (`git checkout -b feature-name`).  
3. Commit your changes (`git commit -m 'Add feature'`).  
4. Push to the branch (`git push origin feature-name`).  
5. Open a pull request.  


## 📧 Contact  

- **GitHub**: [abhishekboadgurjar](https://github.com/abhishekboadgurjar)  
  
