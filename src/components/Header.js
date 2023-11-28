import logo from "../../img/logo.png";
import { useState } from "react";

const Header = () => {
  const [btnNamereact, setbtnNamereact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          {/* <li>Cart</li> */}
          {/* <button
            className="login-btn"
            onClick={() => {
              btnNamereact === "Login"
                ? setbtnNamereact("Logout")
                : setbtnNamereact("Login");
            }}
          >
            {btnNamereact}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
