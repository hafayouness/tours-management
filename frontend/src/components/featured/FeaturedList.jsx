import React from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import tourData from "./../../assets/data/tours";
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utile/config";
function FeaturedList() {
  const {
    data: featuredTours,
    error,
    laoding,
  } = useFetch(`${BASE_URL}/tours/search/getFeatureTour`);
  console.log(featuredTours);

  return (
    <>
      {laoding && <h4 className="text-center loading">Loading...</h4>}
      {error && <h4 className="text-center loading">{error}</h4>}
      {!laoding &&
        !error &&
        featuredTours?.map((tour) => (
          <Col lg="3" md="6" sm="6" className="mb-4 " key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
}

export default FeaturedList;
