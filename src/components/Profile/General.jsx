import Button from "../reusable/Button";

const onLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userEmail");
  window.location.href = "/";
};

function General() {
  const preExistingDiseases = {
    speech: ["Dysarthria", "Apraxia"],
    physical: ["Arthritis"],
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Profile</h2>

      {/* Profile Details */}
      <div className=" border-gray-200 border-2 rounded-xl p-4 sm:p-6 space-y-6">
        {/* Basic Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">{`userName`} (Male)</h2>
              <p className="text-gray-600">{`userAge`} years</p>
              <p className="text-gray-600">{`userLocation`}</p>
            </div>
          </div>
          <button className="text-red-600 text-sm sm:text-base">Edit</button>
        </div>

        {/* Personal Info */}
        <div className="border-b pb-4">
          <div className="flex flex-row justify-between">
            <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">
              Personal Information
            </h3>
            <button className="text-primary text-sm sm:text-base mt-2">Edit</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p>
                <strong>Phone Number:</strong> {`userPhone`}
              </p>
            </div>
            <div>
              <p>
                <strong>Date of Birth:</strong> {`userDOB`}
              </p>
              <p>
                <strong>Email Address:</strong>{" "}
                {localStorage.getItem("userEmail")}
              </p>
            </div>
            <div>
              <p>
                <strong>Age:</strong> {`userAge`}
              </p>
              <p>
                <strong>Weight:</strong> {`userWeight`}
              </p>
            </div>
          </div>
        </div>

        {/* Pre-existing Diseases */}
        <div className="border-b pb-4">
          <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">
            Pre-existing Diseases
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">Speech</h4>
              <div className="flex flex-wrap gap-2">
                {preExistingDiseases.speech.map((disease, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-primary px-2 py-1 rounded-lg text-xs sm:text-sm"
                  >
                    {disease}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium">Physical</h4>
              <div className="flex flex-wrap gap-2">
                {preExistingDiseases.physical.map((disease, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-primary px-2 py-1 rounded-lg text-xs sm:text-sm"
                  >
                    {disease}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* General Settings */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="mb-4 sm:mb-0">
            <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">
              General
            </h3>
            <button className="px-4 py-2 bg-secondary font-bold text-primary rounded-lg border-primary border-2 text-sm sm:text-base">
              Change Password
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-sm sm:text-base">Enable Notifications</p>
            <input type="checkbox" className="toggle" />
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex justify-center mt-6">
        <Button onClick={onLogout}>Logout</Button>
      </div>
    </div>
  );
}

export default General;
