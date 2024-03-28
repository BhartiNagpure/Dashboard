import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTimes, faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import NavData from './LayoutsMenu';


export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div>
        <button
        className="navbar-toggler"
        type="button"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <FontAwesomeIcon icon={faTimes} className='text-muted' />
        ) : (
          <FontAwesomeIcon icon={faAlignLeft} className='text-muted' />
        )}
      </button>

      <div className={`sidebar-container  p-4  ${isSidebarOpen ? 'isSidebar' : ''}`}>
        {/* <div className='text-center'>
          <img src="https://raksoftech.com/img/demos/it-services/logo.png" alt='' className='w-50 ' />
        </div> */}
        <NavData/>
        </div>
    </div>

  )
}

