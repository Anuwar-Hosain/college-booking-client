import { Link } from "react-router-dom";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-banner flex items-center">
      <div className="size xl:text-right">
        <h1 className="text-3xl my-3">
          Online Booking system for <br />{" "}
          <samp className="Roboto text-[40px] font-bold"> Colleges</samp>
        </h1>
        <div className="">
          <Link to="/sign-up">
            <button className="btn bg-[#ffb606] hover:bg-[#ffb606] text-white text-[17px] mr-3">
              Get a Free Account
            </button>
          </Link>
          <Link to="/login">
            <button className="btn login-btn-hero hover">Login</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
