import Button from "../reusable/Button";

function HospitalOverview() {
  return (
    <>
    {/* Name and rating of the Hospital */}
    <div className="flex flex-col items-start pt-5">
        <div className="flex-row flex items-center justify-between w-full">
          <h1>Hospital Name</h1>
          <Button>Book Now</Button>
        </div>
        <div>Rating for the Hospital</div>
      </div>
      <h2>Overview</h2>
      <p className="text-justify">
        Overview Paragraph...With a stay at The Fullerton Hotel Singapore, youll
        be centrally located in Singapore, steps from Cavenagh Bridge and
        Anderson Bridge. This 5-star hotel is close to Chinatown Heritage Center
        and Universal Studios Singapore®. Make yourself at home in one of the
        400 individually furnished guestrooms...
      </p>
    </>
  );
}

export default HospitalOverview;
