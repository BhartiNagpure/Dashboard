import React, { useState } from "react";
import { Button, Form, Col, Modal, Row } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import error from '../../assests/images/error-svgrepo-com.svg';
import success from '../../assests/images/success-svgrepo-com.svg'

const VendorManual = () => {
  const navigate = useNavigate();
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const handleVerifyClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleVerifyClick1 = () => {
    setShowModal1(true);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };


  const handleRadioChange = (e) => {
    setShowSecondForm(e.target.value === "yes");
  };

  return (
    <>
      <section className="VendorM-manu">
        {/* <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} /> */}
        <div className="container">
          <div className="Vendor-manual-form">
            <div className="p-4 mb-3">
              <Form>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="vendorid"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Vendor ID"
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="vendorname"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Vendor Name"
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="panno"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="PAN Number"
                      className="border-0"
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="noofgstn"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="No of GSTN (1/2)"
                      className="border-0"
                      disabled
                    />
                  </Form.Group>
                  <Form.Group as={Col} lg={4} md={6} sm={12} controlId="gstn1" className="mb-3">
                    <div className="input-group form-control p-0 ">
                      <Form.Control type="text" placeholder="1. GSTN" className=" border-0" />
                      <button className="btn btn-outline-success text-small z-0 " type="button" id="button-addon2" onClick={handleVerifyClick}>Verify</button>
                    </div>
                  </Form.Group>
                  <Form.Group as={Col} lg={4} md={6} sm={12} controlId="gstn1" className="mb-3">
                  <div className="input-group form-control p-0 ">
                      <Form.Control type="text" placeholder="1. GSTN" className=" border-0" />
                      <button className="btn btn-outline-success text-small z-0" type="button" id="button-addon2" onClick={handleVerifyClick1}>Verify</button>
                    </div>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="contactperson"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Contact Person"
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="contactno"
                    className="mb-3"
                  >
                    <Form.Control
                      type="number"
                      placeholder="Contact Number"
                      className="border-0"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="whatsappno"
                    className="mb-3"
                  >
                    <Form.Control
                      type="number"
                      placeholder="Whatsapp Number"
                      className="border-0"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="contacteamil"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Email ID"
                      className="border-0"
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="contacaddress"
                    className="mb-3"
                  >
                    <textarea
                      class="form-control"
                      id="contacaddress"
                      rows="3"
                      placeholder="Address"
                    ></textarea>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="vendorname"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Contract/ Quotation if any"
                      disabled
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="vendorname"
                    className="mb-3"
                  >
                    <Form>
                      {["radio"].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            inline
                            label="Yes"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                            value="yes"
                            onChange={handleRadioChange}
                          />
                          <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                            value="no"
                            onChange={handleRadioChange}
                          />
                        </div>
                      ))}
                    </Form>
                  </Form.Group>
                </Row>
              </Form>

              {showSecondForm && (
                <Form>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      lg={4}
                      md={6}
                      sm={12}
                      controlId="itempurchase"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Item Purchase"
                        className="border-0"
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      lg={4}
                      md={6}
                      sm={12}
                      controlId="bankno"
                      className="mb-3"
                    >
                      <Form.Control
                        type="number"
                        placeholder="Bank Account No."
                        className="border-0"
                      />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      lg={4}
                      md={6}
                      sm={12}
                      controlId="ifscno"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="IFSC Code"
                        className="border-0"
                      />
                    </Form.Group>
                  </Row>
                </Form>
              )}
            </div>
          </div>
          <div className="mb-3">
            <button className="btn Btn shadow m-2 ">
              <span>Submit</span>
            </button>
          </div>
        </div>
      </section>
      <Modal show={showModal} onHide={handleCloseModal} className="d-flex align-items-center">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <img
          className="col-2"
            src={error}
            alt="error"
          />
         <h4 className="p-2 text-danger">Invalid GSTN</h4>
        </Modal.Body>
      </Modal>
      <Modal show={showModal1} onHide={handleCloseModal1} className="d-flex align-items-center">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <img
          className="col-2"
            src={success}
            alt="Success"
          />
         <h4 className="p-2 text-success">Valid GSTN</h4>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VendorManual;
