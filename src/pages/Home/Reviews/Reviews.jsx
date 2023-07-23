import { useEffect, useState } from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="bg-[#E6E6E4] py-6">
      <div className="size">
        <div className="mb-10">
          <h1 className="text-center Roboto font-bold text-4xl uppercase">
            <samp className="Roboto">our</samp>{" "}
            <samp className="text-[#ffb606] Roboto">Reviews</samp>
          </h1>
        </div>
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center mx-24 my-16">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <BsFillChatQuoteFill className="text-8xl my-3 text-[#ffb606]"></BsFillChatQuoteFill>
                  <p className="py-8">{review.review_text}</p>
                  <h3 className="text-2xl text-[#ffb606]">
                    {review.reviewer_name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
