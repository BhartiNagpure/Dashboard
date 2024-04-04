import { faAdd, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import NewItemManual from '../../components/masterComponents/NewItemManual';
export default function Item() {
    const [openForm, setOpenForm] = useState(false);


    const openFormFun = (() => {
        setOpenForm(!openForm)

    })
    const tableData = [
        { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
        { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
        { id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter' }
    ];
    return (
        <div className='d-flex flex-column flex-wrap mt-5 py-5 px-3 '>
        {openForm && (
          <div className='p-2 d-flex align-items-center'>
                    <button className='btn' type='button' onClick={openFormFun}>
                        <FontAwesomeIcon icon={faArrowLeft} className='me-2' />
                    </button>
                </div>
            )}
            {!openForm && (
                <div className='d-flex justify-content-end'>
                    <div className='p-2'>
                        <label className='btn Btn shadow' htmlFor='file-input'>
                            <FontAwesomeIcon icon={faAdd} className='me-2' />
                            Upload Excel
                        </label>
                        <input id='file-input' type='file' style={{ display: 'none' }} />
                    </div>
                    <div className='p-2'>
                        <button className='btn Btn shadow' type='button' onClick={openFormFun}>
                            <FontAwesomeIcon icon={faAdd} className='me-2' />
                            Enter Manually
                        </button>
                    </div>
                </div>
            )}
                {!openForm && (
          <div className='px-2 mt-2'>
            <table className="table border table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    {Object.values(item).map((value, idx) => (
                      <td key={idx}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
            {openForm && ( <NewItemManual/>  )}
        </div>
    )
}
