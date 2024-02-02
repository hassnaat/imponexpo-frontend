import React from "react";
import "./Auth.css";
import { ReactComponent as RightArrow } from "../../assets/icons/rightarrow.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as Person } from "../../assets/icons/person.svg";
import { ReactComponent as Message } from "../../assets/icons/message.svg";
import { ReactComponent as Saves } from "../../assets/icons/saves.svg";
import { ReactComponent as Share } from "../../assets/icons/share.svg";
import { ReactComponent as Order } from "../../assets/icons/order.svg";
import { ReactComponent as Group } from "../../assets/icons/group.svg";
import { ReactComponent as RFQ } from "../../assets/icons/rfq.svg";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";
import Facebook from "../../assets/images/facebook.png";
import Linkedin from "../../assets/images/linkedin.png";
import X from "../../assets/images/x.png";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="auth__screen">
      <div className="welcome__screen_box">
        <div className="welcome__sbox_title">Welcome to Imponexpo!</div>
        <Link to="/login" className="welcome__sbox_signinbtn">
          Continue To Sign In
          <RightArrow className="welcome__sbox_signinbtnicn" />
        </Link>
        <Link to="/register" className="welcome__sbox_registerlink">
          New to Imponexpo? Register Here!
        </Link>
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
        <div className="welcome__sbox_description">
          By signing in via social media, I agree to the Imponexpo.com Free
          Membership Agreement and{" "}
          <Link className="welcome__sbox_descriptionlink" to="#">
            Privacy Policy
          </Link>
          , and to receive emails about the platform’s products and services.
        </div>
        <div className="welcome__sbox_listswrap">
          <div className="welcome__sbox_list">
            <div className="welcome__sbox_listheading">My Interactions</div>
            <div className="welcome__sbox_listitem">
              <div className="welcome__sbox_listitemlft">
                <Heart />
              </div>
              <div className="welcome__sbox_listitemrt">My Likes</div>
            </div>
            <div className="welcome__sbox_listitem">
              <div className="welcome__sbox_listitemlft">
                <Saves />
              </div>
              <div className="welcome__sbox_listitemrt">My Saves</div>
            </div>
            <div className="welcome__sbox_listitem">
              <div className="welcome__sbox_listitemlft">
                <Message />
              </div>
              <div className="welcome__sbox_listitemrt">My Commented</div>
            </div>
            <div className="welcome__sbox_listitem">
              <div className="welcome__sbox_listitemlft">
                <Share />
              </div>
              <div className="welcome__sbox_listitemrt">My Shared</div>
            </div>
            <div className="welcome__sbox_listitem">
              <div className="welcome__sbox_listitemlft">
                <Person />
              </div>
              <div className="welcome__sbox_listitemrt">My follows</div>
            </div>
          </div>

          <div className="welcome__sbox_list">
            <div className="welcome__sbox_listheading">My More</div>
            <div className="welcome__sbox_listitem">
              <div className="welcome__sbox_listitemrt">My Inbox</div>
            </div>
            <div className="welcome__sbox_listitem">
              <div className="welcome__sbox_listitemrt">My Chats</div>
            </div>
            <div className="welcome__sbox_listitem">
              <div className="welcome__sbox_listitemrt">My Wallet</div>
            </div>
            <div className="welcome__sbox_listitem">
              <div className="welcome__sbox_listitemrt">My Notifications</div>
            </div>
          </div>
          <div className="welcome__sbox_list">
            <div className="welcome__sbox_listheading">
              My Business Dealings
            </div>
            <div className="welcome__sbox_listitem">
              <div className="welcome__sbox_listitemlft">
                <Order />
              </div>
              <div className="welcome__sbox_listitemrt">My Orders </div>
            </div>
            <div className="welcome__sbox_listitem">
              <div className="welcome__sbox_listitemlft">
                <Group />
              </div>
              <div className="welcome__sbox_listitemrt">My Group Imports</div>
            </div>
            <div className="welcome__sbox_listitem">
              <div className="welcome__sbox_listitemlft">
                <RFQ />
              </div>
              <div className="welcome__sbox_listitemrt">My RFQ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
