import React from 'react';
import MDImage from "/src/assets/img/MD.jpg";

const Login = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left side - Form */}
      <div className="flex items-center justify-center w-1/2 bg-white p-6 shadow-lg">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>

      {/* Right side - Images */}
      <div className="w-1/2 flex items-center justify-center bg-blue-100">
        <div className="grid grid-cols-2 gap-4 p-6">
          <img
            src={MDImage}
            alt="Placeholder 1"
            className="rounded-lg shadow-md"
          />
          <img
            src={MDImage}
            alt="Placeholder 2"
            className="rounded-lg shadow-md"
          />
          <img
            src={MDImage}
            alt="Placeholder 3"
            className="rounded-lg shadow-md"
          />
          <img
            src={MDImage}
            alt="Placeholder 4"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
