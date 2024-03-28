import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function UploadExcel() {
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
            >
              <Form.Select defaultValue="Choose...">
                <option>Select type</option>
                <option>Standard Template</option>
                <option>Arnav ENT</option>
                <option>Design New Template</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <div className="upload-btn-wrapper mb-4">
            <button className="btn text-black Btn">
              <small> + Upload Document</small>
            </button>
            <input type="file" name="myfile" />
          </div>
          <div>
            <Button
              variant="primary"
              type="submit"
              className="btn Btn text-black border-0"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
