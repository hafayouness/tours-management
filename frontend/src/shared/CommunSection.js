import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./commun-setion.css";

function CommunSection({ title }) {
  return (
    <section className="commun_section">
      <Container>
        <Row>
          <Col lg="12">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CommunSection;
