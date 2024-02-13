import React, { useState, useEffect } from "react";
import CommunSection from "../shared/CommunSection";
import "../styles/tour.css";
import TourCard from "../shared/TourCard";
import Newsletter from "../shared/Newsletter";
import SearchBar from "../shared/SearchBar";
// import TourData from "../assets/data/tours";
import { Container, Row, Col } from "reactstrap";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utile/config";

function Tours() {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    laoding,
    error,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(
    `${BASE_URL}/tours/search/getCountsTour`
  );
  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);
  return (
    <>
      <CommunSection title={"All tours"} />
      <section>
        <Container>
          <Row>
            <Col>
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {laoding && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}

          {!laoding && !error && (
            <Row>
              {tours.map((tour) => (
                <Col lg="3" md="6" sm="6" key={tour._id} className="mb-3">
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-4 pt-2">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__btn" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
}

export default Tours;
