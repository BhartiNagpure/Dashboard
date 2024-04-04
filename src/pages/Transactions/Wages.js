import React, { useState } from "react";
import AddWages from "../../components/Transactions/Wages/AddWages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";



export default function Sales() {
  const [openForm, setOpenForm] = useState(false);
  const [openForm1, setOpenForm1] = useState(false);
  const [buttonsClicked, setButtonsClicked] = useState(false);

  const openFormFun = () => {
    setOpenForm(true);
    setButtonsClicked(true);
  };

  const handleBackButton = () => {
    setOpenForm(false);
    setOpenForm1(false);
    setButtonsClicked(false);
  };

  const data = [
    {
      id: 1,
      employeeName: "John Smith",
      employeeId: "123456",
      employerName: "ABC Company",
      wage: "$20",
      hoursWorked: 40
    },
    {
      id: 2,
      employeeName: "Jane Doe",
      employeeId: "789012",
      employerName: "XYZ Inc.",
      wage: "$18",
      hoursWorked: 35
    },
    
  ];
  return (
    <>
      <div className="mt-5 py-5 px-3">
        {!buttonsClicked && (
          <>
            <div className="d-flex justify-content-end mb-4">
              <button
                onClick={openFormFun}
                className="btn Btn shadow text-black"
              >
                <small>Wages</small>
              </button>
            </div>

            <div className="table-responsive">
              <table className="table table-striped table-bordered ">
                <thead>
                  <tr className="text-center">
                    <th><small>Employee Name</small></th>
                    <th><small>Employee ID</small></th>
                    <th><small>Employer Name</small></th>
                    <th><small>Wage</small></th>
                    <th><small>Hours Worke</small></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id} className="text-center">
                      <td><small>{item.employeeName}</small></td>
                      <td><small>{item.employeeId}</small></td>
                      <td><small>{item.employerName}</small></td>
                      <td><small>{item.wage}</small></td>
                      <td><small>{item.hoursWorked}</small></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        {(openForm || openForm1) && (
          <FontAwesomeIcon icon={faArrowLeft} onClick={handleBackButton} />
        )}
        {openForm && <AddWages />}
      </div>
    </>
  );
}