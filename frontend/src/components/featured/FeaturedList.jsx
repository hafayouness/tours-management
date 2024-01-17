import React from "react";
import TourCard from "../../shared/TourCard";
import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";

function FeaturedList() {
  return (
    <>
      {tourData.map((tour) => (
        <Col lg="3" className="mb-5 " key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
}

export default FeaturedList;
