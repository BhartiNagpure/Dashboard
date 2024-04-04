
// import React, { useState, useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAdd, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// export default function SitesForm() {
//     const fieldsData = [
//         {
//             name: 'Site Name',
//             placeholder: 'Site Name',
//         },
//         {
//             name: 'Client Name',
//             placeholder: 'Client Name',
//         },
//         {
//             name: 'S.O.Number',
//             placeholder: 'S.O.Number',
//         },
//         {
//             name: 'State',
//             placeholder: ' State',
//         },
//         {
//             name: 'Site Description',
//             placeholder: 'Site Description',
//         },
//         {
//             name: 'Contact Person',
//             placeholder: 'Contact Person',
//         },
//         {
//             name: ' Contact Number',
//             placeholder: 'Contact Number',
//         },
//     ]
//     const addFields = [
//         {
//             name: 'Work Order No',
//             placeholder: 'Work Order No',
//         },
//         {
//             name: 'Description Or work Done',
//             placeholder: 'Description Or work Done',
//         },
//         {
//             name: 'Amount',
//             placeholder: 'Amount',
//         },
//     ]
//     const [fields, setFields] = useState(fieldsData);
//     const [addField, setAddField] = useState([...addFields]);



//     const addWorkField = () => {
//         setAddField(prevState => [...prevState, ...addFields]);
//     };

//     return (
//         <div >
//             <form className='siteform px-3'>
//                 <div className='d-flex flex-wrap'>
//                     {fields.map((field, index) => (
//                         <div className="col-lg-4 col-md-6 col-sm-12 input-field" key={index}>
//                             <div className="px-2 py-3">
//                                 <input type="text" className="form-control" placeholder={field.placeholder} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div >
//                     <h3 className='mx-2'>Add your work</h3>
//                     <div className='d-flex flex-wrap'>
//                         {addField.map((field, index) => (
//                             <div className="col-lg-4 col-md-6 col-sm-12 input-field" key={index}>
//                                 <div className="px-2 py-3">
//                                     <input type="text" value="" className="form-control" placeholder={field.placeholder} />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <button className='btn Btn shadow m-2 ' type='button' onClick={addWorkField}>
//                         <FontAwesomeIcon icon={faAdd} className='mx-1' />
//                         <span>
//                             Create work order
//                         </span>
//                     </button>
//                 </div>
//             </form>
//         </div >
//     )
// }


import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function SitesForm() {
  const fieldsData = [
    {
      name: "Site Name",
      placeholder: "Site Name",
    },
    {
      name: "Client Name",
      placeholder: "Client Name",
    },
    {
      name: "S.O.Number",
      placeholder: "S.O.Number",
    },
    {
      name: "State",
      placeholder: " State",
    },
    {
      name: "Site Description",
      placeholder: "Site Description",
    },
    {
      name: "Contact Person",
      placeholder: "Contact Person",
    },
    {
      name: " Contact Number",
      placeholder: "Contact Number",
    },
  ];
  
  const [fields, setFields] = useState(fieldsData);
 

  //Add  Work Order
  const [works, setWorks] = useState([
    { orderno: "", description: "", amount: "" },
  ]);

  const addWork = () => {
    setWorks([...works, { orderno: "", description: "", amount: "" }]);
  };

  const removeWork = (index) => {
    const updatedWorks = [...works];
    updatedWorks.splice(index, 1);
    setWorks(updatedWorks);
  };

  const handleWorkChange = (index, e) => {
    const { name, value } = e.target;
    const updatedWorks = [...works];
    updatedWorks[index] = { ...updatedWorks[index], [name]: value };
    setWorks(updatedWorks);
  };

  return (
    <div>
      <form className="siteform px-3">
        <div className="d-flex flex-wrap">
          {fields.map((field, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 input-field"
              key={index}
            >
              <div className="px-2 py-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder={field.placeholder}
                />
              </div>
            </div>
          ))}
        </div>
      </form>

      <div className="mb-5 siteform">
        <div className="p-4">
          <h4>
            <strong>Add your work</strong>
          </h4>
          <div className="mt-4">
            {works.map((work, index) => (
              <div key={index}>
                <div className="row mb-3">
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-3 ">
                    <input
                      type="text"
                      name="orderno"
                      value={work.orderno}
                      onChange={(e) => handleWorkChange(index, e)}
                      placeholder="Work Order No"
                      className="form-control border"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <input
                      type="text"
                      name="description"
                      value={work.description}
                      onChange={(e) => handleWorkChange(index, e)}
                      placeholder="Description or work Done"
                      className="form-control border"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <input
                      type="text"
                      name="amount"
                      value={work.amount}
                      onChange={(e) => handleWorkChange(index, e)}
                      placeholder="Amount"
                      className="form-control border"
                    />
                  </div>
                </div>
                {works.length > 1 && index >= works.length - 1 && (
                  <button
                    className="btn Btn shadow text-black mb-3"
                    onClick={() => removeWork(index)}
                  >
                    <small>Remove Work order</small>
                  </button>
                )}
              </div>
            ))}
          </div>
          <button className="btn Btn shadow text-black" onClick={addWork}>
            <small>+ Create work order</small>
          </button>
        </div>
      </div>
    </div>
  );
}