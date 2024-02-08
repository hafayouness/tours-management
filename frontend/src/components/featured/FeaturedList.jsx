import React from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
// import tourData from "./../../assets/data/tours";
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utile/config";
function FeaturedList() {
  const {
    data: featureTours,
    error,
    laoding,
  } = useFetch(`${BASE_URL}/tours/search/getFeatureTour`);

  return (
    <>
      {laoding && <h4 className="text-center loading">Loading...</h4>}
      {error && <h4 className="text-center loading">{error}</h4>}
      {!laoding &&
        !error &&
        featureTours?.map((tour) => (
          <Col lg="3" className="mb-5 " key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
}

export default FeaturedList;
