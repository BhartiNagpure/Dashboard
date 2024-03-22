import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import VendorManual from '../../components/masterComponents/VendorManual';

export default function Vendor() {
    const [openForm, setOpenForm] = useState(false);


    const openFormFun = (() => {
        setOpenForm(!openForm)

    })
    return (
        <div className='d-flex flex-wrap mt-5 py-5 px-3 justify-content-end'>
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
            {
                openForm && (
                    <>
                        <VendorManual />
                    </>
                )
            }
        </div>
    )
}
