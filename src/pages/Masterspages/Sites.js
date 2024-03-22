import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

export default function Sites() {
  const fieldsData = [
    {
      name: 'Site Name',
      placeholder: 'Site Name',
    },
    {
      name: 'Client Name',
      placeholder: 'Client Name',
    },
    {
      name: 'S.O.Number',
      placeholder: 'S.O.Number',
    },
    {
      name: 'State',
      placeholder: ' State',
    },
    {
      name: 'Site Description',
      placeholder: 'Site Description',
    },
    {
      name: 'Contact Person',
      placeholder: 'Contact Person',
    },
    {
      name: ' Contact Number',
      placeholder: 'Contact Number',
    },
  ]
  const addFields = [
    {
      name: 'Work Order No',
      placeholder: 'Work Order No',
    },
    {
      name: 'Description Or work Done',
      placeholder: 'Description Or work Done',
    },
    {
      name: 'Amount',
      placeholder: 'Amount',
    },
  ]
  const [fields, setFields] = useState(fieldsData);
  const [addField, setAddField] = useState([]);

  useEffect(() => {
    const storedFields = localStorage.getItem('addField');
    if (storedFields) {
      setAddField(JSON.parse(storedFields));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('addField', JSON.stringify(addField));
  }, [addField]);

  useEffect(() => {
    localStorage.setItem('fields', JSON.stringify(fields));
  }, [fields]);
  
  const addWorkField = () => {
    setAddField(prevState => [...prevState, {
      name: 'Work Order No',
      placeholder: 'Work Order No',
    },
    {
      name: 'Description Or work Done',
      placeholder: 'Description Or work Done',
    },
    {
      name: 'Amount',
      placeholder: 'Amount',
    }]);
  };

  return (
    <div className='mt-5 py-5 px-3'>
      <form className='siteform p-3'>
        <div className='d-flex flex-wrap'>
          {fields.map((field, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 input-field" key={index}>
              <div className="px-2 py-3">
                <input type="text" className="form-control" placeholder={field.placeholder} />
              </div>
            </div>
          ))}
        </div>
        <div className='mt-2'>
          <h3 className='mx-2'>Add your work</h3>
          <div className='d-flex flex-wrap'>
          {addFields.map((field, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 input-field" key={index}>
              <div className="px-2 py-3">
                <input type="text" className="form-control" placeholder={field.placeholder} />
              </div>
            </div>
          ))}
        </div>
          <button className='btn Btn m-2 ' onClick={addWorkField}>
            <FontAwesomeIcon icon={faAdd} className='mx-1' />
            <span>
              Create work order
            </span>
          </button>
          </div>
      </form>
    </div >
  )
}


