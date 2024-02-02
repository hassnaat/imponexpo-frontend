import React, { useState } from "react";
import "./Auth.css";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import Logo from "../../assets/images/logo1.png";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import { forgotPassword } from "../../api/userServices";
const ForgotPassword = () => {
  const [data, setData] = useState({
    identifier: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleFieldChange = (name, value) => {
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await forgotPassword(data);
      toast.success(response?.data?.message || "Please Check your Email!");
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
          <div className="login__header_text">
            <div className="forgotpass__header_textblack">Let's Help You</div>
            <div className="forgotpass__header_textblue">Retrieve Password</div>
          </div>
          <img src={Logo} className="login__header_logo" alt="" />
        </div>
        <div className="login__title">
          Enter the email address or mobile phone number or Imponexpo ID
          associated with your Imponexpo account.
        </div>

        <div className="login__form_fieldbox">
          <label className="login__form_fieldlabel">
            Email<sup className="required__field_label">*</sup>
          </label>
          <div className="login__form_fieldwrap">
            <Mail className="login__form_fieldicon" />
            <input
              type="email"
              value={data.login}
              onChange={(e) => handleFieldChange("identifier", e.target.value)}
              className="login__form_field"
              placeholder="Please type your Email Address"
            />
          </div>
        </div>
        <br />

        <div
          className="welcome__sbox_signinbtn"
          onClick={!isLoading ? handleSubmit : null}
        >
          {isLoading ? <div className="btn__loader"></div> : <>Send Code</>}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
