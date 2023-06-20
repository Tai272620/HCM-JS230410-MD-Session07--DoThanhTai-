import { Carousel } from "antd";
import React, { useRef, useState } from "react";
import "./banner.scss";

const Banner = () => {
  const slider = useRef();
  const [banners, setBanners] = useState([
    {
      id: 1,
      url: "../images/slider_1.jpg",
      desc: "Get up to 30% Off",
    },
    {
      id: 2,
      url: "../images/slider_2.jpg",
      desc: "konnichiwa",
    },
    {
      id: 3,
      url: "../images/slider_3.jpg",
      desc: "hi",
    },
  ]);
  return (
    <div>
      <Carousel
        ref={slider}
        autoplay
        autoplaySpeed={1000}
        // effect={"fade"}
        dots={true}
        dotPosition={"bottom"}
        waitForAnimate={"true"}
      >
        {banners.map((banner, index) => (
          <div
            className="items"
            key={banner.id + index}
            style={{ position: "relative" }}
          >
            <img className="items-img" src={banner.url} />
            <div style={{ position: "absolute" }} className="banner-desc">
              <p className="collection">SPRING/SUMMER COLLECTION 2017</p>
              <p className="sale">Get up to 30% Off</p>
              <p className="newArrivals">New Arrivals</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
