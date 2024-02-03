import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/navbarlogo.png";
import Person from "../../assets/icons/person2.svg";
import { Link } from "react-router-dom";
import CountriesDropDown from "../../Screens/Home/Components/CountriesDropDown/CountriesDropDown";
import SearchIcon from "@mui/icons-material/Search";
import NavbarDropDown from "./NavbarDropDown/NavbarDropDown";

const Navbar = () => {
  return (
    <div className="navbar__wrap">
      <img src={Logo} alt="" className="navbar__brand_logo" />
      <div className="navbar__searches_wrap">
        <div className="navbar__search_item">
          {" "}
          <CountriesDropDown />
        </div>
        <div className="navbar__search_item">
          {" "}
          <NavbarDropDown />
        </div>
        <div className="navbar__search_fieldwrap">
          <input
            type="text"
            className="navbar__search_field"
            placeholder="Got a Product to Source? Imponexpo it here!"
          />
          <SearchIcon className="navbar__search_icon" />
        </div>
      </div>
      <div className="navbar__auth_actions">
        <div className="navbar__auth_actleft">
          <img src={Person} alt="" className="navbar__auth_actlefticon" />
        </div>
        <div className="navbar__auth_actright">
          <Link to="/register">Sign Up/</Link>
          <Link to="login">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
