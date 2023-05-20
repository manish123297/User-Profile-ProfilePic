import "./signUp.route.scss";
import { useState } from "react";
import axios from "axios"
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const deafultField = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  };
  const navigate=useNavigate()

  const [textData, setTextData] = useState(deafultField);
  const [profilePic, setProfilePic] = useState(undefined);
  const [file, setFile] = useState("");

  const GetProfilePic = (e) => {
    const uploadedImg = e.target.files[0];
      // console.log(uploadedImg)
    setFile(uploadedImg);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(uploadedImg);
    fileReader.onload = () => {
      setProfilePic(fileReader.result);
      console.log(fileReader.result)
    };
  };

  const handleChange = (e) => {
    setTextData({ ...textData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

  

    try {
      const { firstname, lastname, email, phone, password } = textData;
      const formData = new FormData();
      formData.append("firstname",firstname);
      formData.append("lastname", lastname);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("profilepic", file);
      // console.log(formData.get("firstName"))
     await axios
      .post('http://127.0.0.1:8000/upload', formData,{headers:{
        "Content-Type":"multipart/form-data"
      }}
      )
      .then((res) => {
        console.log(res)
        swal("SignUp Successfull.", "Please SignIn to see your Profile");
        navigate('/signin')

      })
      .catch((err) => console.log(err));
    
    } catch (error) {
      console.log(error);
      swal("Error Occured.", "Please try again to signUp");

    }
  };

  return (
    <div className="form-register">
      <form onSubmit={onSubmitHandler}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder=" Enter Your First name"
              name="firstname"
              required
              value={textData.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Last name"
              name="lastname"
              required
              value={textData.lastname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
              name="email"
              required
              value={textData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Enter your Mobile No"
              className="form-control"
              name="phone"
              required
              value={textData.phone}
              onChange={handleChange}
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input
              type="password"
              placeholder="Enter Your Password"
              className="form-control"
              name="password"
              required
              value={textData.password}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
              type="file"
              placeholder="Enter your Mobile No"
              className="form-control"
              name="profilepic"
              required
              onChange={GetProfilePic}
            ></input>
          </div>
        </div>

        <button type="submit">SUBMIT</button>
      </form>

      {/* <img src={profilePic} alt="not available"></img> */}
    </div>
  );
};

export default SignUp;
