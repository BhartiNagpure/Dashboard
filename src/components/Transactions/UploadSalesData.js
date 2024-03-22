import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Sales() {
  const [openForm, setOpenForm] = useState(false);

  const openFormFun = () => {
    setOpenForm(true);
  };

  const [openForm1, setOpenForm1] = useState(false);

  const openFormFun1 = () => {
    setOpenForm1(true);
  };

  const [openForm2, setOpenForm2] = useState(false);

  const openFormFun2 = () => {
    setOpenForm2(true);
  };

  return (
    <div className="">
      {!openForm && (
        <>
          <div className="d-flex justify-content-end">
            <button
              onClick={openFormFun}
              className="btn bg-warning text-black mx-2"
            >
              <small>
                + Upload Excel <span>(Template)</span>
              </small>
            </button>
            <button
              onClick={openFormFun1}
              className="btn bg-warning text-black mx-2"
            >
              <small>+ Upload Invoice</small>
            </button>

            <button
              onClick={openFormFun2}
              className="btn bg-warning text-black"
            >
              <small>+ Enter Manually</small>
            </button>
          </div>
        </>
      )}

      {openForm && (
        <>
          <Form>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                lg={4}
                md={4}
                sm={12}
                controlId="formGridState"
              >
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Select type</option>
                  <option>Standard Template</option>
                  <option>Arnav ENT</option>
                  <option>Design New Template</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <div className="upload-btn-wrapper">
              <button className="btn text-black bg-warning">
                <small> + Upload Document</small>
              </button>
              <input type="file" name="myfile" />
            </div>
            <div>
            <Button
              variant="primary"
              type="submit"
              className="btn bg-warning text-black border-0"
            >
              Submit
            </Button>
            </div>
          </Form>
        </>
      )}

      {openForm1 && <></>}

      {openForm2 && <></>}
    </div>
  );
}
