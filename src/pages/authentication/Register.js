import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Input,
  Button,
  FormGroup,
} from "reactstrap";

// import Stepper from "react-stepper-horizontal";
import logo from "../../assests/images/Contractcube.png";
import sihnupimg from "../../assests/images/sigimg.png";
import "../../assests/css/authentication.css";
import OtpInput from "react-otp-input";
import success from "../../assests/images/success-svgrepo-com.svg";
import error from "../../assests/images/error-svgrepo-com.svg";
import backbtn from "../../assests/images/back-button-svgrepo-com.svg";
import OtpTimer from "otp-timer";

// Formik
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
//   document.title = "SignUp";

  const [currentStep, setCurrentStep] = useState(0);
  const [otp, setOtp] = useState("");

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      emailOrPhone: "",
      otp: "",
      pan: "",
    },
    validationSchema: Yup.object({
      emailOrPhone: Yup.string()
        .email("Invalid email address")
        .required("Email or Phone number is required"),
      otp: Yup.string().required("OTP is required"),
      pan: Yup.string().required("PAN number is required"),
    }),

    onSubmit: (values) => {
      if (currentStep === 0) {
        setCurrentStep(currentStep + 1);
      } else if (currentStep === 1) {
        setCurrentStep(currentStep + 1);
      } else if (currentStep === 2) {
        setCurrentStep(currentStep + 1);
      }
    },
  });

  const handleContinue = () => {
    validation.handleSubmit();
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    { title: "Enter Email or Phone" },
    { title: "Verify OTP" },
    { title: "Enter PAN" },
    { title: "Verify PAN" },
  ];

  //OTP

  const resendFunction = () => {
    console.log("Resending OTP...");
  };

  const initialMinutes = 0;
  const initialSeconds = 29;

  //Info Form Validation
  const initialValues = {
    companyName: "",
    address: "",
    bankDetails: "",
    yearOfEstablishment: "",
    contactNumber: "",
    email: "",
    contactPerson: "",
    gstNo: "",
    panNo: "",
    clientType: "",
    clientCIN: "",
    clientPTRegNo: "",
    clientESICRegNo: "",
    clientPFRegNo: "",
  };

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Company name is required."),
    address: Yup.string().required("Address is required."),
    bankDetails: Yup.string().required("Bank details are required."),
    yearOfEstablishment: Yup.string().required(
      "Year of Establishment is required."
    ),
    contactNumber: Yup.string().required("Contact Number is required."),
    email: Yup.string().email("Invalid email").required("Email is required."),
    contactPerson: Yup.string().required("Contact Person is required."),
    gstNo: Yup.string().required("GST No is required."),
    panNo: Yup.string().required("Pan No is required."),
    clientType: Yup.string().required("Client Type is required."),
    clientCIN: Yup.string().required("Client CIN Type is required."),
    clientPTRegNo: Yup.string().required("Client PT Regn No Type is required."),
    clientESICRegNo: Yup.string().required(
      "Client ESIC Regn No Type is required."
    ),
    clientPFRegNo: Yup.string().required("Client PF Regn No Type is required."),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <React.Fragment>
      <div className="auth-page-wrapper auth-bg-cover d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-overlay bg-auth-card-overlay bg-holder overflow-hidden"></div>
        <div className="auth-page-content ">
          <Container>
            <Row>
              <Col lg={1}></Col>
              <Col lg={10}>
                <Card className="overflow-hidden m-0">
                  <Row className="justify-content-center g-0">
                    <Col lg={5}>
                      <Card className="m-4 bg-100 border-0">
                        <div className="bg-holder"></div>
                        <div className="m-5">
                          <h4 className="mb-3">
                            <strong>Phoenix Authentication</strong>
                          </h4>
                          <p className="text-muted">
                            Give yourself some hassle-free development process
                            with the uniqueness of Phoenix!
                          </p>

                          <div>
                            <ul className="list-unstyled mb-0 w-max-content w-md-auto mx-auto">
                              <li className="d-flex align-items-center gap-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="text-success"
                                >
                                  <path d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path>
                                </svg>
                                <span className="text-700 fw-semi-bold">
                                  Fast
                                </span>
                              </li>
                              <li className="d-flex align-items-center gap-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="text-success"
                                >
                                  <path d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path>
                                </svg>
                                <span className="text-700 fw-semi-bold">
                                  Simple
                                </span>
                              </li>
                              <li className="d-flex align-items-center gap-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="text-success"
                                >
                                  <path d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path>
                                </svg>
                                <span className="text-700 fw-semi-bold">
                                  Responsive
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <img src={sihnupimg} alt="" />
                      </Card>
                    </Col>
                    <Col lg={7}>
                      <Card className="border-0 mx-5">
                        <div className="p-lg-5 p-4">
                          <div className="mt-4">
                            {/* <Stepper steps={steps} activeStep={currentStep} /> */}
                            {currentStep === 0 && (
                              <>
                                <div>
                                  <div>
                                    <div className="mb-2 logo-signup">
                                      <img
                                        src={logo}
                                        alt="phoenix"
                                        style={{ width: "190px" }}
                                      />
                                    </div>
                                    <h5 className="text-black text-center mb-3">
                                      <strong> Sign Up</strong>
                                    </h5>
                                    <p className="text-muted text-center mb-5">
                                      Get access to your account
                                    </p>
                                  </div>

                                  {/* <div className="mt-4">
                                  <button
                                    className="btn btn-light w-100 border"
                                  >
                                   <strong> Sign up with google</strong>
                                  </button>
                                </div> */}

                                  {/* <div className="mt-4">
                                  <button
                                    className="btn btn-light w-100 border"
                                  >
                                    <strong>Sign up with facebook</strong>
                                  </button>
                                </div> */}

                                  <Form
                                    onSubmit={(event) => {
                                      validation.handleSubmit(event);
                                      event.preventDefault();
                                    }}
                                    className="needs-validation"
                                    noValidate
                                    action="index"
                                  >
                                    <div className="mb-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="emailOrPhone"
                                        placeholder="Enter Email or Phone"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                      />
                                      {validation.errors.emailOrPhone &&
                                        validation.touched.emailOrPhone && (
                                          <div className="invalid-feedback">
                                            {validation.errors.emailOrPhone}
                                          </div>
                                        )}
                                    </div>
                                    <div className="mt-4">
                                      <button
                                        className="btn btn-warning w-100 text-black"
                                        type="submit"
                                        onClick={handleContinue}
                                      >
                                        Continue
                                      </button>
                                    </div>
                                  </Form>
                                </div>
                              </>
                            )}

                            {currentStep === 1 && (
                              <>
                                <div>
                                  <button className="btn" onClick={handleBack}>
                                    <img
                                      src={backbtn}
                                      alt="Back"
                                      style={{ width: "30px" }}
                                    />
                                  </button>
                                </div>

                                <div className="mt-5 d-flex flex-column">
                                  <h5 className="text-black text-center">
                                    <strong>Enter Verification Code</strong>
                                  </h5>
                                  <Form
                                    onSubmit={(event) => {
                                      validation.handleSubmit(event);
                                      event.preventDefault();
                                    }}
                                    className="needs-validation otp-section"
                                    noValidate
                                    action="index"
                                  >
                                    <div className="mb-5 mt-5">
                                      <div className="d-flex justify-content-center m-2 mb-3">
                                        <OtpInput
                                          value={otp}
                                          onChange={setOtp}
                                          numInputs={4}
                                          renderSeparator={<span></span>}
                                          renderInput={(props) => (
                                            <input
                                              {...props}
                                              style={{
                                                width: "40px",
                                                height: "40px",
                                                margin: "10px",
                                              }}
                                            />
                                          )}
                                        />
                                      </div>
                                      {validation.errors.otp &&
                                        validation.touched.otp && (
                                          <div className="invalid-feedback">
                                            {validation.errors.otp}
                                          </div>
                                        )}
                                    </div>
                                    <div>
                                      <div>
                                        <div className="d-flex justify-content-center otp-btn">
                                          <OtpTimer
                                            minutes={initialMinutes}
                                            seconds={initialSeconds}
                                            text="Time:"
                                            ButtonText="Resend"
                                            resend={resendFunction}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mt-4 mb-2">
                                      <button
                                        className="btn btn-warning text-black w-100"
                                        type="submit"
                                        onClick={handleContinue}
                                      >
                                        Verify & Continue
                                      </button>
                                    </div>
                                  </Form>
                                </div>
                              </>
                            )}

                            {currentStep === 2 && (
                              <>
                                <div>
                                  <button className="btn" onClick={handleBack}>
                                    <img
                                      src={backbtn}
                                      alt="Back"
                                      style={{ width: "30px" }}
                                    />
                                  </button>
                                </div>

                                <div className="mt-5 d-flex flex-column">
                                  <h5 className="text-black text-center">
                                    <strong>Enter PAN Verification</strong>
                                  </h5>
                                  <Form
                                    onSubmit={(event) => {
                                      validation.handleSubmit(event);
                                      event.preventDefault();
                                    }}
                                    className="needs-validation"
                                    noValidate
                                    action="index"
                                  >
                                    <div className="mb-3 mt-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="pan"
                                        placeholder="Company/Firm PAN Number"
                                        value={validation.values.pan}
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                      />
                                      {validation.errors.pan &&
                                        validation.touched.pan && (
                                          <div className="invalid-feedback">
                                            {validation.errors.pan}
                                          </div>
                                        )}
                                    </div>
                                    <div className="mt-4 mb-2">
                                      <button
                                        className="btn btn-warning text w-100"
                                        type="submit"
                                        onClick={handleContinue}
                                      >
                                        Verify
                                      </button>
                                    </div>
                                  </Form>
                                </div>
                              </>
                            )}

                            {currentStep === 3 && (
                              <>
                                <div>
                                  <button className="btn" onClick={handleBack}>
                                    <img
                                      src={backbtn}
                                      alt="Back"
                                      style={{ width: "30px" }}
                                    />
                                  </button>
                                </div>

                                <div>
                                  <div>
                                    <h5 className="text-success text-center mb-4">
                                      <strong>
                                        PAN Verification Successful
                                      </strong>
                                    </h5>
                                  </div>
                                  <div className="verify-success">
                                    <img
                                      src={success}
                                      alt="Success"
                                      style={{ width: "190px" }}
                                    />
                                  </div>
                                  <div className="mt-4">
                                    <button
                                      className="btn btn-warning text w-100"
                                      type="submit"
                                      onClick={handleContinue}
                                    >
                                      Continue
                                    </button>
                                  </div>
                                </div>
                              </>
                            )}

                            {currentStep === 4 && (
                              <>
                                <div>
                                  <button className="btn" onClick={handleBack}>
                                    <img
                                      src={backbtn}
                                      alt="Back"
                                      style={{ width: "30px" }}
                                    />
                                  </button>
                                </div>

                                <div>
                                  <div>
                                    <h5 className="text-danger text-center mb-4">
                                      <strong>
                                        PAN Verification Unuccessful
                                      </strong>
                                    </h5>
                                  </div>
                                  <div className="verify-success mb-5">
                                    <img
                                      src={error}
                                      alt="Success"
                                      style={{ width: "190px" }}
                                    />
                                  </div>
                                  <div>
                                    <p className="text-center">
                                      If not verified enter details manually
                                    </p>
                                  </div>
                                  <div className="mt-4">
                                    <button
                                      className="btn btn-warning text w-100"
                                      type="submit"
                                      onClick={handleContinue}
                                    >
                                      Enter Details
                                    </button>
                                  </div>
                                </div>
                              </>
                            )}

                            {currentStep === 5 && (
                              <>
                                <section className="company-info-form">
                                  <div>
                                    <button
                                      className="btn"
                                      onClick={handleBack}
                                    >
                                      <img
                                        src={backbtn}
                                        alt="Back"
                                        style={{ width: "30px" }}
                                      />
                                    </button>
                                  </div>
                                  <div>
                                    <h2 className="mb-5 text-center">
                                      <strong>Company/Firm Information</strong>
                                    </h2>

                                    <div className="scroll-info-form">
                                      <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={handleSubmit}
                                      >
                                        {({ isSubmitting }) => (
                                          <Form>
                                            <Row className="mb-4">
                                              <Col md="12">
                                                <FormGroup controlId="companyName">
                                                  <Field
                                                    required
                                                    type="text"
                                                    name="companyName"
                                                    as={Input}
                                                    placeholder="Company/Firm Name"
                                                  />
                                                  <span className="text-danger">
                                                    <ErrorMessage
                                                      name="companyName"
                                                      component="div"
                                                    />
                                                  </span>
                                                </FormGroup>
                                              </Col>

                                              <Col md="12">
                                                <FormGroup controlId="address">
                                                  <Field
                                                    required
                                                    type="text"
                                                    name="address"
                                                    as={Input}
                                                    placeholder="Address"
                                                  />
                                                  <span className="text-danger">
                                                    <ErrorMessage
                                                      name="address"
                                                      component="div"
                                                    />
                                                  </span>
                                                </FormGroup>
                                              </Col>

                                              <Col md="12">
                                                <FormGroup controlId="bankDetails">
                                                  <Field
                                                    required
                                                    type="text"
                                                    name="bankDetails"
                                                    as={Input}
                                                    placeholder="Bank Details"
                                                  />
                                                  <span className="text-danger">
                                                    <ErrorMessage
                                                      name="bankDetails"
                                                      component="div"
                                                    />
                                                  </span>
                                                </FormGroup>
                                              </Col>

                                              <Col md="12">
                                                <FormGroup controlId="yearOfEstablishment">
                                                  <Field
                                                    required
                                                    type="text"
                                                    name="yearOfEstablishment"
                                                    as={Input}
                                                    placeholder="Year of Establishment"
                                                  />
                                                  <span className="text-danger">
                                                    <ErrorMessage
                                                      name="yearOfEstablishment"
                                                      component="div"
                                                    />
                                                  </span>
                                                </FormGroup>
                                              </Col>

                                              <Col md="12">
                                                <FormGroup controlId="contactNumber">
                                                  <Field
                                                    required
                                                    type="number"
                                                    name="contactNumber"
                                                    as={Input}
                                                    placeholder="Contact Number"
                                                  />
                                                  <span className="text-danger">
                                                    <ErrorMessage
                                                      name="contactNumber"
                                                      component="div"
                                                    />
                                                  </span>
                                                </FormGroup>
                                              </Col>

                                              <Col md="12">
                                                <FormGroup controlId="email">
                                                  <Field
                                                    required
                                                    type="email"
                                                    name="email"
                                                    as={Input}
                                                    placeholder="Email Id"
                                                  />
                                                  <span className="text-danger">
                                                    <ErrorMessage
                                                      name="email"
                                                      component="div"
                                                    />
                                                  </span>
                                                </FormGroup>
                                              </Col>

                                              <Col md="12">
                                                <FormGroup controlId="contactPerson">
                                                  <Field
                                                    required
                                                    type="text"
                                                    name="contactPerson"
                                                    as={Input}
                                                    placeholder="Contact Person"
                                                  />
                                                  <span className="text-danger">
                                                    <ErrorMessage
                                                      name="contactPerson"
                                                      component="div"
                                                    />
                                                  </span>
                                                </FormGroup>
                                              </Col>

                                              <Col md="12">
                                                <FormGroup controlId="gstNo">
                                                  <Field
                                                    required
                                                    type="text"
                                                    name="gstNo"
                                                    as={Input}
                                                    placeholder="GST No"
                                                  />
                                                  <span className="text-danger">
                                                    <ErrorMessage
                                                      name="gstNo"
                                                      component="div"
                                                    />
                                                  </span>
                                                </FormGroup>
                                              </Col>

                                              <Col md="12">
                                                <FormGroup controlId="panNo">
                                                  <Field
                                                    required
                                                    type="text"
                                                    name="panNo"
                                                    as={Input}
                                                    placeholder="Pan No"
                                                  />
                                                  <span className="text-danger">
                                                    <ErrorMessage
                                                      name="panNo"
                                                      component="div"
                                                    />
                                                  </span>
                                                </FormGroup>
                                              </Col>

                                              <Col md="12">
                                                <FormGroup controlId="clientType">
                                                  <Field
                                                    type="select"
                                                    name="clientType"
                                                    as={Input}
                                                    required
                                                  >
                                                    <option value="">
                                                      Choose...
                                                    </option>
                                                    <option>
                                                      Client Type 1
                                                    </option>
                                                    <option>
                                                      Client Type 2
                                                    </option>
                                                    <option>
                                                      Client Type 3
                                                    </option>
                                                  </Field>
                                                  <span className="text-danger"><ErrorMessage
                                                    name="clientType"
                                                    component="div"
                                                  /></span>
                                                </FormGroup>
                                              </Col>

                                              {/* <Col md="12">
                                         <Dropdown>
                                             <Dropdown.Toggle variant="light" id="dropdown-custom-010">
                                             Choose...
                                             </Dropdown.Toggle>
                                             <Dropdown.Menu>
                                             <Dropdown.Item>Client Type 1</Dropdown.Item>
                                             <Dropdown.Item>Client Type 2</Dropdown.Item>
                                             <Dropdown.Item>Client Type 3</Dropdown.Item>
                                             </Dropdown.Menu>
                                         </Dropdown>
                                         </Col> */}

                                              <Col md="12">
                                                <FormGroup controlId="clientCIN">
                                                  <Field
                                                    required
                                                    type="text"
                                                    name="clientCIN"
                                                    as={Input}
                                                    placeholder="Client CIN"
                                                  />
                                                  <span className="text-danger"><ErrorMessage
                                                    name="clientCIN"
                                                    component="div"
                                                  /></span>
                                                </FormGroup>
                                              </Col>

                                              <Col md="12">
                                                <FormGroup controlId="clientPTRegNo">
                                                  <Field
                                                    required
                                                    type="text"
                                                    name="clientPTRegNo"
                                                    as={Input}
                                                    placeholder="Client PT Regn No"
                                                  />
                                                  <span className="text-danger"><ErrorMessage
                                                    name="clientPTRegNo"
                                                    component="div"
                                                  /></span>
                                                </FormGroup>
                                              </Col>

                                              <Col md="12">
                                                <FormGroup controlId="clientESICRegNo">
                                                  <Field
                                                    required
                                                    type="text"
                                                    name="clientESICRegNo"
                                                    as={Input}
                                                    placeholder="Client ESIC Regn No"
                                                  />
                                               <span className="text-danger"><ErrorMessage
                                                    name="clientESICRegNo"
                                                    component="div"
                                                  /></span>
                                                </FormGroup>
                                              </Col>

                                              <Col md="12">
                                                <FormGroup controlId="clientPFRegNo">
                                                  <Field
                                                    required
                                                    type="text"
                                                    name="clientPFRegNo"
                                                    as={Input}
                                                    placeholder="Client PF Regn No"
                                                  />
                                                 <span className="text-danger"><ErrorMessage
                                                    name="clientPFRegNo"
                                                    component="div"
                                                  /></span>
                                                </FormGroup>
                                              </Col>
                                            </Row>

                                            {/* <FormGroup className="mb-3">
                                         <Form.Check
                                         required
                                         label="Agree to terms and conditions"
                                         feedback="You must agree before submitting."
                                         feedbackType="invalid"
                                         />
                                         </FormGroup> */}

                                            <div className="d-flex justify-content-center mt-3 mb-4">
                                              <Button
                                                type="submit"
                                                className="btn btn-warning text w-50"
                                                disabled={isSubmitting}
                                              >
                                                {isSubmitting
                                                  ? "Submitting..."
                                                  : "Submit"}
                                              </Button>
                                            </div>
                                          </Form>
                                        )}
                                      </Formik>
                                    </div>
                                  </div>
                                </section>
                              </>
                            )}
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
