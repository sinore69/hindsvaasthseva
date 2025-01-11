import { useState } from "react";
import HospitalsImg from "../../assets/hospitalsimg.svg";
import HospitalOverview from "./HospitalOverview";
import Departments from "./Departments";
import LocationOfHospital from "./Location";
import Doctors from "./Doctors";
import Amenities from "./Amenities";

function HospitalInfo() {
  const [activeTab, setActiveTab] = useState("Overview");
  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <HospitalOverview/>
        );
        case "Amenities":
        return (
          <Amenities />
        );
      case "Doctors":
        return (
          < Doctors/>
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
    <div className="h-full w-full">
    <section className="w-[100%] h-[70%]">
      {/* Hospital Image */}
      <div className="w-full h-full sm:pb-10">
        <img src={HospitalsImg} alt="Hospital Image" className="h-96" />
      </div>
      
      {/* Navigation row for Overview, Doctors, and Location */}
      <div className="flex flex-row justify-start items-center gap-x-5 sm:pt-5 font-bold shadow-md p-3 w-96">
        {["Overview", "Amenities","Doctors", "Location"].map((tab) => (
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
        <div className="flex justify-center  w-full lg:w-1/2">
          <div className="bg-secondary w-full lg:w-2/3 my-4 md:my-0 p-5 text-bold rounded-2xl flex flex-col gap-5">
            <h2>Highlights</h2>
            <p>This would be a Paragraph</p>
          </div>
        </div>
      </div>
        <Departments/>
    </section>
    </div>
  );
}

export default HospitalInfo;
