function ConsultionHistory() {
    const consultations = [
      {
        date: "2024-12-01",
        doctorName: "Dr. Rahul Sharma",
        specialization: "Cardiology",
        type: "Online",
        reportLink: "#",
      },
      {
        date: "2024-11-20",
        doctorName: "Dr. Anjali Mehra",
        specialization: "Dermatology",
        type: "In-Person",
        reportLink: "#",
      },
      {
        date: "2024-10-15",
        doctorName: "Dr. Vikram Singh",
        specialization: "Orthopedics",
        type: "Online",
        reportLink: "#",
      },
    ];
  
    return (
      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Consultation History</h2>
  
        {/* Table Container */}
        <div className="bg-white border-gray-200 border-2 rounded-xl p-4 sm:p-6">
          {consultations.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Doctor Name</th>
                    <th className="px-4 py-2">Specialization</th>
                    <th className="px-4 py-2">Type</th>
                    <th className="px-4 py-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {consultations.map((consultation, index) => (
                    <tr key={index} className="border-t text-gray-700">
                      <td className="px-4 py-2">{consultation.date}</td>
                      <td className="px-4 py-2">{consultation.doctorName}</td>
                      <td className="px-4 py-2">{consultation.specialization}</td>
                      <td className="px-4 py-2">{consultation.type}</td>
                      <td className="px-4 py-2 text-center">
                        <a
                          href={consultation.reportLink}
                          className="px-3 py-1 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition"
                        >
                          View Report
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-600">No consultation history available.</p>
          )}
        </div>
      </div>
    );
  }
  
  export default ConsultionHistory;
  