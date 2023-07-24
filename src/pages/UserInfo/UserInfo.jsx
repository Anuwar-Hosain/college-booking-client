import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const UserInfo = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [userInfo, setUserInfo] = useState();
  console.log(userInfo);
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data[0]);
      });
  }, [user, userInfo]);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const university = form.university.value;
    const address = form.address.value;
    const data = { name, email, university, address };
    console.log(data);
    fetch(`http://localhost:5000/user/${userInfo._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "update successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(result);
      });
  };
  return (
    <section className="size">
      <div className="my-[100px]">
        <div className="mb-10">
          <h1 className="text-center Roboto font-bold text-4xl uppercase">
            <samp className=" Roboto">User</samp>{" "}
            <samp className="text-[#ffb606] Roboto">Information</samp>
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="card w-96 bg-base-100 shadow-md">
            <figure className="avatar">
              <div className="w-24 rounded-full">
                <img src={user.photoURL} alt="Shoes" />
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{userInfo?.name}</h2>
              <div>
                <p>Email: </p>
                <p className="font-semibold">{userInfo?.email}</p>
              </div>
              <div>
                <p>University:</p>
                {userInfo?.university === "" ? (
                  <p>N/A</p>
                ) : (
                  <p className="font-semibold">{userInfo?.university}</p>
                )}
              </div>
              <div>
                <p>Address: </p>
                {userInfo?.address === "" ? (
                  <p>N/A</p>
                ) : (
                  <p className="font-semibold">{userInfo?.address}</p>
                )}
              </div>
              <div className="card-actions justify-end">
                {/* modal */}
                <label
                  htmlFor={`my-modal-${userInfo?._id}`}
                  className="btn bg-[#ffb606] hover:bg-[#ffb606] Roboto  text-white"
                >
                  Edit Info
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id={`my-modal-${userInfo?._id}`}
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box  relative">
                    <label
                      htmlFor={`my-modal-${userInfo?._id}`}
                      className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <div className="">
                      <form onSubmit={onSubmit} className="">
                        <div className="form-control w-full ">
                          <label className="label">
                            <span className="label-text Roboto font-semibold">
                              Name:*
                            </span>
                          </label>
                          <input
                            type="text"
                            // {...register("title", { required: true })}
                            placeholder="Enter your ratting..."
                            name="name"
                            defaultValue={userInfo?.name}
                            step="any"
                            required
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="form-control w-full ">
                          <label className="label">
                            <span className="label-text Roboto font-semibold">
                              Email:*
                            </span>
                          </label>
                          <input
                            type="email"
                            // {...register("title", { required: true })}
                            placeholder="Enter your ratting..."
                            name="email"
                            value={userInfo?.email}
                            step="any"
                            required
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="form-control w-full ">
                          <label className="label">
                            <span className="label-text Roboto font-semibold">
                              University:*
                            </span>
                          </label>
                          <input
                            type="text"
                            // {...register("title", { required: true })}
                            placeholder="Enter your ratting..."
                            name="university"
                            step="any"
                            defaultValue={userInfo?.university}
                            required
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="form-control w-full ">
                          <label className="label">
                            <span className="label-text Roboto font-semibold">
                              Address:*
                            </span>
                          </label>
                          <input
                            type="text"
                            // {...register("title", { required: true })}
                            placeholder="Enter your ratting..."
                            name="address"
                            defaultValue={userInfo?.address}
                            step="any"
                            required
                            className="input input-bordered w-full"
                          />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
