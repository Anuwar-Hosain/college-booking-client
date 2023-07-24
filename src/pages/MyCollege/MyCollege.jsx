import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const [myCollege, setMyCollege] = useState();
  useEffect(() => {
    fetch(`https://anu-booking-server.vercel.app/apply-college/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCollege(data);
        console.log(data);
      });
  }, [user]);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const ratting = form.ratting.value;
    const description = form.description.value;
    const review = { ratting, description, name: user.displayName };
    console.log(review);
    fetch("https://anu-booking-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
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
          form.reset();
        }
      });
  };

  return (
    <section className="size">
      <div className="my-[100px] mb-[300px]">
        <div className="mb-10">
          <h1 className="text-center Roboto font-bold text-4xl uppercase">
            <samp className=" Roboto">Apply</samp>{" "}
            <samp className="text-[#ffb606] Roboto">Colleges</samp>
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Candidate Photo</th>
                <th>Candidate Name</th>
                <th>College Name</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {myCollege?.map((singleCollege, i) => (
                <tr key={singleCollege._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={singleCollege.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{singleCollege.name}</td>
                  <td>{singleCollege.college}</td>
                  <td className="text-center">
                    <button className="btn bg-[#ffb606] hover:bg-[#ffb606] Roboto  text-white ">
                      Details
                    </button>

                    {/* modal */}
                    <label
                      htmlFor={`my-modal-${singleCollege._id}`}
                      className="btn bg-[#ffb606] hover:bg-[#ffb606] Roboto  text-white"
                    >
                      Review
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id={`my-modal-${singleCollege._id}`}
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box  relative">
                        <label
                          htmlFor={`my-modal-${singleCollege._id}`}
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <div className="">
                          <h1 className="text-xl font-semibold">
                            {singleCollege?.college}
                          </h1>
                          <form onSubmit={onSubmit} className="">
                            <div className="form-control w-full ">
                              <label className="label">
                                <span className="label-text Roboto font-semibold">
                                  Ratting:*
                                </span>
                              </label>
                              <input
                                type="number"
                                // {...register("title", { required: true })}
                                placeholder="Enter your ratting..."
                                name="ratting"
                                step="any"
                                required
                                className="input input-bordered w-full"
                              />
                            </div>

                            <div className="form-control w-full ">
                              <label className="label">
                                <span className="label-text Roboto font-semibold">
                                  Description:*
                                </span>
                              </label>
                              <textarea
                                // {...register("description", { required: true })}
                                className="textarea textarea-bordered w-full h-[400px]"
                                name="description"
                                placeholder="Enter your description..."
                                required
                              ></textarea>
                            </div>
                            <div className="w-full my-4">
                              <input
                                type="submit"
                                value="Update product"
                                className="btn uppercase  bg-[#ffb606] hover:bg-[#ffb606] Roboto  w-full text-white"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* modal */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyCollege;
