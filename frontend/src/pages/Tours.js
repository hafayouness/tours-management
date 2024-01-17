import React, { useState, useEffect } from "react";
import CommunSection from "../shared/CommunSection";
import "../styles/tour.css";
import TourCard from "../shared/TourCard";
import Newsletter from "../shared/Newsletter";
import SearchBar from "../shared/SearchBar";
import TourData from "../assets/data/tours";
import { Container, Row, Col } from "reactstrap";

function Tours() {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);
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
          <Row>
            {TourData.map((tour) => (
              <Col lg="3" key={tour.id} className="mb-3">
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
        </Container>
      </section>
      <Newsletter />
    </>
  );
}

export default Tours;
