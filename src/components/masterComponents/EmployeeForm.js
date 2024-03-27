import React, { useState } from "react";
import "../../assests/css/contractTmas.css";
import Button from "react-bootstrap/Button";
import { Table, Form, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const employeeForm = [
    {
      name: "Staff ID",
      placeholder: "Staff ID",
    },
    {
      name: "Name",
      placeholder: " Name",
    },
    {
      name: "PAN",
      placeholder: "PAN ",
    },
    {
      name: "AADHAR",
      placeholder: "AADHAR",
    },
    {
      name: "Nominee",
      placeholder: "Nominee",
    },
    {
      name: "Relation with Nominee",
      placeholder: "Relation with Nominee",
    },
    {
      name: "PF No",
      placeholder: "PF No",
    },
    {
      name: "ESC",
      placeholder: "ESC",
    },
    {
      name: "Bank Account",
      placeholder: "Bank Account",
    },
    {
      name: "IFSC",
      placeholder: "IFSC",
    },
    {
      name: "Mobile No",
      placeholder: "Mobile No",
    },
    {
      name: "Email ID",
      placeholder: "Email ID",
    },
    {
      name: "Family particular",
      placeholder: "Family particular",
    },
    {
      name: "Date of Birth",
      placeholder: "Date of Birth",
    },
    {
      name: "Address",
      placeholder: "Address",
    },
  ];

  const rowsData = [
    { srNo: 1 },
    { srNo: 2 },
    { srNo: 3 },
    { srNo: 4 },
    { srNo: 5 },
  ];

  const SalaryForm = [
    {
      name: " Income ID",
      placeholder: "Income ID",
    },
    {
      name: "Income Name",
      placeholder: "Income Name",
    },
    {
      name: "Income Amount",
      placeholder: "Income Amount",
    },
  ];

  const DeductionForm = [
    {
      name: " Deduction ID",
      placeholder: "Deduction ID",
    },
    {
      name: "Deduction Name",
      placeholder: "Deduction Name",
    },
    {
      name: "Deduction Amount",
      placeholder: "DeductionAmount",
    },
    {
      name: "Net salary/month",
      placeholder: "Net salary/month",
    },
  ];
  const [salaryType, setSalaryType] = useState("");

  const handleSalaryChange = (event) => {
    setSalaryType(event.target.value);
  };

  
  

  return (
    <>
      <section className="VendorM-manu">
        <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} />
        <div className="container mt-2">
          <div className="siteform">
            <div className="p-4 mb-3">
              <Form>
                <Row className="mb-3">
                  {employeeForm.map((field, index) => (
                    <Form.Group
                      as={Col}
                      lg={4}
                      md={6}
                      sm={12}
                      controlId={field.name.toLowerCase().replace(/\s/g, "")}
                      className="mb-3"
                      key={index}
                    >
                      <Form.Control
                        type="text"
                        placeholder={field.placeholder}
                        className="border-0"
                      />
                    </Form.Group>
                  ))}
                </Row>
                <div className="col-lg-7 col-md-12 col-sm-12">
                  <h5 className="mx-2">No of Original Docs </h5>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Sr. No.</th>
                        <th>Type</th>
                        <th>Attachments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rowsData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.srNo}</td>
                          <td>
                            <Form.Group
                              as={Col}
                              lg={10}
                              controlId={`itemtype_${row.srNo}`}
                            >
                              <Form.Select defaultValue="Choose...">
                                <option>Item Main Type</option>
                                <option>Sub Type 1</option>
                                <option>Sub Type 2</option>
                              </Form.Select>
                            </Form.Group>
                          </td>
                          <td>
                            <Button
                              variant="Secondary"
                              type="submit"
                              className="btn border "
                            >
                              <small className="d-flex">
                                + Document (pdf, jpg)
                              </small>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <div className="d-flex siteform">
                    <Form.Group as={Col} lg={6} md={6} sm={12}>
                      <Form.Select
                        value={salaryType}
                        onChange={handleSalaryChange}
                        defaultValue="Choose..."
                        placeholder="Salary"
                      >
                        <option>Daily</option>
                        <option>Monthly</option>
                        <option>Hourly</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} lg={6} md={6} sm={12} className="px-3">
                      <Form.Select defaultValue="Choose..." placeholder="Rate">
                        <option>/Hour</option>
                        <option>/Day</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </div>
             <div>
                  <div className="mt-3">
                    <h6>If Monthly,</h6>
                    <Row className="mt-3">
                      {SalaryForm.map((field, index) => (
                        <Form.Group
                          as={Col}
                          lg={4}
                          md={6}
                          sm={12}
                          controlId={field.name
                            .toLowerCase()
                            .replace(/\s/g, "")}
                          className="mb-3"
                          key={index}
                        >
                          <Form.Control
                            type="text"
                            placeholder={field.placeholder}
                            className="border-0"
                          />
                        </Form.Group>
                      ))}
                    </Row>
                  </div>
              

                  <div className="mt-3">
                    <h6>No of deduction components</h6>
                    <Row className="mt-3">
                      {DeductionForm.map((field, index) => (
                        <Form.Group
                          as={Col}
                          lg={4}
                          md={6}
                          sm={12}
                          controlId={field.name
                            .toLowerCase()
                            .replace(/\s/g, "")}
                          className="mb-3"
                          key={index}
                        >
                          <Form.Control
                            type="text"
                            placeholder={field.placeholder}
                            className="border-0"
                          />
                        </Form.Group>
                      ))}
                    </Row>
                  </div>
                </div> 
 
                <div className="mb-3">
                  <button className="btn Btn m-2 ">
                    <span>Submit</span>
                  </button>
                </div>
              </Form>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeForm;
