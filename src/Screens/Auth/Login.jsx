import React, { useState } from "react";
import "./Auth.css";
import { ReactComponent as RightArrow } from "../../assets/icons/rightarrow.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Lock } from "../../assets/icons/lock.svg";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Logo from "../../assets/images/logo1.png";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";
import Facebook from "../../assets/images/facebook.png";
import Linkedin from "../../assets/images/linkedin.png";
import X from "../../assets/images/x.png";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { loginUser } from "../../api/userServices";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState("email");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    login: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleFieldChange = (name, value) => {
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await loginUser(data);
      if (response?.data?.token) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: response?.data?.token,
            ...response?.data?.data,
          })
        );
        navigate("/");
      } else {
        toast.error(response?.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth__screen">
      <div className="login__wrap">
        <div className="login__header">
          <div className="login__header_text">Sign In</div>
          <img src={Logo} className="login__header_logo" alt="" />
        </div>
        <div className="login__title">
          Sign In to Get The Best Deals, Exclusive Offers with ImpoNexpo!
        </div>
        {loginType === "email" && (
          <div className="login__form_fieldbox">
            <label className="login__form_fieldlabel">
              Email Address<sup className="required__field_label">*</sup>
            </label>
            <div className="login__form_fieldwrap">
              <Mail className="login__form_fieldicon" />
              <input
                type="email"
                value={data.login}
                onChange={(e) => handleFieldChange("login", e.target.value)}
                className="login__form_field"
                placeholder="Please type your Email Address or Imponexppo  ID."
              />
            </div>
          </div>
        )}
        {loginType === "phone" && (
          <div className="login__form_fieldbox">
            <label className="login__form_fieldlabel">
              Phone No<sup className="required__field_label">*</sup>
            </label>
            <PhoneInput
              country={"us"}
              value={data.login}
              onChange={(phone) => handleFieldChange("login", phone)}
              containerClass="login__form_phoneinputcontainer"
              inputClass="login__form_phoneinputfield"
              buttonClass="login__form_phoneinputdrop"
            />
          </div>
        )}
        <div className="login__form_fieldbox">
          <label className="login__form_fieldlabel">
            Password<sup className="required__field_label">*</sup>
          </label>
          <div className="login__form_fieldwrap">
            <Lock className="login__form_fieldicon" />
            <input
              type={showPassword ? "text" : "password"}
              className="login__form_field"
              placeholder="Please Input your Password"
              value={data.password}
              onChange={(e) => handleFieldChange("password", e.target.value)}
            />
            {!showPassword && (
              <VisibilityOffIcon
                className="login__form_fieldpasseyeicon"
                onClick={() => setShowPassword(true)}
              />
            )}
            {showPassword && (
              <RemoveRedEyeIcon
                className="login__form_fieldpasseyeicon"
                onClick={() => setShowPassword(false)}
              />
            )}
          </div>
          <Link to="/forgot-password" className="login__form_fieldforgotpass">
            Forgot Password?
          </Link>
        </div>
        <div
          className="welcome__sbox_signinbtn"
          onClick={!isLoading ? handleSubmit : null}
        >
          {isLoading ? (
            <div className="btn__loader"></div>
          ) : (
            <>
              Continue To Sign In
              <RightArrow className="welcome__sbox_signinbtnicn" />
            </>
          )}
        </div>

        {loginType === "email" && (
          <div
            className="login__form_alternatelogin"
            onClick={() => setLoginType("phone")}
          >
            Login With Phone Number Instead
          </div>
        )}
        {loginType === "phone" && (
          <div
            className="login__form_alternatelogin"
            onClick={() => setLoginType("email")}
          >
            Login With Email Instead
          </div>
        )}
        <div className="welcome__sbox_socialicons">
          <img src={Apple} alt="" className="welcome__sbox_socialicon" />
          <img
            src={Google}
            alt=""
            className="welcome__sbox_socialicon"
            style={{ maxHeight: "60px" }}
          />
          <img src={Facebook} alt="" className="welcome__sbox_socialicon" />
          <img src={Linkedin} alt="" className="welcome__sbox_socialicon" />
          <img src={X} alt="" className="welcome__sbox_socialicon" />
        </div>
      </div>
    </div>
  );
};

export default Login;
