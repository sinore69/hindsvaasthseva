// # Create a React component for adding and removing doctors
// manage_doctors_code = """
import React, { useState } from 'react';

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Neurology' },
  ]);
  const [newDoctor, setNewDoctor] = useState({ name: '', specialty: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor({ ...newDoctor, [name]: value });
  };

  const addDoctor = () => {
    if (newDoctor.name && newDoctor.specialty) {
      setDoctors([
        ...doctors,
        { id: doctors.length + 1, name: newDoctor.name, specialty: newDoctor.specialty },
      ]);
      setNewDoctor({ name: '', specialty: '' });
    }
  };

  const removeDoctor = (id) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Manage Doctors</h2>

      <div className="bg-white p-6 rounded shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4">Add Doctor</h3>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newDoctor.name}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">Specialty</label>
          <input
            type="text"
            id="specialty"
            name="specialty"
            value={newDoctor.specialty}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={addDoctor}
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
        >
          Add Doctor
        </button>
      </div>

      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-xl font-bold mb-4">Current Doctors</h3>
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.id} className="flex justify-between items-center mb-2">
              <div>
                <span className="font-medium">{doctor.name}</span> - <span>{doctor.specialty}</span>
              </div>
              <button
                onClick={() => removeDoctor(doctor.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageDoctors;
// """

// # Write the ManageDoctors component to a file
// manage_doctors_path = "/mnt/data/ManageDoctors.js"
// with open(manage_doctors_path, "w") as file:
//     file.write(manage_doctors_code)

// # Return the path to the downloadable component
// manage_doctors_path
