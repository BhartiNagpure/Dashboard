import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../assests/css/contractTmas.css";

const ContractTenderMaster = () => {
  return (
    <>
      <section className="contract-tender mt-5 py-4 px-3">
        <div className="container mt-5">
          <div className="ContactM-from1 mb-5">
            <div className="p-4">
              <Form>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="sitename"
                    className="mb-3"
                  >
                    <Form.Select defaultValue="Choose..." className="border-0">
                      <option>Site Name</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="clientname"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Client Name"
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="workorderno"
                    className="mb-3"
                  >
                    <Form.Select defaultValue="Choose..." className="border-0">
                      <option>Work Order Number</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="contractid"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Contract ID"
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="contarctname"
                    className="mb-3"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Contract Name"
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="customertype"
                    className="mb-3"
                  >
                    <Form.Select defaultValue="Choose..." className="border-0">
                      <option>Choose...</option>
                      <option>Govt</option>
                      <option>PSU</option>
                      <option>Other Pvt Ltd</option>
                      <option>Other Ltd</option>
                      <option>Firm</option>
                      <option>Proprietor</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="formGridCity"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Contract Award value"
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="formGridCity"
                    className="mb-3"
                  >
                    <Form.Control
                      type="date"
                      placeholder="Award Date"
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="formGridZip"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Contract Duration (in Yrs & Months)"
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
                    controlId="formGridCity"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Start Date"
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="formGridCity"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="End Date"
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="formGridState"
                    className="mb-3"
                  >
                    <Form.Select defaultValue="Choose..." className="border-0">
                      <option>Contarct Type</option>
                      <option>BoQ</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
              </Form>
            </div>
          </div>

          <div className="contarctM-addPhase mb-5">
            <div className="p-4">
              <h4>
                <strong>Add Phases:</strong>
              </h4>
              <div className="mt-4">
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="phaseid"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Phase ID"
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="phasename"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Phase Name"
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="phaseaccount"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Phase Amount"
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
                    controlId="startdate"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Start Date"
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="enddate"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="End Date"
                      className="border-0"
                    />
                  </Form.Group>
                </Row>
              </div>
              <Button
                variant="Secondary"
                type="submit"
                className="btn border text-black"
              >
               <small> + Add Phase</small>
              </Button>
            </div>
          </div>

          <div className="contarctM-tenderD mb-5">
            <div className="p-4">
              <h4>
                <strong>Tender Document:</strong>
              </h4>
              <div className="mt-4 mb-4">
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="tenderdocid"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Tender Doc ID"
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="phasename"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Document Name"
                      className="border-0"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={4}
                    md={6}
                    sm={12}
                    controlId="phaseaccount"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Short Description"
                      className="border-0"
                    />
                  </Form.Group>
                </Row>

                <div class="upload-btn-wrapper">
                  <button class="btn text-black border">
                   <small> + Upload Document</small>
                  </button>
                  <input type="file" name="myfile" />
                </div>
              </div>

              <Button
                variant="Secondary"
                type="submit"
                className="btn Btn text-black"
              >
               <small className="d-flex"> Submit</small>
              </Button>

              <div className="mt-5">
                <Button
                  variant="Secondary"
                  type="submit"
                  className="btn border text-black"
                >
                  <small className="d-flex">+ Tender Document</small>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContractTenderMaster;
