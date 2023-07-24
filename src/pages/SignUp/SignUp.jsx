import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { BsGoogle } from "react-icons/bs";

const SignUp = () => {
  const { logOut, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.con_password) {
      setErrorPass("password not same");
      return;
    }
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const saveUser = {
              name: data.name,
              email: data.email,
              image: data.photo,
              university: "",
              address: "",
            };
            fetch("https://anu-booking-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  logOut();
                  navigate("/login");
                }
              });
            reset();
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handleGoogleSingIn = () => {
    googleSignIn()
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const image = result.user.photoURL;

        const saveUser = { name, email, image, university: "", address: "" };
        console.log(saveUser);
        fetch("https://anu-booking-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="w-1/2 m-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="Name"
              placeholder="Name"
              {...register("name", { required: true })}
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-500 my-2">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              {...register("photo", { required: true })}
              className="input input-bordered"
            />
            {errors.photo && (
              <span className="text-red-500 my-2">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              {...register("email", { required: true })}
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-500 my-2">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && (
              <span className="text-red-500 my-2">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="password"
              {...register("con_password", { required: true })}
              placeholder="confirm password"
              className="input input-bordered"
            />
            {errors.con_password && (
              <span className="text-red-500 my-2">This field is required</span>
            )}
            <p className="text-red-600">{errorPass}</p>
          </div>
          <p className="text-red-600">{error}</p>

          <div className="form-control mt-6">
            <input
              className="btn bg-[#fbc102] hover:bg-[#fdd349]"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <p className="text-center">
          <small>
            Already have an account
            <Link className="btn-link" to="/login">
              Login
            </Link>
          </small>
        </p>
        <div className="divider">Or, login with</div>
        <div className="flex justify-center">
          <div
            onClick={handleGoogleSingIn}
            className="bg-[#F4B400] p-2 flex items-center gap-2 rounded text-white text-center cursor-pointer"
          >
            <BsGoogle className="text-[#4285F4]"></BsGoogle>
            <p className="text-[#DB4437]">Google</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
