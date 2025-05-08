import React from 'react';
import { Link } from 'react-router';
const Error = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-[90px] md:text-[120px] font-extrabold text-indigo-600 drop-shadow-lg animate-bounce">
          404
        </h1>
        <p className="text-2xl md:text-4xl font-bold text-gray-800 font-[sora]">
          No Bill Found!!
        </p>
        <p className="text-gray-600 mt-2 max-w-md text-xl font-bold">
          Invalid Dynamic Route Detected
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300"
        >
          ⬅️ Go to Homepage
        </Link>

        <style>
          {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
        </style>
      </div>
    </>
  );
};

export default Error;