import React, { useState } from "react";
import GenerateInvoice from "../../components/Transactions/Sales/Invoice/GenerateInvoice";
import UploadSalesData from "../../components/Transactions/Sales/SalesData/UploadSalesData";
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

  const openFormFun1 = () => {
    setOpenForm1(true);
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
      Date: "2024-03-01",
      productName: "Product A",
      quantitySold: 50,
      priceperUnit: "$10",
      totalSales: "$500",
    },
    {
      id: 2,
      Date: "2024-03-02",
      productName: "Product B",
      quantitySold: 30,
      priceperUnit: "$15",
      totalSales: "$450",
    },
    {
      id: 3,
      Date: "2024-03-02",
      productName: "Product C",
      quantitySold: 30,
      priceperUnit: "$15",
      totalSales: "$450",
    },
    {
      id: 4,
      Date: "2024-03-02",
      productName: "Product D",
      quantitySold: 30,
      priceperUnit: "$15",
      totalSales: "$450",
    },
  ];

  return (
  <>
    <div className="d-flex flex-column flex-wrap mt-5 py-5 px-3">
      <div className="p-2 d">
        {buttonsClicked && (
          <div>
            <FontAwesomeIcon icon={faArrowLeft} onClick={handleBackButton} />
          </div>
        )}
        {!openForm && !openForm1 && (
          <div className="d-flex justify-content-end">
            <button
              onClick={openFormFun}
              className="btn Btn shadow text-black mx-2"
            >
              <small>+ Upload Sales Data</small>
            </button>
            <button
              onClick={openFormFun1}
              className="btn Btn shadow text-black"
            >
              <small>+ Generate Invoice</small>
            </button>
          </div>
        )}
      </div>

      {!openForm && !openForm1 && (
        <div className="mt-3 table-responsive">
          <table className="table border table-striped">
            <thead>
              <tr className="text-center">
                <th><small>Date</small></th>
                <th><small>Product Name</small></th>
                <th><small>Quantity Sold</small></th>
                <th><small>Price per Unit</small></th>
                <th><small>Total Sales</small></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id} className="text-center">
                  <td><small>{item.Date}</small></td>
                  <td><small>{item.productName}</small></td>
                  <td><small>{item.quantitySold}</small></td>
                  <td><small>{item.priceperUnit}</small></td>
                  <td><small>{item.totalSales}</small></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {openForm && <UploadSalesData />}
      {openForm1 && <GenerateInvoice />}
    </div>
  </>
  );
}