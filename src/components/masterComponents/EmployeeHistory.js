import React, { useState } from 'react';
import { Table, Form, Col, Row, Button } from "react-bootstrap";

export default function EmployeeHistory({ salaryData, deductionData }) {


  return (
    <div className='d-flex flex-wrap justify-content-center align-items-center'>
      {/* income history table  */}
      {salaryData.length > 0 &&
        <div className="mt-3 col-lg-6 col-md-8 col-sm-12 p-1 ">
          <h4 className="text-center">Income History</h4>
          <div className='table-container table-responsive'>
          <Table striped bordered hover table-responsive>
            <thead >
              <tr>
                <th>Income ID</th>
                <th>Income Name</th>
                <th>Income Amount</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {salaryData.map((entry, entryIndex) => {
                const { data, dateTime } = entry;
                const numRows = Math.ceil(data.length / 3);

                const incomeRows = [];
                for (let i = 0; i < numRows; i++) {
                  const startIndex = i * 3;
                  const endIndex = Math.min(startIndex + 3, data.length);
                  const rowData = data.slice(startIndex, endIndex);

                  const row = (
                    <tr key={`${entryIndex}-${i}`}>
                      {rowData.map((value, index) => (
                        <td key={`${entryIndex}-${i}-${index}`}>{value}</td>
                      ))}
                      {[...Array(3 - rowData.length)].map((_, index) => (
                        <td key={`empty-${index}`}></td>
                      ))}
                      {/* Display date and time in the same row for every entry */}
                      <td>{dateTime}</td>
                    </tr>
                  );

                  incomeRows.push(row);
                }

                return (
                  <React.Fragment key={entryIndex}>{incomeRows}</React.Fragment>
                );
              })}
            </tbody>
          </Table>
          </div>
        </div>
      }

      {/* deduction history table  */}

      {deductionData.length > 0 &&
        <div className="mt-3 col-lg-6 col-md-8 col-sm-12 p-1">
          <h4 className="text-center">Deduction History</h4>
          <div className='table-container table-responsive'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Deduction ID</th>
                  <th>Deduction Name</th>
                  <th>Deduction Amount</th>
                  <th>Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {deductionData.map((entry, entryIndex) => {
                  const { data, dateTime } = entry;
                  const numRows = Math.ceil(data.length / 3);

                  const incomeRows = [];
                  for (let i = 0; i < numRows; i++) {
                    const startIndex = i * 3;
                    const endIndex = Math.min(startIndex + 3, data.length);
                    const rowData = data.slice(startIndex, endIndex);

                    const row = (
                      <tr key={`${entryIndex}-${i}`}>
                        {rowData.map((value, index) => (
                          <td key={`${entryIndex}-${i}-${index}`}>{value}</td>
                        ))}
                        {[...Array(3 - rowData.length)].map((_, index) => (
                          <td key={`empty-${index}`}></td>
                        ))}
                        {/* Display date and time in the same row for every entry */}
                        <td>{dateTime}</td>
                      </tr>
                    );

                    incomeRows.push(row);
                  }

                  return (

                    <React.Fragment key={entryIndex}>{incomeRows}</React.Fragment>

                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      }
    </div>

  )
}


