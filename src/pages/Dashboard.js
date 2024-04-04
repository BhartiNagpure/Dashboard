import React from 'react';
import Sidebar from '../layouts/Sidebar'
import img from '../assests/images/2201_w039_n003_83b_p1_83.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faSun } from '@fortawesome/free-regular-svg-icons';
import { faAdd, faCircleCheck, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export default function Dashboard() {
  const data = [
    {
      list: 'The order was delivered ahead of schedule. '
    },
    {
      list: 'My first Mac lasted over nine years'
    },
    {
      list: 'you should leave the'
    }
  ]
  return (
    <div className='dash '>
      <div className=' p-3'>
        <div className='d-flex justify-content-between mt-5 py-4'>
          <button className='btn Btn shadow  '>
           <Link to='/sites' className='link'> <span> Sites</span></Link>
            <FontAwesomeIcon icon={faPlayCircle} className='mx-1' />
          </button>
          <div className='d-flex'>
            <button className='btn shadow mx-3'>
              <FontAwesomeIcon icon={faSun} className='mx-1' />
              <span >Documents setting</span>
            </button>
            <button className='btn  Btn shadow'>
              <FontAwesomeIcon icon={faAdd} className='mx-1' />
              <span>
                Create sites
              </span>
            </button>
          </div>
        </div>
        <div className='d-flex flex-wrap align-items-center justify-content-center'>
          <div className='col-lg-6 col-md-12 col-sm-12 bg-img'>
            <img src={img} alt='' className='img-fluid' />
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 p-4'>
            <div className=' py-1  px-2 '>
              <h3 >
                Purchase invoices made easy
              </h3>
              <p className='text-muted py-2 mb-0'>It performs exactly as expected. There are three of these in the family.</p>
            </div>
            {data.map((text, index) => (
              <div key={index} >
                <div className='d-flex align-items-center'>
                  <FontAwesomeIcon icon={faCircleCheck} className='px-2' />
                  <h6 className='m-0  p-2'>{text.list}</h6>
                </div>
              </div>
            ))}
            <button className='btn shadow Btn m-3'>
              <FontAwesomeIcon icon={faAdd} className='mx-1' />
              <span>
                Add your sites
              </span>
            </button>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faHeadset} className='px-2' />
              <h6 className='m-0  p-2'>Talk to specialist</h6>
            </div>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faYoutube} className='px-2' />
              <h6 className='m-0  p-2'>Watch a quick video here</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
