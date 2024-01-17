import React from "react";
import "../styles/thank-you.css";
import { Container, Row, Col, Button } from "reactstrap";
import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank-you">
              <span>
                <CiCircleCheck />
              </span>
              <h1 className="mb-3 fw-semibold">Thank You</h1>
              <h4 className="mb-4">Your tour is booked.</h4>
              <Button className="btn primary__btn w-25">
                <Link to="/home"> Back to Home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ThankYou;
