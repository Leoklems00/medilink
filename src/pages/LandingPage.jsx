import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-4xl mx-auto text-center p-8">
          <h1 className="text-4xl font-bold mb-6">Welcome to Medilink</h1>
          <p className="text-lg text-gray-700 mb-8">Connecting doctors and patients for better healthcare.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
              Contact Us
            </button>
            <Link to="/experts" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
              Find an Expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;