import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function UploadInvoice() {
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
      <div className="px-3 mx-3">
        <div className="file-upload d-flex flex-column justify-content-center text-center">
          <div
            className="drop-area"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <p>Click or Drag files to this area to upload</p>
          </div>
          <input
            type="file"
            id="fileInput"
            multiple
            onChange={handleFileInputChange}
            style={{ display: "none" }}
          />
          <div>
            <button
              className="btn border-0 Btn"
              onClick={() => document.getElementById("fileInput").click()}
            >
              Select Files
            </button>
          </div>
        </div>

        <div>
          {files.length > 0 && (
            <div className="file-list mt-3">
              <h4 className="mb-3">Selected Files:</h4>
              <table className="table table-striped table-bordered responsive">
                <thead>
                  <tr className="text-center">
                    <th>Name</th>
                    <th>Uploaded file</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file, index) => (
                    <tr key={index} className="text-center">
                      <td>{file.name}</td>
                      <td>
                        {file.type.startsWith("image/") ? (
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            style={{ maxHeight: "50px", maxWidth: "50px" }}
                          />
                        ) : (
                          <span>Img not available</span>
                        )}
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger text-white mx-3"
                          onClick={() => handleDeleteFile(index)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
