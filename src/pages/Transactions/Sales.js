import React, { useState } from "react";
import Generateinvoice from "../../components/Transactions/Sales/Invoice/GenerateInvoice";
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
      <div className="mt-5 py-5 px-3">
        {(openForm || openForm1) && (
           <FontAwesomeIcon icon={faArrowLeft} onClick={handleBackButton} className="mb-2"/>
        )}
       
        {!buttonsClicked && (
          <>
            <div className="d-flex justify-content-end mb-5">
              <button
                onClick={openFormFun}
                className="btn bg-warning text-black mx-2"
              >
                <small>+ Upload Sales Data</small>
              </button>
              <button
                onClick={openFormFun1}
                className="btn bg-warning text-black"
              >
                <small>+ Generate Invoice</small>
              </button>
            </div>

            <div className="table-responsive">
              <table className="table table-striped table-bordered responsive">
                <thead>
                  <tr className="text-center">
                    <th>Date</th>
                    <th>Product Name</th>
                    <th>Quantity Sold</th>
                    <th>Price per Unit</th>
                    <th>Total Sales</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id} className="text-center">
                      <td className="table-cell-left ">{item.productName}</td>
                      <td className="table-cell-left ">{item.Date}</td>
                      <td className="table-cell-left ">{item.quantitySold}</td>
                      <td className="table-cell-left ">{item.priceperUnit}</td>
                      <td className="table-cell-left ">{item.totalSales}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {openForm && <UploadSalesData />}

        {openForm1 && <Generateinvoice />}
      </div>
    </>
  );
}
