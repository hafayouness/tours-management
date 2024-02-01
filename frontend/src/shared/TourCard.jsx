import React from "react";
import { Card, CardBody } from "reactstrap";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./tour-card.css";
import calculateAvergRating from "../utile/AvergRating";
function TourCard({ tour }) {
  const { _id, title, city, price, reviews, featured, photo } = tour;

  const { totalRating, avgRating } = calculateAvergRating(reviews);

  return (
    <div className="tours_card">
      <Card>
        <div className="tour-img">
          <img src={photo} alt="Tour Photo" />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className="card-top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <HiOutlineMapPin className="icon" />
              {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <FaStar className="icon" />
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>
          <h5 className="tour-title">
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>
          <div className="d-flex align-items-center justify-content-between gap-2">
            <h5 className="title mt-2">
              ${price} <span>/per person</span>
            </h5>
            <button className="btn booking-btn">
              <Link to={`/tours/${_id}`} className="book-link">
                Book Now
              </Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default TourCard;
