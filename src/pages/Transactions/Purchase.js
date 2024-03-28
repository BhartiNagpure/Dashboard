import React, { useState } from "react";
import EnterManually from "../../components/Transactions/Purchase/EnterManually";
import UploadExcel from "../../components/Transactions/Purchase/UploadExcel";
import UploadInvoice from "../../components/Transactions/Purchase/UploadInvoice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";



export default function Purchase() {
  const [activeForm, setActiveForm] = useState(null);

  const openForm = (form) => {
    setActiveForm(form);
  };

  const data = [
    {
      id: 1,
      PurchaseID: 1001,
      CustomerID: 101,
      ProductID: 501,
      PurchaseDate: "2024-03-27",
      Quantity: 2,
      UnitPrice: 25.99,
      TotalPrice: 51.98,
      PaymentMethod: "Credit Card",
    },
    {
      id: 2,
      PurchaseID: 1002,
      CustomerID: 102,
      ProductID: 502,
      PurchaseDate: "2024-03-26",
      Quantity: 1,
      UnitPrice: 49.99,
      TotalPrice: 49.99,
      PaymentMethod: "PayPal",
    },
    {
      id: 3,
      PurchaseID: 1003,
      CustomerID: 103,
      ProductID: 503,
      PurchaseDate: "2024-03-25",
      Quantity: 3,
      UnitPrice: 12.5,
      TotalPrice: 37.5,
      PaymentMethod: "Cash",
    },
  ];

  const handleBackButtonClick = () => {
    setActiveForm(null);
  };

  return (
    <>
      <div className="mt-5 py-5 px-3">
        {activeForm && (
          <FontAwesomeIcon icon={faArrowLeft} onClick={handleBackButtonClick} className="mb-2"/>
        )}
        <div className="d-flex justify-content-end">
          <button
            onClick={() => openForm("excel")}
            className="btn Btn text-black mx-1"
          >
            <small>+ Upload Excel</small>
          </button>
          <button
            onClick={() => openForm("invoice")}
            className="btn Btn text-black mx-2"
          >
            <small>+ Upload Invoice</small>
          </button>
          <button
            onClick={() => openForm("manual")}
            className="btn Btn text-black"
          >
            <small>+ Enter Manually</small>
          </button>
        </div>

        {activeForm === null && (
          <div className="table-responsive mt-4">
            <table className="table table-striped table-bordered">
              <thead>
                <tr className="text-center">
                  <th>PurchaseID</th>
                  <th>CustomerID</th>
                  <th>ProductID</th>
                  <th>PurchaseDate</th>
                  <th>Quantity</th>
                  <th>UnitPrice</th>
                  <th>TotalPrice</th>
                  <th>PaymentMethod</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id} className="text-center">
                    <td>{item.PurchaseID}</td>
                    <td>{item.CustomerID}</td>
                    <td>{item.ProductID}</td>
                    <td>{item.PurchaseDate}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.UnitPrice}</td>
                    <td>{item.TotalPrice}</td>
                    <td>{item.PaymentMethod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {activeForm === "excel" && <UploadExcel />}
      {activeForm === "invoice" && <UploadInvoice />}
      {activeForm === "manual" && <EnterManually />}
    </>
  );
}
