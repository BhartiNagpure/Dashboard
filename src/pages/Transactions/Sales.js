import React, { useState } from "react";
import Generateinvoice from "../../components/Transactions/Sales/Invoice/GenerateInvoice";
import UploadSalesData from '../../components/Transactions/Sales/SalesData/UploadSalesData';

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

  return (
    <div className="mt-5 py-5 px-3">
      {!buttonsClicked && (
        <div className="d-flex justify-content-end">
          <button onClick={openFormFun} className="btn bg-warning text-black mx-2">
            <small>+ Upload Sales Data</small>
          </button>
          <button onClick={openFormFun1} className="btn bg-warning text-black">
            <small>+ Generate Invoice</small>
          </button>
        </div>
      )}

      {openForm && (
         <UploadSalesData />
      )}

      {openForm1 && (
        <Generateinvoice />
      )}
    </div>
  );
}
