import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Swal from "sweetalert2";
import "./ApplyForm.css";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const ApplyForm = () => {
  const { user } = useContext(AuthContext);
  const college = useLoaderData();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [value, setValue] = useState();
  console.log(value);

  //   on
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          data.image = imgURL;
          data.college = college.college_name;
          data.college_id = college._id;
          console.log(data);
          fetch("https://anu-booking-server.vercel.app/applyForm", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your Message Successfully send",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          reset();
        }
      });
  };
  return (
    <section className="size">
      <div className="my-[100px]">
        <div className="mb-10">
          <h1 className="text-center Roboto font-bold text-4xl uppercase">
            <samp className=" Roboto">Apply</samp>{" "}
            <samp className="text-[#ffb606] Roboto">Form</samp>
          </h1>
        </div>
        {/* form section */}
        <form onSubmit={handleSubmit(onSubmit)} className="mb-[100px]">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text Roboto font-semibold">Name:*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name..."
              value={user.displayName}
              required
              className="input input-bordered w-full"
            />
            {errors.name && (
              <span className="text-red-500 my-2">This field is required</span>
            )}
          </div>
          <div className="flex">
            <div className="form-control w-full mr-3">
              <label className="label">
                <span className="label-text Roboto font-semibold">
                  Subject:*
                </span>
              </label>
              <select
                {...register("Subject", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Select Subject?
                </option>
                <option>English</option>
                <option>Regional Language(s)</option>
                <option>Maths</option>
                <option>Economics</option>
                <option>Computer Sciences</option>
                <option>Architecture and Design</option>
                <option>Business</option>
                <option>Engineering</option>
                <option>Law</option>
                <option>Public Administration</option>
                <option>Physics</option>
              </select>
              {errors.category && (
                <span className="text-red-500 my-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text Roboto font-semibold">
                  Date of Birth:*
                </span>
              </label>
              <input
                type="date"
                {...register("date", { required: true })}
                placeholder="Enter your country..."
                required
                className="input input-bordered w-full"
              />
              {errors.country && (
                <span className="text-red-500 my-2">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text Roboto font-semibold">Email:*</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email address..."
              required
              value={user.email}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <span className="text-red-500 my-2">This field is required</span>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text Roboto font-semibold">
                Contact Number:*
              </span>
            </label>
            <PhoneInput
              className="input input-bordered w-full"
              placeholder="Enter phone number"
              required
              value={value}
              onChange={setValue}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text Roboto font-semibold">Address:*</span>
            </label>
            <input
              type="text"
              {...register("Address", { required: true })}
              placeholder="Enter your company..."
              required
              className="input input-bordered w-full"
            />
            {errors.company && (
              <span className="text-red-500 my-2">This field is required</span>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text Roboto font-semibold">
                Candidate Image:*
              </span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full"
            />
            {errors.image && (
              <span className="text-red-500 my-2">This field is required</span>
            )}
          </div>
          <div className="w-full my-4">
            <input
              type="submit"
              value="SUBMIT"
              className="btn  bg-[#ffb606] hover:bg-[#ffb606] Roboto text-[18px] w-full text-white"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplyForm;
