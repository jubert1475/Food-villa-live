import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import LoginPage from "./LoginPage";
const Logo = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo_img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnm9yURneW64_3Ci5fRm1dsvfCIiyj2Ox8KQ&usqp=CAU"
      ></img>
    </a>
  );
};

const Header = () => {
  const [userLogin, setUserLogin] = useState(true);
  const isOnline = useOnline();

  return (
    <>
      <div className="header">
        <Logo />
      

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">contact us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>

        <h1>{isOnline ? "🟢" : "🔴"}</h1>
        {userLogin ? (
          <button className="LogInBtn" onClick={()=>{setUserLogin(false)}  } >
            Login
          </button>
        ) : (
          <button className="LogInBtn" onClick={()=>{setUserLogin(true)}}>
            Logout
          </button>
        )}
      </div>
      </div>
    </>
  );
};

export default Header;
