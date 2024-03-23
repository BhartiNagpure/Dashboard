import React, { useState } from "react";
import InvoiceBulk from '../Invoice/InvoiceBulk';
import InvoiceSingle from '../Invoice/InvoiceSingle';

export default function GenerateInvoice() {
  const [openForm, setOpenForm] = useState(null); 

  const openFormFun = (type) => {
    setOpenForm(type);
  };

  return (
    <>
    <div className="col-12">
      <div className="d-flex justify-content-end">
        <button
          onClick={() => openFormFun("single")}
          className="btn bg-warning text-black mx-2"
        >
          <small>+ Generate Invoice (In Single)</small>
        </button>
        <button
          onClick={() => openFormFun("bulk")}
          className="btn bg-warning text-black"
        >
          <small>+ Generate Invoice (In Bulk)</small>
        </button>
      </div>

      <div className="mt-5">
      {openForm === "single" && (
        <InvoiceSingle />
      )}

      {openForm === "bulk" && (
        <InvoiceBulk />
      )}
      </div>
    </div>
    </>
  );
}
