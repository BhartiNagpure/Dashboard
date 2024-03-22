import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faChartSimple, faFileContract, faCoins, faQuestion, faSailboat, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faFile,  } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const NavData = () => {
  const menuItems = [
    { head: 'Dashboard' },
    {
      label: 'Masters',
      // icon: faFile,
      subItems: [
        { label: 'Sites/Project master', link:'/sites', icon: faFile,  },
        { label: 'Contract/Tender master', link:'/contract', icon: faFileContract },
        { label: 'Financial' , link:'/financial',icon:faCoins },
        { label: "Non-Financial" , link:'/non-financial', icon:faQuestion},
        { label: 'Vendor master',link:'vendor', icon:faSailboat },
        { label: 'Client master', link:'/client', icon:faCoins },
        { label: 'Item master', link:'/item', icon:faIdCard },
        { label: 'Employee/Layout master', link:'/employee', icon:faSailboat },
      ],
    },
    {
      label: "Transactions",
      // icon: faDollar,
      subItems: [
        { label: "Sales",icon:faCoins },
        { label: "Purchase", icon:faCoins },
        { label: "Wages", icon:faCoins },
        { label: "EXP", icon:faCoins },
        { label: "Assests", icon:faCoins },
        { label: 'OTHNIC', icon:faCoins }
      ]
    },
    {
      label: 'Reports',
      // icon:faChartSimple
    },
  ];

  return (
    <div>
    {menuItems.map((menuItem, index) => (
        <div className='menu-item' key={index}>
          {/* Render head if present */}
          {menuItem.head && (
            <div>
              <h6 className='sidebar-heading d-flex justify-content-between align-items-center px-2 mb-1 text-muted' style={{fontSize:'13.8px'}}>{menuItem.head}</h6>
            </div>
          )}
      
          {/* Render label and icon */}
          {menuItem.label && (
            <div className='d-flex align-items-center menu px-2 mt-3'>
              <FontAwesomeIcon icon={menuItem.icon} className='sidebar-icon px-2'/>
              <span className='menu-label fs-16 text-muted'style={{fontSize:'9.5px', textTransform:'uppercase',fontWeight:'700'}} >{menuItem.label}</span>
            </div>
          )}
      
          {/* Render subItems if present */}
          {menuItem.subItems && (
            <div className=' pt-2'>
              <ul className='flex-column p-2'>
                {/* Map over subItems */}
                {menuItem.subItems.map((subItem, subIndex) => (
                 <Link to={subItem.link} className="link d-flex"> 
                 <FontAwesomeIcon icon={subItem.icon} className='sidebar-icon' style={{marginTop:'6px', width:'13.8px'}}/>
                 <li className='dropdown-item px-2 py-1 text-start' key={subIndex} style={{fontSize:'13.8px'}}>
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
