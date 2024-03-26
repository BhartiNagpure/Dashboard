import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

export default function EnterManually() {
  const [data, setData] = useState([
    {
      INVNO: "",
      INVDate: "",
      ItemName: "",
      Description: "",
      HSNSAC: "",
      VOM: "",
      QTV: "",
      Rate: "",
      Amount: "",
      TaxableAmount: "",
      CGST: "",
      SGST: "",
      IGST: "",
      Total: "",
    },
  ]);

  const handleAddItem = (itemId, event) => {
    event.preventDefault();

    const newItem = {
      INVNO: "", 
      INVDate: "", 
      ItemName: "", 
      Description: "", 
      HSNSAC: "", 
      VOM: "", 
      QTV: "", 
      Rate: "", 
      Amount: "", 
      TaxableAmount: "", 
      CGST: "", 
      SGST: "", 
      IGST: "", 
      Total: "", 
    };
  
    setData([...data, newItem]);
  };
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

          <table className="table table-striped table-bordered table-responsive">
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
                <tr key={item.id}>
                  <td className="table-cell text-center">{item.INVNO}</td>
                  <td className="table-cell-left">{item.INVDate}</td>
                  {index === 0 ? (
                    <td className="table-cell-left">
                      <button
                        className="border-0 bg-transparent ms-2"
                        onClick={(event) => handleAddItem(item.id, event)}
                      >
                        <small>Add Item</small>
                      </button>
                    </td>
                  ) : (
                    <td className="table-cell-left"></td>
                  )}
                  <td className="table-cell-left">{item.Description}</td>
                  <td className="table-cell-left">{item.HSNSAC}</td>
                  <td className="table-cell-left">{item.VOM}</td>
                  <td className="table-cell-left">{item.QTV}</td>
                  <td className="table-cell-left">{item.Rate}</td>
                  <td className="table-cell-left">{item.Amount}</td>
                  <td className="table-cell-left">{item.TaxableAmount}</td>
                  <td className="table-cell-left">{item.CGST}</td>
                  <td className="table-cell-left">{item.SGST}</td>
                  <td className="table-cell-left">{item.IGST}</td>
                  <td className="table-cell-left">{item.Total}</td>
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
