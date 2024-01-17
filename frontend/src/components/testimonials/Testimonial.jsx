import React from "react";
import Slider from "react-slick";
import Ava01 from "../../assets/images/ava-1.jpg";
import Ava02 from "../../assets/images/ava-2.jpg";
import Ava03 from "../../assets/images/ava-3.jpg";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className=" testimonial py-4 px-3 ">
        <p className="lh-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={Ava01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3 titlecustumer">jhon Doe </h6>
            <p className="custumer">Customer</p>
          </div>
        </div>
      </div>
      <div className=" testimonial py-4 px-3 ">
        <p className="lh-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={Ava02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3 titlecustumer">Lia franklin </h6>
            <span className="custumer">Customer</span>
          </div>
        </div>
      </div>
      <div className=" testimonial py-4 px-3 ">
        <p className="lh-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={Ava03} alt="" className="w-25 h-25  rounded-2 " />
          <div>
            <h6 className="mb-0 mt-3 titlecustumer">Ilyas Daki </h6>
            <p className="custumer">Customer</p>
          </div>
        </div>
      </div>
      <div className=" testimonial py-4 px-3 ">
        <p className="lh-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={Ava01} alt="" className="w-25 h-25  rounded-2 " />
          <div>
            <h6 className="mb-0 mt-3 titlecustumer">jhon Doe </h6>
            <p className="custumer">Customer</p>
          </div>
        </div>
      </div>
      <div className=" testimonial py-4 px-3 ">
        <p className="lh-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={Ava02} alt="" className="w-25 h-25  rounded-2 " />
          <div>
            <h6 className="mb-0 mt-3 titlecustumer">Lia Franklin </h6>
            <p className="custumer">Customer</p>
          </div>
        </div>
      </div>
      <div className=" testimonial py-4 px-3 ">
        <p className="lh-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={Ava03} alt="" className="w-25 h-25  rounded-2 " />
          <div>
            <h6 className="mb-0 mt-3 titlecustumer">Ilyas Daki</h6>
            <p className="custumer">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Testimonial;
