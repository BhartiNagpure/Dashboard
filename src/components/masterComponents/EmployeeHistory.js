import React, {useState}from 'react';
import { Table, Form, Col, Row , Button} from "react-bootstrap";

export default function EmployeeHistory({salaryData, }) {

  // const handleDeductionAdd = () => {
  //   setDeductionData([...deductionData, { data: deductionFormData, dateTime: getCurrentDateTime() }]);
  //   setDeductionFormData([]);
  // };
  return (
    <div>

      {/* {salaryData.length > 0 && ( */}
        <div className="mt-3">
          <h4 className='text-center'>Income History</h4>
          <Table striped bordered hover>
            <thead>
              <tr>  
                <th>Income ID</th>     
                <th>Income Name</th>     
                <th>Income Amount</th>    
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {salaryData.map((entry, entryIndex) => (
                <tr key={entryIndex}>
                  {entry.data.map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                  <td>{entry.dateTime}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      {/* )} */}

      {/* {deductionData.length > 0 && (
        <div className="mt-3">
          <h6>Deduction Table</h6>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Deduction Data</th>
                {DeductionForm.map((field, index) => (
                  <th key={index}>Field {index + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {deductionData.map((entry, entryIndex) => (
                <tr key={entryIndex}>
                  <td>{entry.dateTime}</td>
                  <td>Deduction</td>
                  {entry.data.map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div> */}
     </div>
  )
}
