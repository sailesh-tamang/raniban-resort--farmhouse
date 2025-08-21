import React from "react";
import Slider from "react-slick";
import img1 from '/raniban-logo.png'; // Adjust the path as necessary


function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container" style={{ padding: "100px"}}>
      <Slider {...settings}>
        <div>
          < img src={img1} alt="Slide 1" style={{ width: "300px", height: "200px" }} />
        </div>
        <div>
          <img src={img1} alt="Slide 1" style={{ width: "300px", height: "200px" }} />
        </div>
        
        <div>
          <img src={img1} alt="Slide 1" style={{ width: "300px", height: "200px" }} />
        </div>
        <div>
          <img src={img1} alt="Slide 1" style={{ width: "300px", height: "200px" }} />
        </div>
        <div>
          <img src={img1} alt="Slide 1" style={{ width: "300px", height: "200px" }} />
        </div>
        <div>
          <img src={img1} alt="Slide 1" style={{ width: "300px", height: "200px" }} />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
