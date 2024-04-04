import React, { useState } from "react";
import { Button, Form, Col, Modal, Row } from "react-bootstrap";



const ContractTenderForm = () => {
  const [contractType, setContractType] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const existingIds = ["Baq/2023/001"];
  
  function generateContractId(contractType, year, existingIds) {
    const filteredIds = existingIds.filter((id) =>
      id.startsWith(`${contractType}/${year}/`)
    );
    const maxId =
      filteredIds.length > 0
        ? Math.max(...filteredIds.map((id) => parseInt(id.split("/")[2])))
        : 0;
    const nextId = maxId + 1;
    const paddedId = nextId.toString().padStart(3, "0");
    return `${contractType}/${year}/${paddedId}`;
  }

  // Example usage:
  const contractId = generateContractId(contractType, year, existingIds);
  console.log(contractId);




  // Add Phase
  const [phases, setPhases] = useState([
    { id: "", name: "", amount: "", startDate: "", endDate: "" },
  ]);

  const addPhase = () => {
    setPhases([
      ...phases,
      { id: "", name: "", amount: "", startDate: "", endDate: "" },
    ]);
  };

  const removePhase = (index) => {
    const updatedPhases = [...phases];
    updatedPhases.splice(index, 1);
    setPhases(updatedPhases);
  };

  const handlePhaseChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPhases = [...phases];
    updatedPhases[index][name] = value;

    if (name === "startDate") {
      const startDate = new Date(value);
      if (!isNaN(startDate.getDate())) {
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 30);
        const formattedEndDate = `${endDate
          .getDate()
          .toString()
          .padStart(2, "0")}-${(endDate.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${endDate.getFullYear()}`;
        updatedPhases[index]["endDate"] = formattedEndDate;
      }
    }

    setPhases(updatedPhases);
  };

  // Function to handle contract type change
  const handleContractTypeChange = (e) => {
    setContractType(e.target.value);
  };

  // Function to handle year change
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };



  // Add Tender
  const [tenderDocuments, setTenderDocuments] = useState([
    { id: "", name: "", description: "" },
  ]);

  const addTenderDocument = () => {
    setTenderDocuments([
      ...tenderDocuments,
      { id: "", name: "", description: "" },
    ]);

  };

  const removeTenderDocument = (index) => {
    const updatedTenderDocuments = [...tenderDocuments];
    updatedTenderDocuments.splice(index, 1);
    setTenderDocuments(updatedTenderDocuments);
  };

  const handleTenderDocumentChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTenderDocuments = [...tenderDocuments];
    updatedTenderDocuments[index][name] = value;
    setTenderDocuments(updatedTenderDocuments);
  };

 

  return (
    <>
      <section className="contract-tender">
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
                  controlId="customertype"
                  className="mb-3"
                >
                  <Form.Select
                    defaultValue="Choose..."
                    value={contractType}
                    onChange={handleContractTypeChange}
                    className="border-0"
                  >
                    <option>Choose...</option>
                    <option value="GOVT">Govt</option>
                    <option value="PSU">PSU</option>
                    <option value="OTHER Pvt">Other Pvt Ltd</option>
                    <option value="OTHER Ltd">Other Ltd</option>
                    <option value="FIRM">Firm</option>
                    <option value="PROP">Proprietor</option>
                  </Form.Select>
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
                    type="text"
                    placeholder="Contract Name"
                    className="border-0"
                  />
                </Form.Group>
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
                    value={generateContractId(contractType, year, existingIds)}
                    placeholder="Contract ID"
                    className="border-0"
                    readOnly
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
                <Row className="mb-3">
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
                      <option>BAQ</option>
                      <option>Type 2</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
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
              {phases.map((phase, index) => (
                <div key={index} className="phase-section">
                  <div className="row mb-3">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 ">
                      <input
                        type="text"
                        name="id"
                        value={phase.id}
                        onChange={(e) => handlePhaseChange(index, e)}
                        placeholder="Phase ID"
                        className="form-control border-0"
                      />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <input
                        type="text"
                        name="name"
                        value={phase.name}
                        onChange={(e) => handlePhaseChange(index, e)}
                        placeholder="Phase Name"
                        className="form-control border-0"
                      />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <input
                        type="text"
                        name="amount"
                        value={phase.amount}
                        onChange={(e) => handlePhaseChange(index, e)}
                        placeholder="Phase Amount"
                        className="form-control border-0"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <input
                        type="text"
                        name="startDate"
                        value={phase.startDate}
                        onChange={(e) => handlePhaseChange(index, e)}
                        placeholder="Start Date"
                        className="form-control border-0"
                      />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <input
                        type="text"
                        name="endDate"
                        value={phase.endDate}
                        onChange={(e) => handlePhaseChange(index, e)}
                        placeholder="End Date"
                        className="form-control border-0"
                      />
                    </div>
                  </div>

                  {phases.length > 1 && index >= phases.length - 1 && (
                    <button
                      className="btn border text-black mb-3"
                      onClick={() => removePhase(index)}
                    >
                      Remove Phase
                    </button>
                  )}

                  
                </div>
              ))}
            </div>
            <button className="btn border text-black" onClick={addPhase}>
              <small>+ Add Phase</small>
            </button>
          </div>
        </div>

        <div className="contarctM-tenderD mb-5">
          <div className="p-4">
            <h4>
              <strong>Tender Document:</strong>
            </h4>
            {tenderDocuments.map((doc, index) => (
              <div key={index} className="mt-4 mb-4">
                <div className="row mb-3">
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <input
                      type="text"
                      name="id"
                      value={doc.id}
                      onChange={(e) => handleTenderDocumentChange(index, e)}
                      placeholder="Tender Doc ID"
                      className="form-control border-0"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <input
                      type="text"
                      name="name"
                      value={doc.name}
                      onChange={(e) => handleTenderDocumentChange(index, e)}
                      placeholder="Document Name"
                      className="form-control border-0"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <input
                      type="text"
                      name="description"
                      value={doc.description}
                      onChange={(e) => handleTenderDocumentChange(index, e)}
                      placeholder="Short Description"
                      className="form-control border-0"
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="upload-btn-wrapper">
                    <button className="btn text-black border">
                      <small> + Upload Document</small>
                    </button>
                    <input type="file" name="myfile" />
                  </div>

                  <div>
                    {tenderDocuments.length > 1 &&
                      index >= tenderDocuments.length - 1 && (
                        <button
                          className="btn border text-black mx-2"
                          onClick={() => removeTenderDocument(index)}
                        >
                          <small> Remove Tender</small>
                        </button>
                      )}
                  </div>
                </div>
              </div>
            ))}
            <div>
              <button
                className="btn border text-black mb-3"
                onClick={addTenderDocument}
              >
                <small>+ Tender Document</small>
              </button>{" "}
            </div>
            <button className="btn Btn text-black">
              <small>Submit</small>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContractTenderForm;