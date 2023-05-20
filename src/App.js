import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar.component";
import Home from "./routes/Home/home.route";
import Profile from "./routes/Profile/profile.route";
import SignIn from "./routes/SignIn/signIn.route";
import SignUp from "./routes/SignUp/signUp.route";
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="signup" element={<SignUp></SignUp>}></Route>
          <Route path="signin" element={<SignIn></SignIn>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
