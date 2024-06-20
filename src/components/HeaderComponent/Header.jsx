
import logo from "../../assets/Hunger.gif";
import { useState } from "react";

export const Header = () => {

  const [btnName, setBtnName] = useState('Login') 


  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="hunger-logo" className="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login" onClick={() => {
            btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
          }}>${btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
