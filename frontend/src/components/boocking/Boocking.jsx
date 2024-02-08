import React, { useState, useContext } from "react";
import "./boocking.css";
import { Form, ListGroup, FormGroup, ListGroupItem, Button } from "reactstrap";
import { FaStar } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import Newsletter from "../../shared/Newsletter";
import { AuthContext } from "./../../context/AuthContext";
import { BASE_URL } from "./../../utile/config";

function Boocking({ tour, avgRating }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { price, reviews, title } = tour;
  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    bookAt: "",
    guestSize: 1,
  });
  const handleChange = (e) => {
    // const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(booking);

    try {
      if (!user || user === undefined || user === null) {
        return alert("Please sign up ");
      }
      const res = await fetch(`${BASE_URL}/booking`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });
      const result = await res.json();
      console.log(res);
      console.log(result);
      if (!res.ok) {
        return alert(result.message);
      }
      navigate("/thank-you");
    } catch (err) {
      alert(err.message);
    }
  };
  const serviveFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviveFee);
  return (
    <div className="boocking">
      <div className="boocking__top d-flex align-items-center  justify-content-between">
        <h3>
          ${price}
          <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <FaStar style={{ color: "var(--secondary-color)" }} />
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/* ====== form information start====== */}
      <div className="boocking-information">
        <h5>Information</h5>

        <Form className="boocking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              placeholder="Full Name"
              name="fullName"
              type="text"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              placeholder="Phone"
              name="number"
              type="number"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              placeholder=""
              name="date"
              type="date"
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              placeholder="Guest"
              name="number"
              type="number"
              id="guesSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* ====== form information end ====== */}
      {/* ======boocking button===== */}
      <div className="boocking__button">
        <ListGroup>
          <ListGroupItem className="border-0 px-0 d-flex align-items-center justify-content-between">
            <h5 className="">
              ${price} <IoIosClose /> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 d-flex align-items-center justify-content-between">
            <h5>Service charge</h5>
            <span>${serviveFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 d-flex align-items-center justify-content-between total ">
            <h5>total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>

      {/* ======boocking button===== */}
    </div>
  );
}

export default Boocking;
