import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import "../../assests/css/wages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import success from "../../assests/images/success-svgrepo-com.svg";

function CustomAlert({ message }) {
  return (
    <div className="custom-alert">
      <div className="message border rounded w-25 bg-secondary text-white alert-div">
        <img src={success} alt="Successfully" />
        {message}
      </div>
    </div>
  );
}

export default function Wages() {
  const currentDate = new Date().toISOString().split("T")[0];

  const Attendance = [{ id: "", numOfStaff: "", dayWorked: "", dayAbsent: "" }];

  const Salary = [
    {
      id: "",
      numOfStaff: "",
      grossSalary: "",
      pf: "",
      esci: "",
      netSalary: "",
    },
  ];
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleButtonClick = (action) => {
    setAlertMessage(`Generated ${action} successfully!`);
    setShowAlert(true);
  };

  useEffect(() => {
    let timer;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showAlert]);

  return (
    <>
      <section className="section-wages mt-5 py-5 px-3 mb-5">
        <div className="container">
          <div>
            <Form>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  lg={4}
                  md={6}
                  sm={12}
                  controlId="site"
                  className="mb-3"
                >
                  <Form.Select defaultValue="Choose...">
                    <option>Select Site</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  as={Col}
                  lg={4}
                  md={6}
                  sm={12}
                  controlId="typecontract"
                  className="mb-3"
                >
                  <Form.Select defaultValue="Choose...">
                    <option>Select Contract</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  as={Col}
                  lg={4}
                  md={6}
                  sm={12}
                  controlId="contractid"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Contarct ID" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  lg={4}
                  md={6}
                  sm={12}
                  controlId="siteid"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Site ID" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  lg={4}
                  md={6}
                  sm={12}
                  controlId="datemonth"
                  className="mb-3"
                >
                  <Form.Control
                    type="date"
                    placeholder="Select Month"
                    defaultValue={currentDate}
                  />
                </Form.Group>
              </Row>
            </Form>
          </div>

          <div className="mb-4">
            <h5>
              <strong>Edit/Approve Attendance</strong>
            </h5>
            <div className="mt-4">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th className="text-center">
                      <small>No of Staff</small>
                    </th>
                    <th className="text-center">
                      <small>Day Worked</small>
                    </th>
                    <th className="text-center">
                      <small>Day Absent</small>
                    </th>
                    <th className="text-center">
                      <small>Action</small>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Attendance.map((item) => (
                    <tr key={item.id}>
                      <td className="table-cell text-center">
                        {item.numOfStaff}
                      </td>
                      <td className="table-cell-left">{item.dayWorked}</td>
                      <td className="table-cell-left">{item.dayAbsent}</td>
                      <td>
                        <div className="d-flex justify-content-around">
                          <button className="border-0 bg-transparent ms-2">
                            <small>View Details</small>
                          </button>
                          <button className="border-0 bg-transparent ms-2">
                            <small>Approve</small>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h5>
              <strong>Edit/Approve Salary</strong>
            </h5>
            <div className="mt-4">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th className="text-center">
                      <small>No of Staff</small>
                    </th>
                    <th className="text-center">
                      <small>Gross Salary</small>
                    </th>
                    <th className="text-center">
                      <small>PF</small>
                    </th>
                    <th className="text-center">
                      <small>ESCI</small>
                    </th>
                    <th className="text-center">
                      <small>Net Salary</small>
                    </th>
                    <th className="text-center">
                      <small>Action</small>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Salary.map((item) => (
                    <tr key={item.id}>
                      <td className="table-cell text-center">
                        {item.numOfStaff}
                      </td>
                      <td className="table-cell-left">{item.grossSalary}</td>
                      <td className="table-cell-left">{item.pf}</td>
                      <td className="table-cell-left">{item.esci}</td>
                      <td className="table-cell-left">{item.netSalary}</td>
                      <td>
                        <div className="d-flex justify-content-around">
                          <button className="border-0 bg-transparent ms-2">
                            <small>View Details</small>
                          </button>
                          <button className="border-0 bg-transparent ms-2">
                            <small>Approve</small>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-5 mb-3 d-flex justify-content-center">
            <Button
              variant="warning"
              className="mb-2 mx-2"
              onClick={() => handleButtonClick("Salary Slip")}
            >
              <small>Generate Salary Slip</small>
            </Button>

            <Button
              variant="warning"
              className="mb-2 mx-2"
              onClick={() => handleButtonClick("Bill")}
            >
              <small>Generate Bill</small>
            </Button>
          </div>
          <div className=" d-flex justify-content-center">
            <Button variant="warning" className="mb-2 mx-2">
              <small>Download All</small>
            </Button>
            <Button variant="warning" className="mb-2 mx-2">
              <small>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-success mx-2 mt-2"
                />
                Send To All
              </small>
            </Button>
            <Button variant="warning" className="mb-2 mx-2">
              <small>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-success mx-2 mt-2"
                />
                Send To All
              </small>
            </Button>
          </div>
          {showAlert && <CustomAlert message={alertMessage} />}
        </div>
      </section>
    </>
  );
}
