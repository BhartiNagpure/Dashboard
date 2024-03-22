import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function GenerateInvoice() {
  const [openForm, setOpenForm] = useState(false);

  const openFormFun = () => {
    setOpenForm(true);
  };
  return (
    <div className="col-12">
      {!openForm && (
        <>
          <div className="d-flex justify-content-end">
            <button
              onClick={openFormFun}
              className="btn bg-warning text-black mx-2"
            >
              <small>+  Generate Invoice <span>(In Single)</span></small>
            </button>
            <button onClick={openFormFun} className="btn bg-warning text-black">
              <small>+ Generate Invoice <span>(In Bulk)</span></small>
            </button>
          </div>
        </>
      )}
      {openForm && (
        <>
          <Form>
            <Row className="mb-3 d-flex flex-wrap">
              <Form.Group
                as={Col}
                lg={12}
                md={12}
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
                lg={12}
                md={12}
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
        </>
      )}
    </div>
  );
}
