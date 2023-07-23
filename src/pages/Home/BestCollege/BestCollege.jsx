import { useEffect, useState } from "react";
import CollegeCard from "../../../Components/CollegeCard/CollegeCard";

const BestCollege = () => {
  const [college, setCollege] = useState();
  useEffect(() => {
    fetch("college.json")
      .then((res) => res.json())
      .then((data) => {
        setCollege(data);
      });
  }, []);
  return (
    <section className="size">
      <div className="my-9">
        <h1 className="text-4xl font-bold uppercase text-center">
          Best college
        </h1>
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

export default BestCollege;
