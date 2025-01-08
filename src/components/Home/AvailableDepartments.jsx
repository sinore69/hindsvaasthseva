function AvailableDepartments() {
    const departments = [
      { id: 1, name: "Cardiology" },
      { id: 2, name: "Neurology" },
      { id: 3, name: "Pediatrics" },
      { id: 4, name: "Orthopedics" },
      { id: 5, name: "Orthopedics" },
      { id: 6, name: "Orthopedics" },
      { id: 7, name: "Orthopedics" },
      { id: 8, name: "Orthopedics" },
      { id: 9, name: "Orthopedics" },
    ];
  
    return (
      <section className="w-full py-8">
        <h1 className="text-start pb-8"><span className="text-black">Available</span> Departments</h1>
        <div className="flex flex-wrap gap-y-5 justify-start gap-x-5 md:gap-x-10">
          {departments.map((department) => (
            <div key={department.id} className="flex flex-col items-center">
            <div
              className="flex flex-col items-center justify-center rounded-full bg-gray-300 w-24 h-24 md:w-32 md:h-32"
            >
              {/* Placeholder for Icon */}
              <div className="text-center text-lg font-bold text-gray-700">
                {department.name[0]}
              </div>
            </div>
            <p className="text-primary font-bold">{department.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default AvailableDepartments;
  