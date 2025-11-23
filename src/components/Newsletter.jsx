import React from "react";

const Newsletter = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8b84e] p-4 mx-20 my-10 rounded-3xl">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-6 md:p-10 relative">
        <button className="absolute top-4 right-4 text-black text-xl font-bold hover:text-gray-600">
          ×
        </button>

       
        <p className="text-2xl font-bold mb-4 text-gray-800">GameHub</p>

        <div className="flex flex-col md:flex-row items-center gap-8">
        
          <div className="flex justify-center w-full md:w-1/2">
            <img
              className="w-48 h-48 object-contain"
              src="/public/GameHub logo.png"
              alt="newsletter"
            />
          </div>

          
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">
              Subscribe to our Newsletter!
            </h2>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter and stay updated.
            </p>

            
            <div className="flex items-center gap-2 border rounded-lg px-3 py-2 mb-4">
              <span className="text-gray-500">✉️</span>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 outline-none"
              />
            </div>

            
            <button className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
