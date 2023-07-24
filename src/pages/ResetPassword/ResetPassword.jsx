import { useForm } from "react-hook-form";
import "./ResetPassword.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const { passwordReset } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    passwordReset(email).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Please Check Your Email.",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  return (
    <div>
      <section className="size">
        <div className="hero min-h-[80vh]">
          <div className="hero-content flex-col">
            <div className="card flex-shrink-0 w-[500px] cardSection">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email"
                    {...register("email", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-500 my-2">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Change Password"
                    className="btn bg-[#fbc102] hover:bg-[#fdd349] Roboto text-[18px] text-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
