import { useState } from "react";
import "./navbar.scss";
import logo from "/logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a className="logo" href="/">
          <img src={logo} alt="" />
          <span>Onca Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </div>
      <div className="right">
        <a href="/sign-in" className="login-btn">
          sign in
        </a>
        <a href="/sign-up" className="register-btn">
          sign up
        </a>
        <div className="menu-icon">
          <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
          <a href="/sign-in">sign in</a>
          <a href="/sign-up">sign up</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
