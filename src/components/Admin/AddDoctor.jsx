
import React, { useState } from 'react';

const AddDoctor = () => {
  const [doctor, setDoctor] = useState({
    name: '',
    specialization: '',
    phone: '',
    email: '',
    clinic: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Doctor Added:', doctor);
    setDoctor({ name: '', specialization: '', phone: '', email: '', clinic: '' });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Add Doctor</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={doctor.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Specialization</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={doctor.specialization}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={doctor.phone}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={doctor.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="clinic" className="block text-sm font-medium text-gray-700">Clinic</label>
          <input
            type="text"
            id="clinic"
            name="clinic"
            value={doctor.clinic}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
