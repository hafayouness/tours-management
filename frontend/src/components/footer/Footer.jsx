import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { CiYoutube } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

function Footer() {
  const quick__links = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ];
  const quick__links2 = [
    {
      path: "/gallery",
      display: "Gallery",
    },
    {
      path: "/login",
      display: "Login",
    },
    {
      path: "/register",
      display: "Register",
    },
  ];
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="social-links d-flex align-items-center gap-4">
                <span>
                  <Link to="">
                    <CiYoutube />
                  </Link>
                </span>
                <span>
                  <Link to="">
                    <FaFacebook />
                  </Link>
                </span>
                <span>
                  <Link to="">
                    <FaInstagram />
                  </Link>
                </span>
                <span>
                  <Link to="">
                    <FaGithub />
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer_links_title">Discover</h5>
            <ListGroup className="footer_quick_links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_links_title">Quick links</h5>
            <ListGroup className="footer_quick_links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_links_title">Contact</h5>
            <ListGroup className="footer_quick_links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <h6>
                  <span className="mb-2">
                    <IoLocationOutline />
                  </span>
                  Address:
                </h6>
                <p className="mb-2">Maroc, Agadir</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <h6>
                  <span>
                    <MdOutlineMailOutline />
                  </span>
                  Email:
                </h6>
                <p className="mb-2">youness@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2 ">
                <h6>
                  <span className="mb-2">
                    <FiPhone />
                  </span>
                  Phone:
                </h6>
                <p className="mb-2">+212608749699</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12">
            <p className="copyright">
              @Copyright {year} , design and develop by youness hafa ,All right
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
