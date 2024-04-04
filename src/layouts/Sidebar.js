import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTimes, faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import NavData from './LayoutsMenu';



export default function Sidebar() {

  return (
    <div>
       

      <div className={`sidebar-container ps-4 py-4  `}>
        <NavData/>
        </div>
    </div>

  )
}

