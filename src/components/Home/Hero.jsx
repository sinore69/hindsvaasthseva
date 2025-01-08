import Hospital from "../../assets/hospital.svg";
import HealthCare from '../../assets/healthcare.svg';
function Hero() {
  return (
    <>
      <section className="w-full px-5">
        <div className="relative w-full bg-primary2 rounded-2xl flex flex-col items-center justify-start h-[40vh] md:h-[82vh]">
          <div className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-72 font-bold text-lg hidden md:block">BOOK THE INSTITUTIONS ONLINE FOR A HASSLE-FREE EXPERIENCE</div>
          {/* HealthCare Text */}
          <div className="absolute">
            <img src={HealthCare} alt="healthcaretext" className="py-10 px-10"/>
          </div>
            {/* Hospital Image */}
          <div className="absolute bottom-0">
            <img src={Hospital} alt="hospital"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
