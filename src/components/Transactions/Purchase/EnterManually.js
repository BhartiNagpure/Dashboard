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
              lg={4}
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

          <div className="table-responsive">
          <table className="table table-striped table-bordered ">
            <thead>
              <tr>
                <th><small>INV NO.</small></th>
                <th><small>INV Date</small></th>
                <th><small>Item Name</small></th>
                <th><small>Description</small></th>
                <th><small>HN/SAC</small></th>
                <th><small>VOM</small></th>
                <th><small>QTV</small></th>
                <th><small>Rate</small></th>
                <th><small>Amount</small></th>
                <th><small>Taxable Amount</small></th>
                <th><small>CGST</small></th>
                <th><small>SGST</small></th>
                <th><small>IGST</small></th>
                <th><small>Total</small></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id} className="text-center">
                  <td><small>{item.INVNO}</small></td>
                  <td><small>{item.INVDate}</small></td>
                  {index === 0 ? (
                    <td>
                      <button
                        className="border-0 bg-transparent ms-2"
                        onClick={(event) => handleAddItem(item.id, event)}
                      >
                        <small>Add Item</small>
                      </button>
                    </td>
                  ) : (
                    <td></td>
                  )}
                  <td>{item.Description}</td>
                  <td>{item.HSNSAC}</td>
                  <td>{item.VOM}</td>
                  <td>{item.QTV}</td>
                  <td>{item.Rate}</td>
                  <td>{item.Amount}</td>
                  <td>{item.TaxableAmount}</td>
                  <td>{item.CGST}</td>
                  <td>{item.SGST}</td>
                  <td>{item.IGST}</td>
                  <td>{item.Total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div className="mb-5 mt-5">
            <button className="btn border-0 Btn">+ Add Invoice</button>
          </div>

          <div className="d-flex">
            <Button
              variant="primary"
              type="print"
              className="btn Btn text-black border-0 mx-1"
            >
              PRINT
            </Button>

            <Button
              variant="primary"
              type="save"
              className="btn Btn text-black border-0 mx-1"
            >
              SAVE
            </Button>

            <Button
              variant="primary"
              type="submit"
              className="btn Btn text-black border-0 mx-1"
            >
              SUBMIT
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}