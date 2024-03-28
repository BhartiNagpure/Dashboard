import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faChartSimple, faFileContract, faCoins, faQuestion, faSailboat, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const NavData = () => {
  const [activeItem, setActiveItem] = useState({ main: null, sub: null }); // State to track active item

  const menuItems = [
    { head: 'Dashboard' },
    {
      label: 'Masters',
      subItems: [
        { label: 'Sites/Project master', link:'/sites', icon: faFile },
        { label: 'Contract/Tender master', link:'/contract', icon: faFileContract },
        { label: 'Financial' , link:'/financial',icon:faCoins },
        { label: "Non-Financial" , link:'/non-financial', icon:faQuestion},
        { label: 'Vendor master',link:'vendor', icon:faSailboat },
        // { label: 'Client master', link:'/client', icon:faCoins },
        { label: 'Item master', link:'/item', icon:faIdCard },
        { label: 'Employee/Layout master', link:'/employee', icon:faSailboat },
       
      ],
    },
    {
      label: "Transactions",
      subItems: [
        { label: "Sales", icon: faCoins, link:'/sales' },
        { label: "Purchase", icon: faCoins, link:'/purchase' },
        { label: "Wages", icon: faCoins, link:'/wages' },
        { label: "EXP", icon: faCoins },
        { label: "Assests", icon: faCoins },
        { label: 'OTHNIC', icon: faCoins },
      ]
    },
    {
      label: 'Reports',
      // icon:faChartSimple
    },
  ];

  const handleItemClick = (mainIndex, subIndex) => {
    setActiveItem({ main: mainIndex, sub: subIndex });
  };

  return (
    <div>
      {menuItems.map((menuItem, mainIndex) => (
        <div className='menu-item' key={mainIndex}>
          {menuItem.head && (
            <div>
              <h6 className='sidebar-heading d-flex justify-content-between align-items-center px-2 mb-1 text-muted' style={{fontSize:'13.8px'}}>{menuItem.head}</h6>
            </div>
          )}

          {menuItem.label && (
            <div className={`d-flex align-items-center menu px-2 mt-3`}>
              <FontAwesomeIcon icon={menuItem.icon} className='sidebar-icon px-2'/>
              <span className='menu-label fs-16 text-muted' style={{fontSize:'9.5px', textTransform:'uppercase',fontWeight:'700'}}>{menuItem.label}</span>
            </div>
          )}

          {menuItem.subItems && (
            <div className='pt-2'>
              <ul className='flex-column p-2'>
                {menuItem.subItems.map((subItem, subIndex) => (
                  <Link to={subItem.link} className={`link d-flex ${activeItem.main === mainIndex && activeItem.sub === subIndex ? 'active' : ''}`} key={subIndex} onClick={() => handleItemClick(mainIndex, subIndex)}>
                    <FontAwesomeIcon icon={subItem.icon} className='sidebar-icon' style={{marginTop:'6px', width:'13.8px'}}/>
                    <li className='dropdown-item px-2 py-1 text-start' style={{fontSize:'13.8px'}}>
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
