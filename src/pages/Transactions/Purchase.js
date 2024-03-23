import React, { useState } from "react";
import EnterManually from '../../components/Transactions/Purchase/EnterManually';
import UploadExcel from '../../components/Transactions/Purchase/UploadExcel';
import UploadInvoice from '../../components/Transactions/Purchase/UploadInvoice';

export default function Purchase() {
  const [activeForm, setActiveForm] = useState(null);

  const openForm = (form) => {
    setActiveForm(form);
  };

  return (
    <>
    <div className="d-flex justify-content-end mt-5 py-5 px-3">
      <button onClick={() => openForm('excel')} className="btn bg-warning text-black mx-2">
        <small>+ Upload Excel <span>(Template)</span></small>
      </button>
      <button onClick={() => openForm('invoice')} className="btn bg-warning text-black mx-2">
        <small>+ Upload Invoice</small>
      </button>
      <button onClick={() => openForm('manual')} className="btn bg-warning text-black">
        <small>+ Enter Manually</small>
      </button>
    </div>

    <div>
      {activeForm === 'excel' && <UploadExcel />}
      {activeForm === 'invoice' && <UploadInvoice />}
      {activeForm === 'manual' && <EnterManually />}
    </div>
    </>
  );
}
