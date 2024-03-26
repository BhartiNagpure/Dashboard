import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

export default function EnterManually() {
  const [data, setData] = useState([
    {
      "INV NO.": "",
      "INV Date": "",
      "Item Name": "+ Add Item",
      Description: "",
      "HSN/SAC": "",
      VOM: "",
      QTV: "",
      Rate: "",
      Amount: "",
      "Taxable Amount": "",
      CGST: "",
      SGST: "",
      IGST: "",
      Total: "",
    },
  ]);
  return (
    <>
      <div className="px-3">
        <Form>
          <Row className="mb-5">
            <Form.Group
              as={Col}
              lg={6}
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
              lg={6}
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

          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>INV NO.</th>
                <th>INV Date</th>
                <th>Item Name</th>
                <th>Description</th>
                <th>HSN/SAC</th>
                <th>VOM</th>
                <th>QTV</th>
                <th>Rate</th>
                <th>Amount</th>
                <th>Taxable Amount</th>
                <th>CGST</th>
                <th>SGST</th>
                <th>IGST</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mb-5 mt-5">
            <button className="btn border-0 bg-warning">+ Add Invoice</button>
          </div>

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
