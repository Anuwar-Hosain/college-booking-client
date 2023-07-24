import { useEffect, useState } from "react";
import CollegeCard from "../../Components/CollegeCard/CollegeCard";

const Colleges = () => {
  const [college, setCollege] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => {
        setCollege(data);
      });
  }, []);
  return (
    <section className="size">
      <div className="my-[100px]">
        <div className="mb-10">
          <h1 className="text-center Roboto font-bold text-4xl uppercase">
            <samp className=" Roboto">best</samp>{" "}
            <samp className="text-[#ffb606] Roboto">colleges</samp>
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-3">
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
