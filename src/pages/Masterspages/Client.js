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
            setOpenForm(true);
        }
    };

    return (
        <div className='d-flex flex-wrap mt-5 py-4 px-3'>
            <div className='col-12 mb-3'>
                {breadcrumb.map((item, index) => (
                    <span key={index}>
                        {index !== 0 && <span className="mx-1"> / </span>}
                        <span onClick={() => handleBreadcrumbClick(index)}>{item.label}</span>
                    </span>
                ))}
            </div>
            {!openForm && (
                <>
                    <div className='col-lg-6 col-sm-12 col-md-6 p-2 master'>
                        <div className='masterdiv'>
                            <div className='text-center col-5'>
                                <FontAwesomeIcon icon={faAdd} />
                                <h3>Upload Excel (Template)</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-6 p-2 master'>
                        <div className='masterdiv'>
                            <div className='text-center col-5' onClick={openFormFun}>
                                <FontAwesomeIcon icon={faAdd} />
                                <h3>Enter Manually</h3>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {openForm && (
                <>
                    <ClientForm />
                </>
            )}
        </div>
    );
};
