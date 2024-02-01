import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BiSearch } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { BASE_URL } from "../utile/config";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupRef = useRef(0);

  const navigate = useNavigate();

  const submitHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      alert("Please fill all the fields");
    }

    const res = await fetch(
      `${BASE_URL}/tours/search/getTourSearchBy?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );
    if (!res.ok) alert("something went wrong");
    console.log(res);
    const result = await res.json();
    console.log(result);

    navigate(
      `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
  };
  return (
    <Col lg="12">
      <div className="search-bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <BiSearch />
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going ?"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <FiMapPin />
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance km"
                ref={distanceRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group ">
            <span>
              <BsPeople />
            </span>
            <div>
              <h6>Max people</h6>
              <input type="number" placeholder="0" ref={maxGroupRef} />
            </div>
          </FormGroup>
          <span className="search-icon" type="submit" onClick={submitHandler}>
            <FaSearch />
          </span>
        </Form>
      </div>
    </Col>
  );
}

export default SearchBar;
