import "./CollegeImage.css";
import img1 from "../../../assets/abouts/1.jpg";
import img2 from "../../../assets/abouts/2.jpg";
import img3 from "../../../assets/abouts/3.jpg";
import img4 from "../../../assets/abouts/4.jpg";
import img5 from "../../../assets/abouts/5.jpg";
import img6 from "../../../assets/abouts/6.jpg";
import img7 from "../../../assets/abouts/7.jpg";
import img8 from "../../../assets/abouts/8.jpg";
const CollegeImage = () => {
  return (
    <>
      <div className="bg-[#E6E6E4] py-6">
        <div className="size ">
          <div>
            <div className="mb-10">
              <h1 className="text-center Roboto font-bold text-4xl uppercase">
                <samp className="Roboto">our</samp>{" "}
                <samp className="text-[#ffb606] Roboto">gallery</samp>
              </h1>
            </div>
            <div className="grid grid-cols-4 lg:gap-5 gap-2">
              <div className="inner">
                <img src={img1} alt="image" className="rounded-md img-about" />
              </div>
              <div className="inner">
                <img src={img2} alt="image" className="rounded-md img-about" />
              </div>
              <div className="inner">
                <img src={img3} alt="image" className="rounded-md img-about" />
              </div>
              <div className="inner">
                <img src={img4} alt="image" className="rounded-md img-about" />
              </div>
              <div className="inner">
                <img src={img5} alt="image" className="rounded-md img-about" />
              </div>
              <div className="inner">
                <img src={img6} alt="image" className="rounded-md img-about" />
              </div>
              <div className="inner">
                <img src={img7} alt="image" className="rounded-md img-about" />
              </div>
              <div className="inner">
                <img src={img8} alt="image" className="rounded-md img-about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeImage;
