import "./signIn.route.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate=useNavigate()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setCurrentUser } = useContext(UserContext);

  const submitHandler = (e) => {
    try {
      axios
        .get(`http://127.0.0.1:8000/userdetail/${e.email}`)
        .then((res) => {
          setCurrentUser(res.data);
          swal("Login Successfull.", "We Are Redirecting you to your profile");
          navigate('/profile')
        })
        .catch((err) => console.log("Error in Geting Response"));
    } catch (e) {
      swal("Error Ocurred", "Please try Again");
      console.log("Error Ocurred During LogIn");
    }
    reset();
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit((e) => submitHandler(e))}>
        <div className="row">
          <div className="col">
            <input
              style={errors.email ? { border: "2px solid brown" } : {}}
              type="email"
              name="email"
              className="form-control"
              placeholder=" Enter Your Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p style={{ color: "brown", fontWeight: "bold" }}>
                email is required*
              </p>
            )}
          </div>
          <div className="col">
            <input
              style={errors.password ? { border: "2px solid brown" } : {}}
              type="password"
              name="password"
              className="form-control"
              placeholder=" Enter Your Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p style={{ color: "brown", fontWeight: "bold" }}>
                password is required*
              </p>
            )}
          </div>
        </div>

        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default SignIn;
