
import logo from "../../assets/Hunger.gif";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
