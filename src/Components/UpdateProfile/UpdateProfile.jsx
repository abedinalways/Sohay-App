
import React, { use, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';

import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
const UpdateProfile = () => {
  const { user } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const navigate = useNavigate();

  const handleUpdateProfile = e => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success('Profile updated successfully!');
        
        navigate('/profile');
      })
      .catch(error => {
        toast.error('Failed to update profile.');
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 py-8 bg-base-200">
      <h2 className="text-2xl font-bold font-[sora] text-purple-800 mb-6">
        Update Information
      </h2>
      <form
        onSubmit={handleUpdateProfile}
        className="bg-base-200 shadow-xl rounded-lg p-8"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="photoURL"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Photo URL:
          </label>
          <input
            type="text"
            id="photoURL"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={photoURL}
            onChange={e => setPhotoURL(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;