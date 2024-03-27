import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function UploadExcel() {
  const [files, setFiles] = useState([]);

  const handleFileInputChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  return (
    <>
      <div className="px-3 py-3">
        <Form>
          <Row className="mb-4">
            <Form.Group
              as={Col}
              lg={6}
              md={6}
              sm={12}
              controlId="formGridState"
            >
              <Form.Select defaultValue="Choose...">
                <option>Selelct Type</option>
                <option>Standard Template</option>
                <option>Arnav ENT</option>
                <option>Design New Template</option>
              </Form.Select>
            </Form.Group>
          </Row>
        </Form>

        <div className="file-upload d-flex flex-column mb-5">
          <div
            className="drop-area"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          ></div>
          <input
            type="file"
            id="fileInput"
            multiple
            onChange={handleFileInputChange}
            style={{ display: "none" }}
          />
          <div>
            <button
              className="btn border-0 bg-warning"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <small>+ Upload Standard Template</small>
            </button>
          </div>
        </div>

        <div className="mb-4"> 
          {files.length > 0 && (
            <div className="file-list mt-3">
              <h4 className="mb-3">Selected Template</h4>
              <ul>
                {files.map((file, index) => (
                  <li key={index}>
                    {file.name}{" "}
                    <button
                      className="btn btn-sm btn-danger text-white mx-3"
                      onClick={() => handleDeleteFile(index)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <Button
            variant="primary"
            type="submit"
            className="btn bg-warning border-0"
          >
           <small> Submit</small>
          </Button>
        </div>
      </div>
    </>
  );
}
