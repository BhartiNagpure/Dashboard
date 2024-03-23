import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function EnterManually() {
  return (
    <>
      <div>
        <Form>
          <Row className="mb-5">
            <Form.Group
              as={Col}
              lg={4}
              md={4}
              sm={12}
              controlId="formGridState"
              className="mb-3"
            >
              <Form.Select defaultValue="Choose...">
                <option>Add Customer</option>
                <option>Abhishek</option>
                <option>Ravi Das</option>
                <option>Shubham Saxena</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              as={Col}
              lg={4}
              md={4}
              sm={12}
              controlId="formGridState"
              className="mb-3"
            >
              <Form.Select defaultValue="Choose...">
                <option>Customer GSTIN</option>
              </Form.Select>
            </Form.Group>
          </Row>




          <div className="d-flex">
            <Button
              variant="primary"
              type="print"
              className="btn bg-warning text-black border-0 mx-1"
            >
              PRINT
            </Button>

            <Button
              variant="primary"
              type="save"
              className="btn bg-warning text-black border-0 mx-1"
            >
              SAVE
            </Button>

            <Button
              variant="primary"
              type="submit"
              className="btn bg-warning text-black border-0 mx-1"
            >
              SUBMIT
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
