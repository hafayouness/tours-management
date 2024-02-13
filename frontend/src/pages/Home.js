import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Substitle from "../shared/Substitle";
import worldImg from "../assets/images/world.png";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedList from "../components/featured/FeaturedList";
import experienceImg from "../assets/images/experience.png";
import MansoryImagesGallery from "../components/gallery-images/MansoryImagesGallery";
import Testimonial from "../components/testimonials/Testimonial";
import Newsletter from "../shared/Newsletter";

function Home() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero-centent">
                <div className="hero__subtitle d-flex align-item-center">
                  <Substitle substitle={"Know Before You Go"} />
                  <img src={worldImg} className="" alt="" />
                </div>
                <h1>
                  traveling opens the door to Creating
                  <span className="highligth"> Memories</span>
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img__box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img__box hero__video mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img__box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* ======= menu start ===== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="service_substitle"> what we serve</h5>
              <h2 className="service_title">we offre our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ======== featured tour section start ======== */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Substitle substitle={"Explore"} />
              <h2 className="featured__tour__title"> Our featured tours</h2>
            </Col>
            <FeaturedList />
          </Row>
        </Container>
      </section>
      {/* ======== featured tour section end  ======== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <Substitle substitle={"Experience"} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </p>
              </div>

              <div className="counter-wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12K+</span>
                  <h6>Successfull trip</h6>
                </div>
                <div className="counter_box">
                  <span>2K+</span>
                  <h6>Rugular clients</h6>
                </div>
                <div className="counter_box">
                  <span>15+</span>
                  <h6> Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="exprience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ====== ======= */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Substitle substitle={"Gallery"} />
              <h2 className="gallery_title">
                Visit our constumers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MansoryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* =====the fans sayin====== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Substitle substitle={"fans love"} />
              <h2 className="fans_title">What our fans saying about us</h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
}

export default Home;
