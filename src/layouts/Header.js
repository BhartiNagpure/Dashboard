import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faSearch, faShoppingBag, faThLarge, faExpand, faGrip, } from "@fortawesome/free-solid-svg-icons";
import { faBell, faSun } from '@fortawesome/free-regular-svg-icons';
import logo from '../assests/images/Contractcube.png'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
export default function Header({ sidebarIcon }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };


    return (
        <div className='header d-flex px-5 py-2 w-100 justify-content-between position-fixed align-items-center  bg-white z-1 '>
            <div className='col-2 ' >
                {/* <FontAwesomeIcon icon={faAlignLeft} onClick={sidebarIcon}/> */}
                   <Link to="/" className='link'>
                   <div className='col-7'>
                   <img src={logo} alt='' className='img-fluid'/>
                   </div>
                   </Link>
                
            </div>
            <div className="position-relative search rounded-pill form-control form-control-sm d-flex align-items-center p-1">
                <FontAwesomeIcon icon={faSearch} className="headerIcon px-2 col-1" />
                <input
                    placeholder="Search..."
                    type="search"
                    className="search-input col-10 "
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </div>
            <div className='headericonDiv d-flex align-items-center justify-content-center '>
            <Form.Group as={Col} lg={6} controlId="itemtype " >
                  <Form.Select defaultValue="Choose..." className=' form-control-sm rounded-pill py-1 '>
                    <option>Sites</option>
                    <option>Sites 1</option>
                    <option>Site 2</option>
                  </Form.Select>
                </Form.Group>
                <div className='px-2 btn header-btn'>
                    <FontAwesomeIcon icon={faSun} className='headerIcon fs-5' />
                </div>
                <div className='px-2 btn header-btn'>
                    {/* <div className='bagCount bellCount'>3</div> */}
                    <FontAwesomeIcon icon={faBell} className='headerIcon fs-5' />
                </div>
                <div className='px-2   btn header-btn'>
                    <FontAwesomeIcon icon={faGrip} className='headerIcon fs-5' />
                </div>
                <div >
                    <img className="rounded-circle header-profile-user img-fluid" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" />
                </div>

            </div>
        </div>
    )
}
{/* <div class="position-relative  search rounded-pill form-control form-control-sm ">
    <FontAwesomeIcon icon={faSearch} className='headerIcon px-2 ' />
    <input placeholder="Search..." type="search" class="search-input" value="" />
</div> */}