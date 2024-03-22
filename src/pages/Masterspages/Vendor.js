import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import VendorManual from '../../components/masterComponents/VendorManual';

export default function Vendor() {
    const [openForm, setOpenForm] = useState(false);


    const openFormFun = (() => {
        setOpenForm(true)

    })
    return (
        <div className='d-flex flex-wrap mt-5 py-5 px-3'>
            {!openForm && (
                <>
                    <div className='col-6 p-2'>
                        <div className='masterdiv  '>
                            <div className='text-center col-5'>
                                <FontAwesomeIcon icon={faAdd} />
                                <h3>Upload Excel (Template)</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 p-2'>
                        <div className='masterdiv'>
                            <div className='text-center col-5' onClick={openFormFun}>
                                <FontAwesomeIcon icon={faAdd} />
                                <h3>Enter Manually</h3>
                            </div>
                        </div>
                    </div></>
            )}
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
