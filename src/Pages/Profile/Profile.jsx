import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router';

const Profile = () => {
  const { user } = use(AuthContext);
  return (
    <>
      <h2 className="text-2xl mt-12 font-bold font-[sora] text-center text-purple-800">
        User's Profile
      </h2>
      <div className="flex flex-col gap-4 justify-center items-center mt-20 w-90 mx-auto">
        <div className=" mb-5 ">
          {user ? (
            <img src={user.photoURL} className="w-35 rounded-full shadow-xl" />
          ) : (
            ''
          )}
        </div>
        <div className="text-lg font-bold text-purple-600">
          {' '}
          <span className="text-black">Name:</span>{' '}
          {user ? user.displayName : ''}
        </div>
        <div className="text-lg font-bold text-purple-600">
          <span className="text-black">Email:</span> {user ? user.email : ''}
        </div>
        <Link to="/update-profile" className="btn bg-white text-purple-600 font-bold font-[sora] border-1 border-purple-300 rounded-sm text-md hover:bg-purple-600 hover:text-white mt-6">
          Update Information
        </Link>
      </div>
    </>
  );
};

export default Profile;