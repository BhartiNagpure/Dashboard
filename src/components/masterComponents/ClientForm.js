import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export default function ClientForm() {
    const clientForm = [
        {
            name: 'Client ID',
            placeholder: 'Client ID',
        },
        {
            name: 'Client Name',
            placeholder: 'Client Name',
        },
        {
            name: 'PAN Number',
            placeholder: 'PAN Number',
        },
        {
            name: 'No of GSTIN',
            placeholder: ' No of GSTIN (1/2)',
        },
        {
            name: ' GSTIN',
            placeholder: '1. GSTIN',
        },
        {
            name: ' GSTIN',
            placeholder: '2. GSTIN',
        },
        {
            name: ' Contact Person',
            placeholder: 'Contact Person',
        },
        {
            name: ' Contact Number',
            placeholder: 'Contact Number',
        },
        {
            name: 'Email ID',
            placeholder: 'Email ID'
        },
        {
            name: 'Address',
            placeholder: 'Address'
        }
    ]
    
const navigate = useNavigate()
  return (
    <div>
         <FontAwesomeIcon icon={faArrowLeft}  onClick={() => navigate(-1)} />
      <form className='siteform p-3'>
                    <div className='d-flex flex-wrap'>
                        {clientForm.map((field, index) => (
                            <div className="col-md-6 col-sm-12 col-lg-4 input-field" key={index}>
                                <div className="px-2 py-3">
                                    <input type="text" className="form-control" placeholder={field.placeholder} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='btn shadow Btn m-2 '>
                        <span>Submit</span>
                    </button>
                </form>
    </div>
  )
}
