import React, { useState } from "react";
import "../../assests/css/contractTmas.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const VendorManual = () => {
  const navigate = useNavigate();

  const [showSecondForm, setShowSecondForm] = useState(false);

  const handleRadioChange = (e) => {
    setShowSecondForm(e.target.value === "yes");
  };

  return (
    <>
      <section className="VendorM-manu">
        {/* <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} /> */}
        <div className="container mt-4">
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
                      <button className="btn btn-outline-success " type="button" id="button-addon2">Verify</button>
                    </div>
                  </Form.Group>
                  <Form.Group as={Col} lg={4} md={6} sm={12} controlId="gstn1" className="mb-3">
                    <div className="input-group form-control p-0">
                      <Form.Control type="text" placeholder="2. GSTN" className=" border-0" />
                      <button className="btn btn-outline-success " type="button" id="button-addon2">Verify</button>
                    </div>
                  </Form.Group>
                  {/* 
                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="gstn1"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="1. GSTN"
                      className="border-0"
                    >
                      <Button variant="outline-secondary" className="verify-btn">Verify</Button>
                    </Form.Control>

                  </Form.Group> */}

                  {/* <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="gstn2"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="2. GSTN"
                      className="border-0"
                    />
                    <Button variant="outline-secondary" className="verify-btn">Verify</Button>
                  </Form.Group> */}
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
            <button className="btn Btn m-2 ">
              <span>Submit</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorManual;
