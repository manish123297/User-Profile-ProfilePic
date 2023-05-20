import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div style={{backgroundImage:"linear-gradient(to bottom right, #00695c, #c34a4a)" ,padding:"20px" }}>
        <Link style={{color:"white",textDecoration:"none",fontWeight:"bold" ,marginLeft:"30px"}} to="/">HOME</Link>
        <Link style={{color:"white",textDecoration:"none",fontWeight:"bold",marginLeft:"30px"}} to="signup">SIGNUP</Link>
        <Link style={{color:"white",textDecoration:"none",fontWeight:"bold",marginLeft:"30px"}} to="signin">SIGNIN</Link>
        <Link style={{color:"white",textDecoration:"none",fontWeight:"bold",marginLeft:"30px"}} to="profile">PROFILE</Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Navbar;
