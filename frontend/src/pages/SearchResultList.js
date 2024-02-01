import React, { useState } from "react";
import CommunSection from "./../shared/CommunSection";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import TourCard from "../shared/TourCard";
import Newsletter from "./../shared/Newsletter";

function SearchResultList() {
  const location = useLocation();
  const [data] = useState(location.state);
  console.log(data);
  return (
    <>
      <CommunSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center"> Not Found Tour </h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-5" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
}

export default SearchResultList;
