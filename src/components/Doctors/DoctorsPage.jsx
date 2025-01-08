function DoctorsPage() {
  return (
    <section className="w-full p-6">
      <div className="bg-secondary rounded-lg p-6 flex flex-col items-center shadow-md">
        {/* Heading */}
        <h2 className="pb-5">Best Doctors in Your Location</h2>

        {/* Search Box */}
        <div className="w-1/2 mb-6">
          <input
            type="text"
            placeholder="Search for doctors, hospitals..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-primary focus:ring-2 focus:outline-none"
          />
        </div>

        {/* Choose Hospital and Department */}
        <div className="flex flex-col lg:flex-row w-full gap-6">
          {/* Choose Department */}
          <div className="w-full lg:w-1/2">
            <label
              htmlFor="department-select"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Choose Department
            </label>
            <div className="relative">
              <select
                id="department-select"
                className="w-full p-3 pr-10 rounded-lg border border-gray-300 focus:ring-primary focus:ring-2 focus:outline-none appearance-none"
              >
                <option value="">Select Department</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="orthopedics">Orthopedics</option>
              </select>
              <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Choose Hospital */}
          <div className="w-full lg:w-1/2">
            <label
              htmlFor="hospital-select"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Choose Hospital
            </label>
            <div className="relative">
              <select
                id="hospital-select"
                className="w-full p-3 pr-10 rounded-lg border border-gray-300 focus:ring-primary focus:ring-2 focus:outline-none appearance-none"
              >
                <option value="">Select Hospital</option>
                <option value="hospital-a">Hospital A</option>
                <option value="hospital-b">Hospital B</option>
                <option value="hospital-c">Hospital C</option>
              </select>
              <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorsPage;
