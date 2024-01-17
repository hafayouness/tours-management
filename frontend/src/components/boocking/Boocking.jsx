import React, { useState } from "react";
import "./boocking.css";
import { Form, ListGroup, FormGroup, ListGroupItem, Button } from "reactstrap";
import { FaStar } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Newsletter from "../../shared/Newsletter";

function Boocking({ tour, avgRating }) {
  const navigate = useNavigate();
  const { price, reviews } = tour;
  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "exemple@gmail.dev",
    fullName: "",
    phone: "",
    bookAt: "",
    guesSize: 1,
  });
  const handleChange = (e) => {
    // const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = (e) => {
    e.preventDefault();

    navigate("/thank-you");
  };
  const serviveFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guesSize) + Number(serviveFee);
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
