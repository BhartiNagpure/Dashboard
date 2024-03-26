import React, { useState } from "react";
import Generateinvoice from "../../components/Transactions/Sales/Invoice/GenerateInvoice";
import UploadSalesData from "../../components/Transactions/Sales/SalesData/UploadSalesData";
import { createBrowserHistory } from "history";

export default function Sales() {
  const [openForm, setOpenForm] = useState(false);
  const [openForm1, setOpenForm1] = useState(false);
  const [buttonsClicked, setButtonsClicked] = useState(false);

  const history = createBrowserHistory();

  const openFormFun = () => {
    setOpenForm(true);
    setButtonsClicked(true);
  };

  const openFormFun1 = () => {
    setOpenForm1(true);
    setButtonsClicked(true);
  };

  const goBack = () => {
    setOpenForm(false);
    setOpenForm1(false);
    setButtonsClicked(false);
    window.location.href = document.referrer;
  };

  return (
    <>
      <div className="mt-5 py-5 px-3">
        {!buttonsClicked && (
          <div className="d-flex justify-content-end">
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
        )}
        {buttonsClicked && (
          <button onClick={goBack} className="btn btn-warning mb-2 mx-2 back-btn">
            Back
          </button>
        )}

        {openForm && <UploadSalesData />}

        {openForm1 && <Generateinvoice />}
      </div>
    </>
  );
}
