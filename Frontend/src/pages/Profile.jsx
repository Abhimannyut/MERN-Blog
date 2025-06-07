import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    fullName: 'ssdf',
    email: 'abhimannyut@gmail.com',
    joinedDate: 'June 05, 2025',
  });
  const [tempUser, setTempUser] = useState({ ...user });
  const [error, setError] = useState(null);

  // Fetch user data on component mount (optional, if authenticated)
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user/profile', {
          // Include authentication token if required
          // headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setUser(response.data);
        setTempUser(response.data);
      } catch (err) {
        setError('Failed to load profile');
      }
    };
    fetchUserProfile();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put('http://localhost:3000/api/user/update', tempUser, {
        // Include authentication token if required
        // headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setUser({ ...tempUser });
      setIsEditing(false);
      setError(null);
    } catch (err) {
      setError('Failed to update profile. Please try again.');
    }
  };

  const handleCancel = () => {
    setTempUser({ ...user });
    setIsEditing(false);
    setError(null);
  };

  const handleChange = (e) => {
    setTempUser({
      ...tempUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">User Profile</h2>
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="flex items-center space-x-4 mb-6">
            <img
              src="https://cdn-icons-png.freepik.com/512/7053/7053329.png"
              alt="Profile"
              className="w-16 h-16 rounded-full border-4 border-blue-500"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{user.fullName}</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          <hr className="mb-6" />
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={tempUser.fullName}
                onChange={handleChange}
                className={`w-full p-3 rounded-md border border-gray-300 focus:outline-none ${
                  isEditing ? 'border-blue-500' : ''
                }`}
                readOnly={!isEditing}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={tempUser.email}
                onChange={handleChange}
                className={`w-full p-3 rounded-md border border-gray-300 focus:outline-none ${
                  isEditing ? 'border-blue-500' : ''
                }`}
                readOnly={!isEditing}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Joined Date</label>
              <input
                type="text"
                name="joinedDate"
                value={tempUser.joinedDate}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none"
                readOnly
              />
            </div>
          </div>
          <div className="flex space-x-3 mt-6">
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
              >
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-all duration-300"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-all duration-300"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;