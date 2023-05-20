import "./profile.route.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const Profile = () => {
  // const [profileData, setProfileData] = useState({});
  const [profilePic, setProfilePic] = useState(null);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getProfilePic = async () => {
      if(currentUser){

        const result = await axios.get(
          `http://127.0.0.1:8000/profilepic/${currentUser.email}`
          );
          
          setProfilePic(result.data);
        }
    };

    getProfilePic();
  }, []);

  console.log(profilePic);

  const downloadImage = () => {
    saveAs(
      `http://127.0.0.1:8000/profilepic/${currentUser.email}`,
      "image.jpg"
    ); // Put your image url here.
  };
  return (
    <div className="profile-container">
      {!currentUser?<h1 className="col">PLEASE LOGIN FIRST!!!</h1>:
      <div className="row">
        <div className="col">
          <img
            src={`http://127.0.0.1:8000/profilepic/${currentUser.email}`}
          ></img>
        </div>
        <div className="col">
          <div className="profile-data">
            Name: {currentUser.firstname} {currentUser.lastname}
          </div>
          <div className="profile-data">Email:{currentUser.email}</div>
          <div className="profile-data">Mobile:{currentUser.phone}</div>
          <button onClick={downloadImage} className='download-button'>DOWNLOAD PROFILE PIC</button>
        </div>
      </div>
  }
    </div>
  );
};

export default Profile;
