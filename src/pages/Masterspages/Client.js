import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ClientForm from '../../components/masterComponents/ClientForm';
export default function Client() {

    const [openForm, setOpenForm] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState([]);

    const openFormFun = (() => {
        setOpenForm(true)

    })

    const handleBreadcrumbClick = (index) => {
        setBreadcrumb(prevBreadcrumb => prevBreadcrumb.slice(0, index + 1));
        if (index === breadcrumb.length - 1) {
            setOpenForm(!openForm);
        }
    };

    return (
        <div className='d-flex flex-wrap flex-column justify-content-end mt-5 py-4 px-3'>
            {/* <div className='col-12 mb-3'>
                {breadcrumb.map((item, index) => (
                    <span key={index}>
                        {index !== 0 && <span className="mx-1"> / </span>}
                        <span onClick={() => handleBreadcrumbClick(index)}>{item.label}</span>
                    </span>
                ))}
            </div> */}
            <div className='d-flex '>
               <div className='p-2'>
               <label className='btn Btn' htmlFor='file-input' >
                    <FontAwesomeIcon icon={faAdd} className='me-2' />
                    Upload Excel
               </label>
               <input id='file-input' type='file' style={{display:'none'}}/>
               </div>
               <div className='p-2'>
               <button className='btn Btn' type='' onClick={openFormFun}>
                    <FontAwesomeIcon icon={faAdd} className='me-2' />
                    Enter Manually
                </button>
               </div>

            </div>
            {openForm && (
                <>
                    <ClientForm />
                </>
            )}
        </div>
    );
};
