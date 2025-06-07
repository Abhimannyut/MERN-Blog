import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/post/getposts", {
          params: {
            startIndex: 0,
            limit: 9,
          },
        });
        setPosts(response.data.posts);
        setLoading(false);
      } catch (err) {
        setError("Failed to load posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/post/create", {
        title: newPost.title,
        content: newPost.content,
        image: newPost.image || "https://via.placeholder.com/600x400", // Fallback image if none provided
      });

      // Add the new post to the existing posts list
      setPosts((prevPosts) => [
        {
          ...response.data.post,
          createdAt: new Date().toISOString(), // Use current date for display
          slug: response.data.post._id, // Assuming the server returns an _id; adjust based on your API
        },
        ...prevPosts,
      ]);

      // Reset form and close modal
      setNewPost({ title: "", content: "", image: "" });
      setShowModal(false);
    } catch (err) {
      setError("Failed to create blog post");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-semibold text-center text-gray-800">Latest Blogs</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300"
        >
          Add Blog
        </button>
      </div>

      {/* Modal for Adding a New Blog */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Blog</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={newPost.title}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Enter blog title"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Content</label>
                <textarea
                  name="content"
                  value={newPost.content}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                  rows="4"
                  placeholder="Write your blog content here"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Image URL (optional)</label>
                <input
                  type="text"
                  name="image"
                  value={newPost.image}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Enter image URL"
                />
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={handleAddBlog}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
              >
                Create Blog
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
        </div>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                  <h2 className="text-2xl font-semibold">{post.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-4">
                  Published on {new Date(post.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-700 mb-4">
                  {post.content.slice(0, 150)}...
                </p>
                <Link
                  to={`/post/${post.slug}`}
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition-all duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;