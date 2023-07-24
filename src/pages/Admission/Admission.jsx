import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
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
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Photo</th>
                <th>College Name</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {college?.map((singleCollege, i) => (
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
                  <td>{singleCollege.college_name}</td>
                  <td>{singleCollege.location}</td>
                  <th>
                    <Link to={`/admission/${singleCollege._id}`}>
                      <button className="btn bg-[#ffb606] hover:bg-[#ffb606] Roboto  text-white ">
                        Apply Now
                      </button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Admission;
