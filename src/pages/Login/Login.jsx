import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
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
      <div className="w-1/2 m-auto my-[100px]">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
              {...register("password", { required: true })}
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && (
              <span className="text-red-500 my-2">This field is required</span>
            )}
            <label className="label">
              <Link
                to="/reset-password"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
            <p className="text-red-600">{error}</p>
          </div>

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
            New Here?
            <Link className="btn-link" to="/sign-up">
              Create an account
            </Link>
          </small>
        </p>
        <div className="divider">Or, login with</div>
        <div className="flex justify-center gap-2">
          <div
            onClick={handleGoogleSingIn}
            className="bg-[#fdd349] p-2 flex items-center gap-2 rounded text-white text-center cursor-pointer"
          >
            <BsGoogle className="text-[#4285F4]"></BsGoogle>
            <p className="text-[#DB4437]">Google</p>
          </div>
          <div
            // onClick={handleGoogleSingIn}
            className="bg-[#fdd349] p-2 flex items-center gap-2 rounded text-white text-center cursor-pointer"
          >
            <FaFacebook className="text-[#4285F4]"></FaFacebook>
            <p className="text-[#4285F4]">Facebook</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
