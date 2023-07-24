import { useEffect, useState } from "react";
import CollegeCard from "../../Components/CollegeCard/CollegeCard";

const Colleges = () => {
  const [college, setCollege] = useState();
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch("https://anu-booking-server.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => {
        setCollege(data);
      });
  }, []);
  const handleSearch = () => {
    fetch(`https://anu-booking-server.vercel.app/collegeSearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setCollege(data);
      });
  };
  return (
    <section className="size">
      <div className="my-[100px]">
        <div className="mb-10">
          <h1 className="text-center Roboto font-bold text-4xl uppercase">
            <samp className=" Roboto">best</samp>{" "}
            <samp className="text-[#ffb606] Roboto">colleges</samp>
          </h1>
        </div>
        <div className="flex justify-end my-10">
          <div className="relative w-[400px]">
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search..."
              className="input input-bordered w-full "
            />
            <button
              onClick={handleSearch}
              className="btn btn-primary bg-[#ffb606] hover:bg-[#ffb606] text-white outline-[#ffb606] border-[#ffb606] hover:border-[#ffb606] absolute top-0 right-0 rounded-l-none"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          {college?.map((singleCollege, index) => (
            <CollegeCard
              key={index}
              singleCollege={singleCollege}
            ></CollegeCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Colleges;
