import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import GenerateInvoice from "../../components/Transactions/GenerateInvoice";
import UploadSalesData from '../../components/Transactions/UploadSalesData';
export default function Sales() {
  const [openForm, setOpenForm] = useState(false);

  const openFormFun = () => {
    setOpenForm(true);
  };

  const [openForm1, setOpenForm1] = useState(false);

  const openFormFun1 = () => {
    setOpenForm1(true);
  };
  return (
    <div className="mt-5 py-5 px-3">
      {!openForm && (
        <>
          <div className="d-flex justify-content-end">
            <button
              onClick={openFormFun}
              className="btn bg-warning text-black mx-2"
            >
              <small>+ Upload Sales Data</small>
            </button>
            <button onClick={openFormFun1} className="btn bg-warning text-black">
              <small>+ Generate Invoice</small>
            </button>
          </div>
        </>
      )}

      {openForm && (
        <>
          <GenerateInvoice />
        </>
      )}

      {openForm1 && (
        <>
          <UploadSalesData />
        </>
      )}
    </div>
  );
}
