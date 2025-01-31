import "./Navbar.css";
import Netflix_Logo from "./../../assets/Netflix_Logo.png";
import { useRef, useEffect } from "react";
import { logout } from "../../firebase";

export default function Navbar() {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        navRef.current.classList.add("navbar-black");
      } else {
        navRef.current.classList.remove("navbar-black");
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img className="navbarLogo" src={Netflix_Logo} alt="navbarLogo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img
          className="icons"
          src="https://img.icons8.com/?size=80&id=ObuWtTlsoTj6&format=png"
          alt="navbarSearch"
        />
        <p>Kids</p>
        <img
          className="icons"
          src="https://img.icons8.com/?size=48&id=17317&format=png"
          alt="navbarBell"
        />
        <div className="navbar-profile">
          <img
            className="navbar-avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="navbarAvatar"
          />
          <img
            className="navbarArrow"
            src="https://img.icons8.com/?size=48&id=pfuW6dHMyTUI&format=png"
            alt="navbarArrow"
          />
          <div className="navbar-dropdown">
            <p onClick={() => logout()}>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}
