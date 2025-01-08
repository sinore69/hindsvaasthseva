
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditHospital = () => {
  const [hospital, setHospital] = useState({
    name: 'Default Hospital',
    address: '123 Main Street',
    phone: '123-456-7890',
    email: 'hospital@example.com',
  });

  const [departments, setDepartments] = useState([
    'Cardiology',
    'Neurology',
    'Pediatrics',
  ]);

  const [newDepartment, setNewDepartment] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospital({ ...hospital, [name]: value });
  };

  const handleAddDepartment = () => {
    if (newDepartment && !departments.includes(newDepartment)) {
      setDepartments([...departments, newDepartment]);
      setNewDepartment('');
    }
  };

  const handleRemoveDepartment = (dept) => {
    setDepartments(departments.filter((d) => d !== dept));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Hospital Info:', hospital);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Edit Hospital Information</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={hospital.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={hospital.address}
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
            value={hospital.phone}
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
            value={hospital.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
          Save Changes
        </button>
      </form>

      <div className="mt-8 bg-white p-6 rounded shadow-md">
        <h3 className="text-xl font-bold mb-4">Manage Departments</h3>
        <div className="mb-4">
          <label htmlFor="newDepartment" className="block text-sm font-medium text-gray-700">Add Department</label>
          <div className="flex">
            <input
              type="text"
              id="newDepartment"
              value={newDepartment}
              onChange={(e) => setNewDepartment(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={handleAddDepartment}
              className="ml-2 bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
            >
              Add
            </button>
          </div>
        </div>

        <ul>
          {departments.map((dept) => (
            <li key={dept} className="flex justify-between items-center mb-2">
              <span>{dept}</span>
              <div>
                <button
                  onClick={() => navigate(`/department/${dept}`)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-600"
                >
                  View
                </button>
                <button
                  onClick={() => handleRemoveDepartment(dept)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EditHospital;
