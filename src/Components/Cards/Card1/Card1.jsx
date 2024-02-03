import React, { useEffect, useRef, useState } from "react";
import "./Card1.css";
import { Link } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import testVideo from "../../../assets/videos/test.mp4";
import { ReactComponent as Play } from "../../../assets/icons/play.svg";
import Comment from "../../../assets/icons/comment.svg";
import Share from "../../../assets/icons/share.svg";
import Download from "../../../assets/icons/download.svg";
import ReactPlayer from "react-player";
import Flag from "react-world-flags";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import MarkUnreadChatAltRoundedIcon from "@mui/icons-material/MarkUnreadChatAltRounded";
const Card1 = () => {
  const [playing, setPlaying] = useState(false);

  const togglePlayPause = () => {
    setPlaying(!playing); // Toggle the playing state
  };
  const handleVideoEnd = () => {
    setPlaying(false); // Reset playing to false when the video ends
  };
  return (
    <div className="card1__component_wrap">
      <div className="card1__component_header">
        <Link to="#" className="card1__component_hdrleft">
          <div className="card1__component_hlimgwrap">
            <img
              src="data:image/jpeg;base64,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"
              className="card1__component_hlimg"
            />
          </div>
          <div className="card1__component_hlcontent">
            <div className="card1__component_hlcname">
              David Semilons
              <Flag
                code="NG"
                fallback={<span>{""}</span>}
                style={{
                  height: "10px",
                  width: "15px",
                  marginLeft: "5px",
                }}
              />
            </div>
            <div className="card1__component_hlchandle">@davidsem22</div>
          </div>
        </Link>
        <div className="card1__component_hdrcenter"></div>
        <div className="card1__component_hdrright">
          <div className="card1__component_hrfollowbtn">
            <PersonAddIcon className="card1__component_hrfollowbtnicn" />
            <span className="card1__component_hrfollowbtntxt">Follow</span>
          </div>
          <div className="card1__component_hrfollowcount">120 followers</div>
        </div>
      </div>
      <div className="card1__component_media" onClick={togglePlayPause}>
        <ReactPlayer
          url={testVideo}
          className="react-player"
          playing={playing}
          //   controls
          playIcon={true}
          width="100%"
          height="100%"
          onEnded={handleVideoEnd}
        />
        {!playing && (
          <div className="play-icon">
            <Play />
          </div>
        )}
      </div>
      <div className="card1__component_stats">
        <div className="card1__component_statitem">
          <FavoriteBorderRoundedIcon className="card1__component_statitemicon" />
          {/* <FavoriteRoundedIcon className="card1__component_statitemicon" /> */}
          <div className="card1__component_statitemtext">231</div>
        </div>
        <div className="card1__component_statitem">
          {/* <Comment className="card1__component_statitemicon" /> */}
          <img src={Comment} alt="" className="card1__component_statitemicon" />
          {/* <FavoriteIcon className="card1__component_statitemicon" /> */}
          <div className="card1__component_statitemtext">450</div>
        </div>
        <div className="card1__component_statitem">
          <img src={Share} alt="" className="card1__component_statitemicon" />
          {/* <FavoriteIcon className="card1__component_statitemicon" /> */}
          <div className="card1__component_statitemtext">34</div>
        </div>
        <div className="card1__component_statitem">
          <img
            src={Download}
            alt=""
            className="card1__component_statitemicon"
          />
          {/* <FavoriteIcon className="card1__component_statitemicon" /> */}
          <div className="card1__component_statitemtext">500</div>
        </div>
      </div>
      <Link to="#" className="card1__component_title">
        Portable No Lace Safety Boots
      </Link>
      <div className="card1__component_tags">
        <div className="card1__component_tag">#go</div>
        <div className="card1__component_tag">#World</div>
        <div className="card1__component_tag">#David</div>
        <div className="card1__component_tag">#Semllons</div>
        <div className="card1__component_tag">#Export</div>
      </div>
      <div className="card1__component_desc">
        Lorem ipsum dolor sit amet consectetur. Sit dis fusce quis etiam arcu.
        Parturient sagittis facilisi nunc viverra non malesuada{" "}
        <Link to="#" className="card1__component_descreadmore">
          Read More.
        </Link>
        .
      </div>
      <div className="card1__component_pricesec">
        <div className="card1__component_priceleft">$4.45- $6.5</div>
        <div className="card1__component_priceright">Min orders: 20 Units</div>
      </div>
      <div className="card1__components_footer">
        <div className="card1__components_fbtn">
          <ShoppingCartIcon className="card1__components_fbtnicn" />
          Order Now
        </div>
        <div className="card1__components_fbtn">
          <Diversity3Icon className="card1__components_fbtnicn" />
          Group Import
        </div>
        <div className="card1__components_fbtn">
          <MarkUnreadChatAltRoundedIcon className="card1__components_fbtnicn" />
          Contact Exporter
        </div>
      </div>
    </div>
  );
};

export default Card1;
