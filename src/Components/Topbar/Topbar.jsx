import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { ReactComponent as Drop } from "../../assets/icons/drop.svg";
import Nigeria from "../../assets/flags/nigeria.png";
const Topbar = () => {
  return (
    <div className="topbar__wrap">
      <div className="topbar__left">
        <Link className="topbar__item" to="#">
          Dropshipping{" "}
        </Link>
        <Link className="topbar__item" to="#">
          Trade Shows{" "}
        </Link>
        <Link className="topbar__item" to="#">
          Help{" "}
        </Link>
        <Link className="topbar__item" to="#">
          Blog{" "}
        </Link>
        <Link className="topbar__item" to="#">
          Make Money On Imponexpo
          <Drop stroke="black" className="topbar__item_drop" />
        </Link>
        <Link className="topbar__item" to="#">
          For Buyers
          <Drop stroke="black" className="topbar__item_drop" />
        </Link>
      </div>
      <div className="topbar__right">
        <Link
          className="topbar__item"
          to="#"
          style={{ border: "none", color: "rgba(29, 93, 199, 1)" }}
        >
          SAVE MORE ON APP
        </Link>
        <div className="topbar__item_language">
          <div className="topbar__item_langleft">
            <img src={Nigeria} alt="" className="topbar__item_langlflag" />
            <div className="topbar__item_langlname">Nigeria</div>
          </div>
          <div className="topbar__item_langright">
            <div className="topbar__item_langrtop">English</div>
            <div className="topbar__item_langrbottom">Naira</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
