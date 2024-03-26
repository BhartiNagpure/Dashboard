import React, { useState } from "react";
import EnterManually from "../../components/Transactions/Purchase/EnterManually";
import UploadExcel from "../../components/Transactions/Purchase/UploadExcel";
import UploadInvoice from "../../components/Transactions/Purchase/UploadInvoice";


export default function Purchase() {
  const [activeForm, setActiveForm] = useState(null);
  const [activeForm1, setActiveForm1] = useState(null);
  const [activeForm2, setActiveForm2] = useState(null);
  const [buttonsClicked, setButtonsClicked] = useState(false);

  const openForm = (form) => {
    setActiveForm(form);
  };

  const openForm1 = (form) => {
    setActiveForm1(form);
  };

  const openForm2 = (form) => {
    setActiveForm2(form);
  };


  return (
    <>
      <div className="d-flex justify-content-end mt-5 py-5 px-3">
        <button
          onClick={() => openForm("excel")}
          className="btn bg-warning text-black mx-2"
        >
          <small>
            + Upload Excel <span>(Template)</span>
          </small>
        </button>
        <button
          onClick={() => openForm1("invoice")}
          className="btn bg-warning text-black mx-2"
        >
          <small>+ Upload Invoice</small>
        </button>
        <button
          onClick={() => openForm2("manual")}
          className="btn bg-warning text-black"
        >
          <small>+ Enter Manually</small>
        </button>
      </div>
     
      <div>
        {activeForm === "excel" && <UploadExcel />}
        {activeForm1 === "invoice" && <UploadInvoice />}
        {activeForm2 === "manual" && <EnterManually />}
      </div>
    </>
  );
}
