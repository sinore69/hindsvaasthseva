import { useState } from "react";
import General from "./General";
import ConsultionHistory from "./ConsultionHistory";
import PatientDocuments from "./PatientDocs";

function ProfilePage() {
  const [selectedProfileOption, setSelectedProfileOption] = useState("General");

  return (
    <div className="py-6 max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-row justify-start gap-3 sm:gap-5 mb-6">
        <button
          className={`${
            selectedProfileOption === "General"
              ? "w-full sm:w-auto px-4 sm:px-8 py-2 bg-primary text-secondary rounded-full font-bold"
              : "w-full sm:w-auto px-4 sm:px-8 py-2 border-primary border-2 text-primary rounded-full font-bold"
          }`}
          onClick={() => setSelectedProfileOption("General")}
        >
          General
        </button>
        <button
          className={`${
            selectedProfileOption === "Consultion History"
              ? "w-full sm:w-auto px-4 sm:px-8 py-2 bg-primary text-secondary rounded-full font-bold"
              : "w-full sm:w-auto px-4 sm:px-8 py-2 border-primary border-2 text-primary rounded-full font-bold"
          }`}
          onClick={() => setSelectedProfileOption("Consultion History")}
        >
          Consultion History
        </button>
        <button
          className={`${
            selectedProfileOption === "Patient Documents"
              ? "w-full sm:w-auto px-4 sm:px-8 py-2 bg-primary text-secondary rounded-full font-bold"
              : "w-full sm:w-auto px-4 sm:px-8 py-2 border-primary border-2 text-primary rounded-full font-bold"
          }`}
          onClick={() => setSelectedProfileOption("Patient Documents")}
        >
          Patient Documents
        </button>
      </div>

      {/* Conditional Rendering */}
      <div className="content">
        {selectedProfileOption === "General" && <General />}
        {selectedProfileOption === "Consultion History" && <ConsultionHistory />}
        {selectedProfileOption === "Patient Documents" && <PatientDocuments />}
      </div>
    </div>
  );
}

export default ProfilePage;
