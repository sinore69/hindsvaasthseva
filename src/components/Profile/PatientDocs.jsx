function PatientDocuments() {
    const documents = [
      {
        name: "Prescription_2024-12-01.pdf",
        type: "Prescription",
        uploadedOn: "2024-12-01",
        link: "#",
      },
      {
        name: "Blood_Test_Results_2024-11-15.pdf",
        type: "Lab Report",
        uploadedOn: "2024-11-15",
        link: "#",
      },
      {
        name: "X-Ray_Report_2024-10-20.pdf",
        type: "Radiology",
        uploadedOn: "2024-10-20",
        link: "#",
      },
    ];
  
    return (
      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Patient Documents</h2>
  
        {/* Upload Button */}
        <div className="flex justify-end mb-4">
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
            Upload Document
          </button>
        </div>
  
        {/* Documents List */}
        <div className="bg-white border-gray-200 border-2 rounded-xl p-4 sm:p-6">
          {documents.length > 0 ? (
            <div className="space-y-4">
              {documents.map((document, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{document.name}</h3>
                    <p className="text-gray-600 text-sm">{document.type}</p>
                    <p className="text-gray-500 text-xs">Uploaded on: {document.uploadedOn}</p>
                  </div>
                  <div className="flex items-center space-x-2 font-semibold">
                    <a
                      href={document.link}
                      className="px-3 py-1 bg-secondary text-primary rounded-lg text-sm hover:bg-secondary-dark transition"
                    >
                      View
                    </a>
                    <a
                      href={document.link}
                      download
                      className="px-3 py-1 bg-primary text-secondary rounded-lg text-sm hover:bg-green-600 transition"
                    >
                      Download
                    </a>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No documents available.</p>
          )}
        </div>
      </div>
    );
  }
  
  export default PatientDocuments;
  