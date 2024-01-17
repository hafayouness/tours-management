import React from "react";
import { Col } from "reactstrap";
import ServiceCard from "./ServiceCard";
import weatherImg from "../assets/images/weather.png";
import guidImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const dataService = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    imgUrl: guidImg,
    title: "Best tour Guide",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function ServiceList() {
  return (
    <>
      {dataService.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
}

export default ServiceList;
