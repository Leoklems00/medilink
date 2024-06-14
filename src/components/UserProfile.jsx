import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import ContactExpert from '../components/ContactExpert';

const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mt-4 sm:mt-20">
        <h2 className="text-3xl font-semibold mb-4">User Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Name:</label>
          <p className="border-b p-2 text-gray-900">Klemz Chisom</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email:</label>
          <p className="border-b p-2 text-gray-900">ezyme@gmail.com</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Specialization:</label>
          <p className="border-b p-2 text-gray-900">General Practitioner</p>
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          onClick={openModal}
        >
          Contact an Expert
        </button>
        <ContactExpert isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </DashboardLayout>
  );
};

export default UserProfile;
