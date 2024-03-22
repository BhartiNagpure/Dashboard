import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faDollar, faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavData = () => {
  const menuItems = [
    { head: 'Dashboard' },
    {
      label: 'Masters',
      icon: faFile,
      subItems: [
        { label: 'Sites/Project master', link:'/sites' },
        { label: 'Contract/Tender master', link:'/contract' },
        { label: 'Financial' , link:'/financial' },
        { label: "Non-Financial" , link:'/non-financial'},
        { label: 'Vendor master',link:'vendor' },
        { label: 'Client master', link:'/client' },
        { label: 'Item master', link:'/item' },
        { label: 'Employee/Layout master', link:'/employee' },
      ],
    },
    {
      label: "Transactions",
      icon: faDollar,
      subItems: [
        { label: "Sales" },
        { label: "Purchase" },
        { label: "Wages" },
        { label: "EXP" },
        { label: "Assests" },
        { label: 'OTHNIC' }
      ]
    },
    {
      label: 'Reports',
      icon:faChartSimple
    },
  ];

  return (
    <div>
    {menuItems.map((menuItem, index) => (
        <div className='menu-item' key={index}>
          {/* Render head if present */}
          {menuItem.head && (
            <div>
              <h6 className='sidebar-heading d-flex justify-content-between align-items-center px-3 mb-1 text-muted'>{menuItem.head}</h6>
            </div>
          )}
      
          {/* Render label and icon */}
          {menuItem.label && (
            <div className='d-flex align-items-center menu px-2 mt-3 p-2'>
              <FontAwesomeIcon icon={menuItem.icon} className='sidebar-icon px-2' />
              <span className='menu-label fs-16 '>{menuItem.label}</span>
            </div>
          )}
      
          {/* Render subItems if present */}
          {menuItem.subItems && (
            <div className=' pt-2'>
              <ul className='flex-column'>
                {/* Map over subItems */}
                {menuItem.subItems.map((subItem, subIndex) => (
                 <Link to={subItem.link} className="link"> 
                 <li className='dropdown-item px-2 py-1 text-start' key={subIndex}>
                 {subItem.label}
               </li>
               </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
</div>      
  );
};

export default NavData;
