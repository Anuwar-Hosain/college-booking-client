import { Link } from "react-router-dom";
import "./ResearchCard.css";

const ResearchCard = ({ research1 }) => {
  const { title, publication, summary, year } = research1;
  return (
    <>
      <div className="blogCard">
        <div className="p-3">
          <Link to="/">
            <h1 className="text-2xl font-semibold hover:text-[#ffb606] cursor-pointer transition mb-2">
              {title}
            </h1>
          </Link>
          <p className="mb-2 text-[#777] text-[18px]">
            {summary.slice(0, 100)}...
          </p>
          <Link to="/">
            <button className="uppercase font-bold Roboto  text-[#ffb606] ">
              Read More »
            </button>
          </Link>
        </div>
        <div className="p-3 cardBorder flex justify-between">
          <p>{year}</p>
          <p>{publication}</p>
        </div>
      </div>
    </>
  );
};

export default ResearchCard;
