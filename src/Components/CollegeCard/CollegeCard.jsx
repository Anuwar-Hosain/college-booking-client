import { Link } from "react-router-dom";
import "./CollegeCard.css";

const CollegeCard = ({ singleCollege }) => {
  const {
    college_name,
    image,
    events,
    research_history,
    sports,
    admission_dates,
    _id,
  } = singleCollege;
  return (
    <div className="cardBody">
      <div className="flex justify-center">
        <img
          src={image}
          alt="card-img"
          className="w-full h-[200px] object-contain "
        />
      </div>
      <div className="my-4">
        <samp className="p-2 bg-[#ffb606] rounded text-white ">
          Admission Date: {admission_dates}
        </samp>
        <h1 className="Roboto text-[20px] font-semibold my-3">
          {college_name}
        </h1>
        <div className="mb-5">
          <p className="text-xl font-bold">Events:</p>
          <div className="grid grid-cols-3 border">
            {events.map((event, i) => (
              <>
                <p className="border-l-[1px] p-2" key={i}>
                  <samp className="font-semibold Roboto"> {i + 1}.</samp>{" "}
                  {event.event_name}
                </p>
              </>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <p className="text-xl font-bold">Research History:</p>
          <div className="">
            {research_history.map((research, i) => (
              <>
                <p className="border p-2" key={i}>
                  <samp className="font-semibold Roboto"> {i + 1}.</samp>{" "}
                  {research.title}. ({research.year})
                </p>
              </>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <p className="text-xl font-bold">Sports:</p>
          <div className="">
            {sports.map((sport, i) => (
              <>
                <p className="border p-2" key={i}>
                  <samp className="font-semibold Roboto"> {i + 1}.</samp>{" "}
                  {sport.team_name}. ({sport.sport})
                </p>
              </>
            ))}
          </div>
        </div>
      </div>
      <Link to={`/college/${_id}`}>
        <button className="btn w-full bg-[#ffb606] hover:bg-[#ffb606] Roboto text-[16px] text-white">
          See More
        </button>
      </Link>
    </div>
  );
};

export default CollegeCard;
