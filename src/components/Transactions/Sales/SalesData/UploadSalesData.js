import React, { useState } from "react";
import Entermanuallysale from "../SalesData/EnterManually";
import Uploadexcelsale from "../SalesData/UploadExcel";
import Uploadinvoicesale from "../SalesData/UploadInvoice";


export default function Sales() {
  const [openForm, setOpenForm] = useState(null);

  const openFormFun = (formName) => {
    setOpenForm(formName);
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <div>
          <button
            onClick={() => openFormFun("uploadExcel")}
            className="btn bg-warning text-black mx-2 mb-2"
          >
            <small>
              + Upload Excel <span>(Template)</span>
            </small>
          </button>
          <button
            onClick={() => openFormFun("uploadInvoice")}
            className="btn bg-warning text-black mx-2 mb-2"
          >
            <small>+ Upload Invoice</small>
          </button>
          <button
            onClick={() => openFormFun("enterManually")}
            className="btn bg-warning text-black mb-2 mx-2"
          >
            <small>+ Enter Manually</small>
          </button>
        </div>
      </div>

      <div className="mt-5">
        {openForm === "uploadExcel" && <Uploadexcelsale />}
        {openForm === "uploadInvoice" && <Uploadinvoicesale />}
        {openForm === "enterManually" && <Entermanuallysale />}
      </div>
    </>
  );
}
