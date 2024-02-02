import React, { useState } from "react";
import "./Auth.css";
import TradeImage from "../../assets/images/trade.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ReactComponent as RightArrow } from "../../assets/icons/rightarrow.svg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Logo from "../../assets/images/logo1.png";
import { registerUser } from "../../api/userServices";
import Checkbox from "@mui/material/Checkbox";
const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  password: "",
  accountType: "",
  companyName: "",
  countryRegion: "",
  reasonForSignup: "",
};

const Register = () => {
  const [data, setData] = useState(initialData);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleFieldChange = (name, value) => {
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await registerUser(data);
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
        toast.error(
          response?.message || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="registration__form_screen">
      <div className="registration__form_left">
        <div className="registration__form_lheading">
          Your Importation and Exportation Success start here!
        </div>
        <ul className="registration__form_llist">
          <li className="registration__form_llitem">
            Streamlined Import/Export Processes
          </li>
          <li className="registration__form_llitem">
            Comprehensive B2B Marketplace
          </li>
          <li className="registration__form_llitem">
            Access to Diverse Range of Products
          </li>
          <li className="registration__form_llitem">
            Connections with Worldwide Network of Suppliers and Importers.
          </li>
          <li className="registration__form_llitem">
            Platform built to make you succeed in Cross-border Trade
          </li>
        </ul>
        <div className="registration__form_limgwrap">
          <img src={TradeImage} alt="" className="registration__form_limg" />
        </div>
      </div>
      <div className="registration__form_right">
        <form className="registration__form_rwrap">
          <div className="registration__form_rheader">
            <div className="registration__form_rhtxt">Sign Up</div>
            <img src={Logo} alt="" className="registration__form_rhlogo" />
          </div>
          <div className="registration__form_rtitle">
            Creating an Account on Imponexpo is{" "}
            <span
              style={{ fontStyle: "italic", color: "rgba(29, 93, 199, 1)" }}
            >
              fast
            </span>
            ,{" "}
            <span style={{ fontStyle: "italic", color: "rgba(0, 186, 242, 1" }}>
              Easy
            </span>{" "}
            and <span style={{ color: "rgba(246, 14, 14, 1)" }}>for free</span>!
          </div>
          <div className="login__form_fieldbox">
            <div className="register__form_fieldwrap">
              {/* <Mail className="login__form_fieldicon" /> */}
              <input
                type="text"
                value={data.firstName}
                onChange={(e) => handleFieldChange("firstName", e.target.value)}
                className="login__form_field"
                placeholder="First Name*"
              />
            </div>
          </div>
          <div className="login__form_fieldbox">
            <div className="register__form_fieldwrap">
              {/* <Mail className="login__form_fieldicon" /> */}
              <input
                type="text"
                value={data.lastName}
                onChange={(e) => handleFieldChange("lastName", e.target.value)}
                className="login__form_field"
                placeholder="Last Name*"
              />
            </div>
          </div>
          <div className="login__form_fieldbox">
            <div className="register__form_fieldwrap">
              <input
                type="email"
                value={data.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                className="login__form_field"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="login__form_fieldbox">
            <div className="register__form_fieldwrap">
              <PhoneInput
                country={"us"}
                value={data.mobileNumber}
                onChange={(phone) => handleFieldChange("mobileNumber", phone)}
                containerClass="login__form_phoneinputcontainer"
                inputClass="login__form_phoneinputfield"
                buttonClass="login__form_phoneinputdrop"
              />
            </div>
          </div>
          <div className="login__form_fieldbox">
            <div className="register__form_fieldwrap">
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
          </div>
          <div className="login__form_fieldbox">
            <div className="register__form_fieldwrap">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="login__form_field"
                placeholder="Please Confirm your Password"
                value={data.confirmPassword}
                onChange={(e) =>
                  handleFieldChange("confirmPassword", e.target.value)
                }
              />
              {!showConfirmPassword && (
                <VisibilityOffIcon
                  className="login__form_fieldpasseyeicon"
                  onClick={() => setShowConfirmPassword(true)}
                />
              )}
              {showConfirmPassword && (
                <RemoveRedEyeIcon
                  className="login__form_fieldpasseyeicon"
                  onClick={() => setShowConfirmPassword(false)}
                />
              )}
            </div>
          </div>
          <FormControl>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                padding: "10px 0",
              }}
            >
              {" "}
              <label
                className="login__form_fieldlabel"
                style={{ fontSize: "13px", padding: "5px" }}
              >
                Creating Account For:*
              </label>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <FormControlLabel
                  value="corporation"
                  sx={{ fontSize: "12px", "& *": { fontSize: "12px" } }}
                  control={
                    <Radio
                      onChange={(e) =>
                        handleFieldChange("accountType", e.target.value)
                      }
                      size="small"
                      sx={{ "& *": { fontSize: "22px" } }}
                    />
                  }
                  label="Corporation"
                />
                <FormControlLabel
                  value="individual"
                  sx={{ fontSize: "13px", "& *": { fontSize: "13px" } }}
                  control={
                    <Radio
                      onChange={(e) =>
                        handleFieldChange("accountType", e.target.value)
                      }
                      sx={{ "& *": { fontSize: "22px" } }}
                      size="small"
                    />
                  }
                  label="Individual"
                />
              </RadioGroup>
            </div>
          </FormControl>
          <div className="login__form_fieldbox">
            <div className="register__form_fieldwrap">
              <input
                type="text"
                value={data.companyName}
                onChange={(e) =>
                  handleFieldChange("companyName", e.target.value)
                }
                className="login__form_field"
                placeholder="Name of Company, if any"
              />
            </div>
          </div>
          <div className="login__form_fieldbox">
            <div className="register__form_fieldwrap">
              <input
                type="text"
                value={data.countryRegion}
                onChange={(e) =>
                  handleFieldChange("countryRegion", e.target.value)
                }
                className="login__form_field"
                placeholder="Country/Region"
              />
            </div>
          </div>
          <div className="login__form_fieldbox">
            <div className="register__form_fieldwrap">
              <input
                type="text"
                value={data.reasonForSignup}
                onChange={(e) =>
                  handleFieldChange("reasonForSignup", e.target.value)
                }
                className="login__form_field"
                placeholder="Reason for signup"
              />
            </div>
          </div>
          <div className="regform__termsandservices">
            <Checkbox
              defaultChecked
              sx={{
                color: "rgba(0, 186, 242, 1)",
                "&.Mui-checked": {
                  color: "rgba(0, 186, 242, 1)",
                },
              }}
            />
            <div className="regform__termsandservices_txt">
              By signing in via social media, I agree to the Alibaba.com Free
              Membership Agreement and Privacy Policy, and to receive emails
              about the platform’s products and services.
            </div>
          </div>
          <div
            className="welcome__sbox_signinbtn"
            onClick={!isLoading ? handleSubmit : null}
          >
            {isLoading ? (
              <div className="btn__loader"></div>
            ) : (
              <>
                Continue To Sign Up
                <RightArrow className="welcome__sbox_signinbtnicn" />
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
