import React from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function InvoiceBulk() {
  return (
    <>
      <div>
        <Form>
          <Row className="mb-3 d-flex flex-column">
            <Form.Group
              as={Col}
              lg={4}
              md={4}
              sm={12}
              controlId="formGridState"
              className="mb-4"
            >
              <Form.Select defaultValue="Choose...">
                <option>SALES</option>
                <option>CREDIT NOTE</option>
                <option>DEBIT NOTE</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              as={Col}
              lg={4}
              md={4}
              sm={12}
              controlId="formGridZip"
            >
              <Form.Control type="date" />
            </Form.Group>
          </Row>

          <Button
            variant="primary"
            type="submit"
            className="btn bg-warning border-0 text-black"
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
