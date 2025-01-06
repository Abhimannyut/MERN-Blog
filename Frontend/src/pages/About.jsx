import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Blog</h1>
        <p className="text-xl text-gray-600">
          Welcome to our blog! A place where we share news, insights, tutorials, and much more.
        </p>
      </section>

      {/* Blog Purpose Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Purpose</h2>
        <p className="text-lg text-gray-700">
          Our blog is dedicated to providing valuable content to our readers on various topics, including technology, lifestyle, and personal development. We aim to offer insightful articles, tips, and stories to keep you informed and inspired.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border p-6 rounded-md text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">Lead Writer & Editor</p>
          </div>
          <div className="border p-6 rounded-md text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Content Strategist</p>
          </div>
          <div className="border p-6 rounded-md text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800">Emily Johnson</h3>
            <p className="text-gray-600">Designer & Developer</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          We aim to empower our readers with the knowledge and resources they need to succeed in their personal and professional lives. Our mission is to create a space for everyone to learn, grow, and stay updated.
        </p>
      </section>

      {/* User Contribution Section */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Share Your Thoughts With Us!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Our blog is a platform for everyone! We encourage you to share your own articles, insights, tutorials, or stories. Whether you're passionate about technology, lifestyle, or personal development, we welcome your contributions.
        </p>
        <Link
          to="/contribute"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300"
        >
          Submit a Blog
        </Link>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Join Us On This Journey
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Whether you're a newbie or an expert, there's always something new to learn on our blog. We invite you to explore, engage, and be part of our growing community.
        </p>
        <Link
          to="/blogs"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          Explore Our Blogs
        </Link>
      </section>
    </div>
  );
};

export default About;
