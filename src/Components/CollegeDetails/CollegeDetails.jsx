import { useLoaderData } from "react-router-dom";
import ResearchCard from "../ResearchCard/ResearchCard";

const CollegeDetails = () => {
  const college = useLoaderData();
  console.log(college);
  return (
    <section className="size">
      <div className="my-[100px]">
        <div className="mb-10">
          <h1 className="text-center Roboto font-bold text-4xl uppercase">
            <samp className="text-[#ffb606]  Roboto">college</samp>{" "}
            <samp className="Roboto">Details</samp>
          </h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <img src={college?.image} alt="college image" />
          </div>
          <div className="my-5">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold Roboto text-center">
                {college?.college_name}
              </h1>
              <samp className="p-2 bg-[#ffb606] rounded text-whitetext-center">
                Admission Date: {college?.admission_dates}
              </samp>
            </div>
            <div>
              <h1>Contact Info:</h1>
              <p>Address: {college?.contact_info.address}</p>
              <p>Email: {college?.contact_info.email}</p>
              <p>Phone: {college?.contact_info.phone}</p>
            </div>
            <div className="my-5">
              <h1>Events:</h1>
              <div className="border">
                {college?.events.map((event, i) => (
                  <>
                    <p className="border-l-[1px] p-2" key={i}>
                      <samp className="font-semibold Roboto">
                        {" "}
                        {i + 1}.Name:
                      </samp>{" "}
                      {event.event_name}
                    </p>
                    <p className="border-l-[1px] p-2" key={i}>
                      <samp className="Roboto">Date:</samp> {event.date}
                    </p>
                    <p className="border-l-[1px] p-2" key={i}>
                      <samp className="Roboto">Location:</samp> {event.location}
                    </p>
                    <p className="border-l-[1px] p-2" key={i}>
                      <samp className="Roboto">Organizer:</samp>{" "}
                      {event.organizer}
                    </p>
                    <p className="border-l-[1px] p-2" key={i}>
                      {event.description}
                    </p>
                  </>
                ))}
              </div>
            </div>
            <div className="my-5">
              <h1>Facilities:</h1>
              <div className="grid grid-cols-4 border">
                {college?.facilities.map((facility, i) => (
                  <>
                    <p className="border-l-[1px] p-2" key={i}>
                      <samp className="font-semibold Roboto"> {i + 1}.</samp>{" "}
                      {facility}
                    </p>
                  </>
                ))}
              </div>
            </div>
            <div className="my-5">
              <h1>Research:</h1>
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-2">
                {college?.research_history.map((research1, i) => (
                  <ResearchCard key={i} research1={research1}></ResearchCard>
                ))}
              </div>
            </div>
            <div className="my-5">
              <h1>Sports:</h1>
              <div className="border">
                {college?.sports.map((event, i) => (
                  <>
                    <p className="border-l-[1px] p-2" key={i}>
                      <samp className="font-semibold Roboto">
                        {" "}
                        {i + 1}.Team Name:
                      </samp>{" "}
                      {event.team_name}
                    </p>
                    <p className="border-l-[1px] p-2" key={i}>
                      <samp className="Roboto">Coach Name:</samp> {event.coach}
                    </p>
                    <p className="border-l-[1px] p-2" key={i}>
                      <samp className="Roboto">Sport:</samp> {event.sport}
                    </p>
                    <p className="border-l-[1px] p-2" key={i}>
                      <samp className="Roboto">players:</samp>{" "}
                      {event?.players.map((facility, i) => (
                        <>
                          <p className="border-l-[1px] p-2" key={i}>
                            <samp className="font-semibold Roboto">
                              {" "}
                              {i + 1}.
                            </samp>{" "}
                            {facility}
                          </p>
                        </>
                      ))}
                    </p>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeDetails;
