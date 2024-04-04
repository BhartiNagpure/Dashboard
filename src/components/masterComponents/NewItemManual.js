import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NewItemManual = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="Newitem-Master">
      {/* <FontAwesomeIcon icon={faArrowLeft}  onClick={() => navigate(-1)} /> */}
        <div className="container">
          <div>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} lg={4} md={6} sm={12} controlId="itemid" className="mb-3">
                  <Form.Control type="text" placeholder="Item ID" />
                </Form.Group>

                <Form.Group as={Col} lg={4} md={6} sm={12} controlId="itemtype" className="mb-3">
                  <Form.Select defaultValue="Choose...">
                    <option>Item Main Type</option>
                    <option>Sub Type 1</option>
                    <option>Sub Type 2</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} lg={4} md={6} sm={12} controlId="unitm" className="mb-3">
                  <Form.Control type="text" placeholder="Unit of Measurement" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} lg={4} md={6} sm={12} controlId="opquantity">
                  <Form.Label>OP Balance</Form.Label>
                  <Form.Control type="Number" placeholder="Quantity" />
                </Form.Group>

                <Form.Group as={Col} lg={4} md={6} sm={12} controlId="oprate" className="mt-2">
                  <Form.Label></Form.Label>
                  <Form.Control type="number" placeholder="Rate" />
                </Form.Group>


                <Form.Group as={Col} lg={4} md={6} sm={12} controlId="opamount" className="mt-2">
                  <Form.Label></Form.Label>
                  <Form.Control type="number" placeholder="Amount" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} lg={4} md={6} sm={12} controlId="currentquantity">
                  <Form.Label>Current Balance</Form.Label>
                  <Form.Control type="Number" placeholder="Quantity" />
                </Form.Group>

                <Form.Group as={Col} lg={4} md={6} sm={12} controlId="curentrate" className="mt-2">
                  <Form.Label></Form.Label>
                  <Form.Control type="number" placeholder="Rate" />
                </Form.Group>


                <Form.Group as={Col} lg={4} md={6} sm={12} controlId="currentamount" className="mt-2">
                  <Form.Label></Form.Label>
                  <Form.Control type="number" placeholder="Amount" />
                </Form.Group>
              </Row>

              <button className='btn Btn shadow my-2 '>
                <span>Submit</span>
              </button>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewItemManual;
