
import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">User ID</label>
            <input
              type="text"
              id="id"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
