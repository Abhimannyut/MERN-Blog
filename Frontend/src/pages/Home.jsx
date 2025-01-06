import { Link } from "react-router-dom";
import Blogs from "./Blogs"; // Assuming you have Blogs component in the same directory

function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" ></div>
        <div className="relative container mx-auto text-center z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            Welcome to Our Blog
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Your go-to source for the latest news, articles, and insights.
          </p>
          <Link
            to="/blogs"
            className="inline-block px-8 py-4 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Blogs
          </Link>
        </div>
      </section>

  

      {/* Blogs Section */}
      <section className="py-16 bg-gray-100">
        <Blogs />
      </section>

    
    </div>
  );
}

export default Home;
