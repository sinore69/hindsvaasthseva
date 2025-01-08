import Button from "../reusable/Button";
import HospitalsImg from "../../assets/hospitalsimg.svg";
import { Link } from "react-router-dom";

function NearestInstitution() {
  // Array of hospital informations
  const hospitals = [
    {
      id: 1,
      name: "The Spectator Hospital",
      specialties: "Cardiology, Neurology",
      image: HospitalsImg,
      tclasses: "bg-primary text-secondary",
    },
    {
      id: 2,
      name: "LifeCare Medical Center",
      specialties: "Pediatrics, Orthopedics",
      image: HospitalsImg,
      tclasses: "bg-primary2 text-black",
    },
    {
      id: 3,
      name: "City Health Clinic Hospital",
      specialties: "Dermatology, ENT",
      image: HospitalsImg,
      tclasses: "bg-primary text-secondary",
    },
    {
      id: 4,
      name: "Healing Hands Hospital",
      specialties: "General Surgery, Urology",
      image: HospitalsImg,
      tclasses: "bg-secondary text-black",
    },
  ];

  return (
    <section className="py-7 md:py-14">
      {/* Heading with View All button */}
      <div className="flex flex-row pb-5 justify-between items-center">
        <h1>
          Institutions <span className="text-black">near you</span>
        </h1>
        <Button>View all</Button>
      </div>
      {/* Cards to show the hospitals */}
      <Link to="/hospitalinfo">
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-5 md:gap-x-16">
          {hospitals.map((hospital) => (
            <div
              key={hospital.id}
              className={`pb-5 rounded-b-[30px] rounded-t-[40px] w-[80vw] md:w-[295px] h-auto flex flex-col items-start justify-start ${hospital.tclasses}`}
            >
              <img
                src={hospital.image}
                alt={`${hospital.name} image`}
                className="rounded-t-[40px] w-full"
              />
              <div className="w-11/12 px-5 md:px-7 pt-5 md:py-4">
                <h3>{hospital.name}</h3>
              </div>
              <p className="font-bold px-5 md:px-7">{hospital.specialties}</p>
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
}

export default NearestInstitution;
