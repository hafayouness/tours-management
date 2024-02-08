import React, { useRef, useEffect, useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { SlMenu } from "react-icons/sl";

import "./header.css";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const nav__links = [
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
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const stickyHeaderFun = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFun();
    return document.removeEventListener("scroll", stickyHeaderFun);
  });

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav-wrapper d-flex align-items-center justify-content-between  ">
            {/* ========= logo ======== */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            {/* ========= logo end  ======== */}

            <div className="navigation ">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right d-flex align-items-center gap-5">
              <div className="nav__btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to="/login"> Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>
              <span className="mobile_menu">
                <SlMenu />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
