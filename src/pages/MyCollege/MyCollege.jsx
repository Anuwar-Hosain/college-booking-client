import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const [myCollege, setMyCollege] = useState();
  const [updateCollege, setUpdateCollege] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/apply-college/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCollege(data);
        console.log(data);
      });
  }, [user]);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
  };
  const updateHandle = (product) => {
    setUpdateCollege(product);
    console.log(product);
  };
  return (
    <section className="size">
      <div className="my-[100px]">
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
                      onClick={() => updateHandle(myCollege)}
                      htmlFor={`my-modal-${myCollege._id}`}
                      className="btn bg-[#ffb606] hover:bg-[#ffb606] Roboto  text-white"
                    >
                      Review
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id={`my-modal-${myCollege._id}`}
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box  relative">
                        <label
                          htmlFor={`my-modal-${myCollege._id}`}
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <div className="">
                          <h1>hello{updateCollege?.college}</h1>
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
                                name="title"
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
