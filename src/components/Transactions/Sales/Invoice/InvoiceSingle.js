import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function InvoiceSingle() {
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <>
      <div>
        <Row>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Select Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="select Date"
                defaultValue={currentDate}
              />
            </Form.Group>
          </div>
        </Row>

        <div className="mt-5">
          <Button
            variant="primary"
            type="submit"
            className="btn bg-warning border-0 text-black"
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
