import React from "react";
import { Container, Row, Col } from "reactstrap";
import MaleTouristImg from "../assets/images/male-tourist.png";
import "./newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter_content">
              <h2>Subscribe now to get useful travling information</h2>
              <div className="newsletter_input">
                <input type="email" placeholder="Email your email" />
                <button className="btn newsletter_btn"> Subscribe</button>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter_img">
              <img src={MaleTouristImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Newsletter;
