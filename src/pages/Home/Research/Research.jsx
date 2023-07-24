import { useEffect, useState } from "react";
import ResearchCard from "../../../Components/ResearchCard/ResearchCard";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Research = () => {
  const [research, setResearch] = useState();
  useEffect(() => {
    fetch("https://anu-booking-server.vercel.app/research")
      .then((res) => res.json())
      .then((data) => {
        setResearch(data.slice(0, 4));
      });
  }, []);
  return (
    <>
      <section className="size">
        <div className="my-[100px]">
          <div className="mb-10">
            <h1 className="text-center Roboto font-bold text-4xl uppercase">
              <samp className="text-[#ffb606] Roboto">research</samp>{" "}
              <samp className="Roboto">papers</samp>
            </h1>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-2">
            {research?.map((research1, i) => (
              <ResearchCard key={i} research1={research1}></ResearchCard>
            ))}
          </div>
          <div className="text-center my-3 uppercase">
            <button className="btn  bg-[#ffb606] hover:bg-[#ffb606] Roboto text-[18px] text-white">
              <Link to="/" className="flex gap-1">
                All RESEARCH PAPERS <FaLongArrowAltRight></FaLongArrowAltRight>
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
