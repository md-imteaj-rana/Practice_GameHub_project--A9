import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mt-4">Page Not Found☠️</h2>
      <p className="text-gray-500 mt-2 text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.🌋
      </p>

      <Link
        to="/"
        className="mt-6 px-5 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-600 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
