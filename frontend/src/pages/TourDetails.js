import React, { useEffect, useRef, useState, useContext } from "react";
import { Container, Row, Col, ListGroup } from "reactstrap";
import "../styles/tour-details.css";

import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import calculateAvergRating from "../utile/AvergRating";
import { RiMapPinUserFill } from "react-icons/ri";
import { CiDollar } from "react-icons/ci";
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdOutlineGroup } from "react-icons/md";
import avatar from "../assets/images/avatar.jpg";
import { GiPathDistance } from "react-icons/gi";
import Boocking from "../components/boocking/Boocking";
import Newsletter from "../shared/Newsletter";
import useFetch from "./../hooks/useFetch";
import { BASE_URL } from "./../utile/config";
import { AuthContext } from "./../context/AuthContext";
function TourDetails() {
  const { id } = useParams();
  // fetch data from database
  const { data: tour, laoding, error } = useFetch(`${BASE_URL}/tours/${id}`);
  const { user } = useContext(AuthContext);

  const {
    photo,
    desc,
    reviews,
    city,
    distance,
    price,
    maxGroupSize,
    title,
    address,
  } = tour;

  const { totalRating, avgRating } = calculateAvergRating(reviews);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const reviewMsgRef = useRef();
  const [tourRating, setTourRating] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    console.log(reviewText);

    try {
      if (!user || user === undefined || user === null) {
        alert("please sign up ");
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });
      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert("review submitted");
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section>
        <Container>
          {laoding && <h4 className="text-center pt-5">laoding....</h4>}
          {error && <h4 className="text-center">{error}</h4>}

          {!laoding && !error && (
            <Row>
              <Col lg="8">
                <div className="tour_content">
                  <img src={photo} alt="" />
                  <div className="tour_info">
                    <h2>{title}</h2>
                    <div className="d-flex align-items-center gap-5 ">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <FaStar style={{ color: "var(--secondary-color)" }} />
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>{reviews?.length}</span>
                        )}
                      </span>
                      <span className="tour__adress d-flex align-items-center gap-1">
                        <RiMapPinUserFill className="icon" />
                        {address}
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-4 mt-2 mb-4">
                      <span className="tour__location d-flex align-items-center gap-1">
                        <HiOutlineMapPin className="icon" />
                        {city}
                      </span>
                      <span className="tour__location d-flex align-items-center gap-1">
                        <GiPathDistance className="icon" />
                        {distance} km
                      </span>
                      <span className="tour__location d-flex align-items-center gap-1">
                        <CiDollar className="icon" />${price} /per person
                      </span>
                      <span className="tour__location d-flex align-items-center gap-1">
                        <MdOutlineGroup className="icon" />
                        {maxGroupSize} people
                      </span>
                    </div>
                    <h5>Description :</h5>
                    <p>{desc}.</p>
                  </div>
                  {/* ===========reviews start===== */}
                  <div className="tour_reviews ">
                    <h2>Reviews ({reviews?.length} reviews)</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center gap-4  mb-4 rating-group mt-3">
                        <span
                          className="d-flex align-items-center gap-1 "
                          onClick={() => setTourRating(1)}
                        >
                          1 <FaStar />
                        </span>
                        <span
                          className="d-flex align-items-center gap-1"
                          onClick={() => setTourRating(2)}
                        >
                          2 <FaStar />
                        </span>
                        <span
                          className="d-flex align-items-center gap-1"
                          onClick={() => setTourRating(3)}
                        >
                          3 <FaStar />
                        </span>
                        <span
                          className="d-flex align-items-center gap-1"
                          onClick={() => setTourRating(4)}
                        >
                          4 <FaStar />
                        </span>
                        <span
                          className="d-flex align-items-center gap-1"
                          onClick={() => setTourRating(5)}
                        >
                          5 <FaStar />
                        </span>
                      </div>
                      <div className="reviews_input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="Share your thoughts"
                          required
                        />
                        <button className="btn primary__btn text-white">
                          Submit
                        </button>
                      </div>
                    </form>
                    {/* <ListGroup className="user_reviews">
                      {reviews?.map((review) => {
                        <div className="review_item">
                          <img src={avatar} alt="" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between review-star">
                              <div className="review_info">
                                <h6>{review.username}</h6>
                                <p>
                                  {new Date("01-01-2024").toLocaleDateString(
                                    "en-US",
                                    options
                                  )}
                                </p>
                              </div>
                              <span className="d-flex align-items-center gap-1 ">
                                {review.rating} <FaStar className="star" />
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>;
                      })}
                    </ListGroup> */}
                    <ListGroup className="user_reviews">
                      {reviews?.map((review) => {
                        return (
                          <div className="review_item">
                            <img src={avatar} alt="" />
                            <div className="w-100">
                              <div className="d-flex align-items-center justify-content-between review-star">
                                <div className="review_info">
                                  <h6>{review?.username}</h6>
                                  <p>
                                    {new Date(
                                      review.createdAt
                                    ).toLocaleDateString("en-US", options)}
                                  </p>
                                </div>
                                <span className="d-flex align-items-center gap-1 ">
                                  {review.rating} <FaStar className="star" />
                                </span>
                              </div>
                              <h6> {review.reviewText}.</h6>
                            </div>
                          </div>
                        );
                      })}
                    </ListGroup>
                  </div>
                </div>
              </Col>
              <Col lg="4" className="mb-4">
                <Boocking tour={tour} avgRating={avgRating} />
              </Col>
              <Newsletter />
            </Row>
          )}
        </Container>
      </section>
    </>
  );
}

export default TourDetails;
