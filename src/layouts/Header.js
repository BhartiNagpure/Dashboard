import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faSearch,
  faShoppingBag,
  faThLarge,
  faExpand,
  faGrip,
  faPieChart,
  faUserPlus,
  faArrowRightFromBracket,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faSun, faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "../assests/images/Contractcube.png";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import NavData from "./LayoutsMenu";
import { Modal } from "react-bootstrap";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const openSearchModal = () => {
    setShowSearchModal(true);
  };

  const closeSearchModal = () => {
    setShowSearchModal(false);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const Year = [
    "  2018-19",
    "2019-20",
    "2020-21",
    "2021-22",
    "2022-23",
    "2023-24",
    "2024-25",
  ];
  const navItems = [
    { title: "Profile", icon: faUser, link: "/" },
    { title: "Dashboard", icon: faPieChart, link: "/" },
  ];
  return (
    <nav className="header d-flex flex-wrap px-3 py-2 w-100 justify-content-between position-fixed align-items-center  bg-white z-1 ">
      <button
        className="navbar-toggler col-2 text-start"
        type="button"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <FontAwesomeIcon icon={faTimes} className="text-muted" />
        ) : (
          <FontAwesomeIcon icon={faAlignLeft} className="text-muted" />
        )}
      </button>

      <div className={isMobile ? "col-2 ms-3" : "col-2 mx-3"}>
        <Link to="/" className="link">
          <div className="col-lg-7 col-sm-7 col-md-5">
            <img src={logo} alt="" className="img-fluid" />
          </div>
        </Link>
      </div>

      {isMobile ? (
        <FontAwesomeIcon
          icon={faSearch}
          className="me-3"
          onClick={openSearchModal}
        />
      ) : (
        <div className="position-relative search border rounded-pill d-flex align-items-center p-1 col-lg-4">
          <FontAwesomeIcon icon={faSearch} className="headerIcon px-2 col-1" />
          <input
            placeholder="Search..."
            type="search"
            className="search-input col-10"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      )}
      <div className="headericonDiv d-flex align-items-center justify-content-end col-5">
        <Form.Group as={Col} lg={3} controlId="itemtype " className="mx-2 ">
          <Form.Select
            defaultValue="Choose..."
            className=" form-control-sm rounded-pill py-1 "
          >
            <option>Sites</option>
            <option>Sites 1</option>
            <option>Site 2</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} lg={3} controlId="itemtype" className="me-2">
          <Form.Select
            defaultValue="Choose..."
            className="form-control-sm rounded-pill py-1"
          >
            <option disabled>Year</option>
            {Year.map((year, i) => (
              <option key={i}>{year}</option>
            ))}
          </Form.Select>
        </Form.Group>

        {/* <div className='px-2 btn header-btn'>
                        <FontAwesomeIcon icon={faSun} className='headerIcon fs-5' />
                    </div>
                    <div className='px-2 btn header-btn'>
                        <div className='bagCount bellCount'>3</div>
                        <FontAwesomeIcon icon={faBell} className='headerIcon fs-5' />
                    </div>
                    <div className='px-2   btn header-btn'>
                        <FontAwesomeIcon icon={faGrip} className='headerIcon fs-5' />
                    </div> */}
        <div className="position-realtive" onClick={toggleDropdown}>
          <img
            className="rounded-circle header-profile-user img-fluid"
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt=""
          />

          {isOpen && (
            <div className="position-absolute border-0 card shadow end-0 mx-3 top-100">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center justify-content-center gap-2 pt-4 pb-3">
                  <div className="avatar d-flex align-items-center justify-content-center ">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                      alt="avatar"
                      className="rounded-circle col-6"
                    />
                  </div>
                  <h6 className="text-black">Jerry Seinfield</h6>
                </div>
                <div className="mb-3 mx-3">
                  <input
                    placeholder="Update your status"
                    type="text"
                    className="form-control form-control-sm"
                  />
                </div>
                <div>
                  <div className="">
                    <div className="nav  row mb-2 pb-1">
                      {navItems.map((item, index) => (
                        <div key={index} className="nav-item ">
                          <Link
                            to={item.link}
                            className="px-3 text-muted link d-flex align-items-center justify-content-between line-height"
                          >
                            <div className="col-1 mx-1">
                              <FontAwesomeIcon icon={item.icon} />
                            </div>
                            <span className="col-11">{item.title}</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-top card-footer">
                <div className="nav flex-column my-3">
                  <div className="nav-item">
                    <Link
                      to="/register"
                      className="px-3 link text-muted d-flex align-items-center justify-content-between "
                    >
                      <div className="col-1 mx-1">
                        <FontAwesomeIcon icon={faUserPlus} />
                      </div>
                      <span className=" col-11">Add another account</span>
                    </Link>
                  </div>
                </div>
                <hr />
                <div className="px-3">
                  <div className="nav-item">
                    <Link
                      to="/register"
                      className="px-3 link btn btn-outline-secondary text-muted d-flex align-items-center justify-content-center "
                    >
                      <div className="col-1 mx-1">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                      </div>
                      <span className=" col-11">Log Out</span>
                    </Link>
                  </div>
                </div>
                <div className="my-2 fw-bold fs-10 text-muted">
                  <ul className="d-flex justify-content-between">
                    <Link to="/" className="link">
                      {" "}
                      <li className="me-1">Privacy </li>
                    </Link>
                    <Link to="/" className="link">
                      {" "}
                      <li className="me-1">Terms</li>
                    </Link>
                    <Link to="/" className="link">
                      {" "}
                      <li className="me-1">Policy</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {isSidebarOpen && (
        <div
          className={`sidebar-container ps-4 py-4 pe-2  ${
            isSidebarOpen ? "isSidebar" : ""
          }`}
        >
          <NavData setIsSidebarOpen={setIsSidebarOpen} />
        </div>
      )}

      <Modal
        show={showSearchModal}
        onHide={closeSearchModal}
        className="search-mobile"
        centered
        style={{marginTop: '-100px'}}
      >
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body className="mb-5">
          <div className="position-relative search border rounded-pill d-flex align-items-center p-1">
            <FontAwesomeIcon
              icon={faSearch}
              className="headerIcon px-2 col-1"
            />
            <input
              placeholder="Search..."
              type="search"
              className="search-input col-10"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
        </Modal.Body>
      </Modal>
    </nav>
  );
}