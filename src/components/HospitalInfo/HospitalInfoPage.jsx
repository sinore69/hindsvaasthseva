import { useState } from "react";
import HospitalsImg from "../../assets/hospitalsimg.svg";
import HospitalOverview from "./HospitalOverview";
import Departments from "./Departments";
import LocationOfHospital from "./Location";

function HospitalInfo() {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <HospitalOverview/>
        );
      case "Departments":
        return (
          <Departments/>
        );
      case "Location":
        return (
          <LocationOfHospital />
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full pb-10">
      {/* Hospital Image */}
      <div className="w-full flex justify-center">
        <img src={HospitalsImg} alt="Hospital Image" />
      </div>

      {/* Navigation row for Overview, Doctors, and Location */}
      <div className="flex flex-row justify-start items-center gap-x-5 pt-5 font-bold">
        {["Overview", "Departments", "Location"].map((tab) => (
          <h4
            key={tab}
            className={`cursor-pointer ${
              activeTab === tab ? "text-primary" : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </h4>
        ))}
      </div>


      {/* Location overview and Highlights */}
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-4/5">{renderContent()}</div>
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          <div className="bg-secondary w-full lg:w-2/3 my-4 md:my-0 p-5 text-bold rounded-2xl flex flex-col gap-5">
            <h2>Highlights</h2>
            <p>This would be a Paragraph</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HospitalInfo;
