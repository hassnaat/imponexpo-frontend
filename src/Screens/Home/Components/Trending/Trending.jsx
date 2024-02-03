import React from "react";
import Slider from "react-slick";
import "./Trending.css";
import Crown from "../../../../assets/images/headingcrown.png";
import Star from "../../../../assets/images/redstar.png";
import Card1 from "../../../../Components/Cards/Card1/Card1";
// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className ?? ""} slickcarousal__arrow`}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className ?? ""} slickcarousal__arrow`}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const Trending = () => {
  // Settings for the slider
  const settings = {
    dots: false, // Show dot indicators
    infinite: true, // Infinite looping
    speed: 500, // Animation speed
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 4, // Number of slides to scroll at once
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="home__trendingprods_section">
      <div className="home__trendingprods_heading">
        <img src={Crown} alt="" className="home__trendingprods_hcrown" />
        <img src={Star} alt="" className="home__trendingprods_hstar" />
        Trending Products{" "}
        <span className="home__trendingprods_hdinghighlight">
          on ImpoNexpo Channel
        </span>
      </div>
      <div className="home__trendingprods_subheading">
        Explore great Products from great Suppliers
      </div>
      <Slider {...settings} className="home__trendingprods_cards">
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
      </Slider>
      <Slider {...settings} className="home__trendingprods_cards">
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
        <div className="home__trendingprods_card">
          <Card1 />
        </div>
      </Slider>
      <div className="home__trendprods_sourcemorebtn">
        <div className="home__trendprods_sourcemorebtntxt">
          Source More Channels
        </div>
        <div className="home__trendprods_sourcemorebtniconwrap">
          <DownIcon className="home__trendprods_sourcemorebtnicon" />
        </div>
      </div>
    </div>
  );
};

export default Trending;
