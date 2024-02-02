import React, { useState } from "react";
import "./Auth.css";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Logo from "../../assets/images/logo1.png";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import { forgotPassword, newPassword } from "../../api/userServices";
import { ReactComponent as RightArrow } from "../../assets/icons/rightarrow.svg";
import { ReactComponent as Lock } from "../../assets/icons/lock.svg";
import { useNavigate, useParams } from "react-router-dom";
const NewPassword = () => {
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });
  const { token } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const handleFieldChange = (name, value) => {
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    if (data?.password === "" || data?.confirmPassword === "") {
      toast.error("Both fields are required!");
      return;
    }
    if (data?.password !== data?.confirmPassword) {
      toast.error("Confirm password doesn't match");
      return;
    }
    setIsLoading(true);

    try {
      const response = await newPassword({
        newPassword: data?.password,
        token,
      });
      toast.success(response?.data?.message || "Password Updated Successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="auth__screen">
      <div className="login__wrap">
        <div className="login__header">
          <div className="newpassword__form_heading">Reset Password</div>
        </div>
        <div className="login__title" style={{ textAlign: "center" }}>
          Duis sagittis molestie tellus, at eleifend sapien pellque quis. Fusce
          lorem nunc, fringilla sit amet nunc.
        </div>

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
        </div>
        <div className="login__form_fieldbox">
          <label className="login__form_fieldlabel">
            Confirm Password<sup className="required__field_label">*</sup>
          </label>
          <div className="login__form_fieldwrap">
            <Lock className="login__form_fieldicon" />
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
        <br />

        <div
          className="welcome__sbox_signinbtn"
          onClick={!isLoading ? handleSubmit : null}
        >
          {isLoading ? (
            <div className="btn__loader"></div>
          ) : (
            <>
              RESET PASSWORD
              <RightArrow className="welcome__sbox_signinbtnicn" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
