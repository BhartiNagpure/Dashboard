import React, { useState, useEffect, useRef } from "react";
import "../../assests/css/contractTmas.css";
import Button from "react-bootstrap/Button";
import { Table, Form, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import EmployeeHistory from "./EmployeeHistory";


const EmployeeForm = () => {
    const navigate = useNavigate()
    const employeeForm = [
        {
            name: 'Staff ID',
            placeholder: 'Staff ID',
            type: 'text'
        },
        {
            name: 'Name',
            placeholder: ' Name',
            type: 'text'
        },
        {
            name: 'Email ID',
            placeholder: 'Email ID',
            type: 'email'
        },
        {
            name: 'Date of Birth',
            placeholder: 'Date of Birth',
            type: 'text'
        },
        {
            name: 'AADHAR',
            placeholder: 'AADHAR',
            type: 'text'
        },
        {
            name: 'Bank Account',
            placeholder: 'Bank Account',
            type: 'number'
        },
        {
            name: 'IFSC',
            placeholder: 'IFSC',
            type: 'text'
        },
        {
            name: 'PAN',
            placeholder: 'PAN ',
            type: 'number'
        },
        {
            name: 'PF No',
            placeholder: 'PF No',
            type: 'text'
        },
        {
            name: 'ESIC',
            placeholder: 'ESIC',
            type: 'text'
        },
        {
            name: 'Nominee',
            placeholder: 'Nominee',
            type: 'text'
        },
        {
            name: 'Relation with Nominee',
            placeholder: 'Relation with Nominee',
            type: 'text'
        },
        {
            name: 'Mobile No',
            placeholder: 'Mobile No',
            type: 'number'
        },
        {
            name: 'Whatsapp No',
            placeholder: 'Whatsapp No',
            type: 'number',
            note: 'Please note that all data should be sent to this number only!'
        },
        {
            name: 'Alternate No',
            placeholder: 'Alternate No',
            type: 'number',
            note: 'Please note that for alternate numbers, please add them separated by commas!'
        },
        {
            name: 'Family particular',
            placeholder: 'Family particular',
            type: 'text'
        },
        {
            name: 'Address',
            placeholder: 'Address',
            type: 'textarea'
        }
    ]

    // const rowsData = [
    //     { srNo: 1, doc: "Adhar" },
    //     { srNo: 2, doc: "PAN" },
    //     { srNo: 3, doc: "Bank Account" },
    // ];

    const IncomeForm = [
        {
            name: ' Income ID',
            placeholder: 'Income ID',
            options: ["Income ID", "Basic", "HRA", "Travelling Allowness", "special", "Site DA", "Hardship"]
        },
        {
            name: 'Income Name',
            placeholder: 'Income Name',
        },
        {
            name: 'Income Amount',
            placeholder: 'Income Amount',
        },

    ]

    const DeductionForm = [
        {
            name: ' Deduction ID',
            placeholder: 'Deduction ID',
            options: ["Deduction ID", "ESIC", "PF", "Other", "Advance"]
        },
        {
            name: 'Deduction Name',
            placeholder: 'Deduction Name',
        },
        {
            name: 'Deduction Amount',
            placeholder: 'DeductionAmount',
        },
       
    ]
    const [IncomeField, setAddIncomeField] = useState([...IncomeForm]);
    const [deductionField, setDeductionField] = useState([...DeductionForm]);
    const [incomeHistory, setIncomeHistory] = useState([]);


    // const addIncomeField = () => {
    //     const currentTime = new Date().toLocaleString();
    //     const newIncomeField = [...IncomeForm];
    //     setAddIncomeField(newIncomeField);
    //     setIncomeHistory([...incomeHistory, { fields: newIncomeField, time: currentTime }]);
    // };

    const addIncomeField = () => {
        const currentTime = new Date().toLocaleString();
        const newIncomeField = [...IncomeForm];
        setAddIncomeField(newIncomeField);
        setIncomeHistory([...incomeHistory, { fields: newIncomeField, time: currentTime }]);
        
        // Update salaryData with the entered income data
        const newIncomeData = {
            incomeID: '', // You should set the value based on the entered ID
            incomeName: '', // You should set the value based on the entered name
            incomeAmount: '', // You should set the value based on the entered amount
            dateTime: currentTime
        };
        setSalaryData(prevState => [...prevState, newIncomeData]);
    };
        const handleMonthlyFormChange = (e, index) => {
        const { value } = e.target;
        const newData = [...monthlyFormData];
        newData[index] = value;
        setMonthlyFormData(newData);
    };

    const addDeductionField = () => {
        setDeductionField(prevState => [...prevState, ...DeductionForm])
    }

    const [salaryType, setSalaryType] = useState('');
    const [monthlyFormData, setMonthlyFormData] = useState([]);
    const [deductionFormData, setDeductionFormData] = useState([]);
    const [salaryData, setSalaryData] = useState([]);
    const [deductionData, setDeductionData] = useState([]);
    const [showRemoveButton, setShowRemoveButton] = useState(false);

    const addIncomeFields = () => {
        const newIncomeField = [...IncomeField, ...IncomeForm];
        setAddIncomeField(newIncomeField);
        setShowRemoveButton(true);
    };
    const handleRemove = () => {
        const remainingFieldsCount = IncomeField.length - IncomeForm.length;
        if (remainingFieldsCount > 0) {
            setAddIncomeField(prevState => {
                const updatedFields = prevState.slice(0, -IncomeForm.length);
                return updatedFields;
            });
        }
        if (remainingFieldsCount === 0) {
            setShowRemoveButton(false);
        }

    };


    const handleSalaryChange = (event) => {
        setSalaryType(event.target.value);
    };

    const getCurrentDateTime = () => {
        const now = new Date();
        return now.toLocaleString();
    };
    const handleSalaryAdd = () => {
        const newData = { data: [...monthlyFormData], dateTime: getCurrentDateTime() };
        setSalaryData([...salaryData, newData]);
        setMonthlyFormData([]); // Clear the form fields after adding the data
    };
    
    const [rowsData, setRowsData] = useState([
        { srNo: 1, doc: 'Adhar', attachments: [] },
        { srNo: 2, doc: 'Pan', attachments: [] },
        { srNo: 3, doc: 'Passbook', attachments: [] }
    ]);
    const [showInput, setShowInput] = useState(-1);
    const inputRef = useRef(null);
    // Function to handle adding a new row
    const addRow = () => {
        const newRow = { srNo: rowsData.length + 1, doc: '', attachments: [] };
        setRowsData([...rowsData, newRow]);
        setShowInput(rowsData.length)
    };

    // Function to handle updating document name
    const handleDocumentNameChange = (index, value) => {
        const updatedRowsData = [...rowsData];
        updatedRowsData[index].doc = value;
        setRowsData(updatedRowsData);
    };

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedDocument, setSelectedDocument] = useState([])
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    const handleDocumentChange = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedDocument(prevSelectedDocument => {
                const newSelectedDocument = [...prevSelectedDocument];
                newSelectedDocument[index] = file;
                return newSelectedDocument;
            });

        }
    };

    // Function to handle file upload for attachments
    const handleFileUpload = (index, type, event) => {
        const file = event.target.files[0];
        const updatedRowsData = [...rowsData];
        const attachments = type === 'Adhar' ? [file] : [...updatedRowsData[index].attachments, file];
        updatedRowsData[index].attachments = attachments;
        setRowsData(updatedRowsData);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setShowInput(null); // Hide the input field when clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const allIncomeFieldsEntered = monthlyFormData.length === IncomeField.length;
    return (
        <>
            <section className="VendorM-manu d-flex flex-column align-items-end  justify-content-end">
                {/* <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} /> */}
                <div className="col-2 border profile mb-3 mx-3 ">
                    {selectedFile ? (
                        <img src={URL.createObjectURL(selectedFile)} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <>
                            <label htmlFor='file-input' className="profilediv align-items-center d-flex justify-content-center flex-column">
                                <FontAwesomeIcon icon={faUpload} className='me-2' />
                                <h5>Upload Profile</h5>
                            </label>
                            <input id='file-input' type='file' style={{ display: 'none' }} onChange={handleFileChange} />
                        </>
                    )}
                </div>
                <div className="container ">
                    <div className="siteform">
                        <div className="mb-3">
                            <Form>
                                <Row className="mb-3">
                                    {employeeForm.map((field, index) => (
                                        <Form.Group as={Col} lg={4} md={6} sm={12} controlId={field.name.toLowerCase().replace(/\s/g, '')} className="mb-3" key={index}>
                                            {field.name === 'Address' ? (
                                                <Form.Control as="textarea" placeholder={field.placeholder} className="border-0" />
                                            ) : (
                                                <>
                                                    <Form.Control type={field.type} placeholder={field.placeholder} className="border-0" />
                                                    {field.note && <p className=" fs-sm text-muted">{field.note}</p>}
                                                </>
                                            )}
                                        </Form.Group>
                                    ))}
                                </Row>
                                <div className="col-lg-7 col-md-12 col-sm-12">
                                    <h5>No of Original Docs </h5>
                                    <Table striped bordered hover >
                                        <thead>
                                            <tr>
                                                <th>Sr. No.</th>
                                                <th>Type</th>
                                                <th>Attachments</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rowsData.map((row, index) => (
                                                <tr key={index}>
                                                    <td>{row.srNo}</td>
                                                    <td>
                                                        <Form.Group as={Col} lg={10} controlId={`itemtype_${row.srNo}`} className="d-flex justify-content-center align-items-center">
                                                            {showInput === index ? (
                                                                <Form.Group as={Col} lg={10} controlId={`itemtype_${row.srNo}`} className="d-flex justify-content-center align-items-center">
                                                                    <Form.Control
                                                                        type="text"
                                                                        placeholder="Type"
                                                                        value={row.doc}
                                                                        onChange={(e) => handleDocumentNameChange(index, e.target.value)}
                                                                        ref={inputRef}
                                                                    />
                                                                </Form.Group>
                                                            ) : (
                                                                <Form.Label className={row.doc === 'Adhar' ? 'required' : ''}>
                                                                    {row.doc} {row.doc === 'Adhar' ? '*' : ''}
                                                                </Form.Label>
                                                            )}
                                                        </Form.Group>
                                                    </td>
                                                    <td className="d-flex">
                                                        {row.doc === 'Adhar' ? (

                                                            <>
                                                                {selectedDocument && selectedDocument[index] ? (
                                                                    <p>{selectedDocument[index].name}</p>
                                                                ) : (
                                                                    <button className="btn border mx-2" type="button">
                                                                        <label htmlFor={`file-input-${index}-fp`}>
                                                                            + FP (jpg, png)
                                                                        </label>
                                                                        <input id={`file-input-${index}-fp`} type="file" accept=".jpg, .png" style={{ display: 'none' }} onChange={(e) => handleDocumentChange(index, e)} />
                                                                    </button>
                                                                )}
                                                                {selectedDocument && selectedDocument[index] ? (
                                                                    <p>{selectedDocument[index].name}</p>
                                                                ) : (
                                                                    <button className="btn border" type="button">
                                                                        <label htmlFor={`file-input-${index}-bp`}>
                                                                            + BP (jpg, png)
                                                                        </label>
                                                                        <input id={`file-input-${index}-bp`} type="file" accept=".jpg, .png" style={{ display: 'none' }} onChange={(e) => handleDocumentChange(index, e)} />
                                                                    </button>
                                                                )}

                                                            </>

                                                        ) : (
                                                            selectedDocument && selectedDocument[index] ? (
                                                                <p>{selectedDocument[index].name}</p>
                                                            ) : (
                                                                <button className="btn border mx-2" type="button">
                                                                    <label htmlFor={`file-input-${index}-fp`}>
                                                                        + Front Page (jpg, png)
                                                                    </label>
                                                                    <input id={`file-input-${index}-fp`} type="file" accept=".jpg, .png" style={{ display: 'none' }} onChange={(e) => handleDocumentChange(index, e)} />
                                                                </button>
                                                            )
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                            <button className='btn border my-2' type='button' onClick={addRow}>
                                                + Add
                                            </button>
                                        </tbody>
                                    </Table>
                                    <div className="d-flex siteform">
                                        <Form.Group as={Col} lg={6} md={6} sm={12} >
                                            <Form.Select value={salaryType} onChange={handleSalaryChange} defaultValue="Choose..." placeholder="Salary">
                                                <option>Daily</option>
                                                <option>Monthly</option>
                                                <option>Hourly</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} lg={6} md={6} sm={12} className="px-3" >
                                            <Form.Select defaultValue="Choose..." placeholder="Rate" >
                                                <option>/Hour</option>
                                                <option>/Day</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-5">
                                        <h6>If Monthly,</h6>
                                        <div className="d-flex row">
                                            {IncomeField.map((field, index) => (
                                                <React.Fragment key={index}>
                                                    <Form.Group as={Col} lg={4} md={6} sm={12} className="mb-3">
                                                        {field.options && field.options.length > 0 ? (
                                                            <Form.Select defaultValue="Choose..." value={monthlyFormData[index] || ''}
                                                                onChange={(e) => handleMonthlyFormChange(e, index)} placeholder={field.placeholder}>
                                                                {field.options.map((option, idx) => (
                                                                    <option key={idx}>{option}</option>
                                                                ))}
                                                            </Form.Select>
                                                        ) : (
                                                            <Form.Control type="text" placeholder={field.placeholder} value={monthlyFormData[index] || ''} controlId={field.name.toLowerCase().replace(/\s/g, "")}
                                                                onChange={(e) => handleMonthlyFormChange(e, index)} className="" />
                                                        )}
                                                    </Form.Group>
                                                </React.Fragment>
                                            ))}
                                            <div className="d-flex col-3">
                                                <button className='btn border my-2 col-2' type='button' onClick={addIncomeFields}>
                                                    +
                                                </button>
                                                {showRemoveButton && (
                                                    <button className='btn border my-2 col-2' type='button' onClick={() => handleRemove(IncomeField.length - IncomeForm.length )}>
                                                        -
                                                    </button>
                                                )}
                                                <button className='btn border m-2' type='button' onClick={handleSalaryAdd} disabled={!allIncomeFieldsEntered}>
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <h6>No of deduction components</h6>
                                        <div className="d-flex row ">{deductionField.map((field, index) => (
                                            <Form.Group as={Col} lg={4} md={6} sm={12} className="mb-3" key={index}>
                                                {field.options && field.options.length > 0 ? (
                                                    <Form.Select defaultValue="Choose..." placeholder={field.placeholder}>
                                                        {field.options.map((option, idx) => (
                                                            <option key={idx}>{option}</option>
                                                        ))}
                                                    </Form.Select>
                                                ) : (
                                                    <Form.Control type="text" placeholder={field.placeholder} className="" />
                                                )}
                                            </Form.Group>
                                        ))}</div>
                                        <button className='btn border  mb-3' type='button' onClick={addDeductionField}>
                                            + Add
                                        </button>
                                    </div>
                                    <div className="col-lg-4 col-sm-12 col-md-6">
                                        <Form.Control type="text" placeholder="Net salary/month" className="" />
                                    </div>
                                </div>
                                <div className="my-3">
                                    <button className='btn Btn my-2 '>
                                        <span>Submit</span>
                                    </button>
                                </div>

                            </Form>

                        </div>
                    </div>
                </div >
            </section >
            <div className="px-3">  <EmployeeHistory
                salaryData={salaryData}
                deductionData={deductionData} /></div>
        </>
    );
};

export default EmployeeForm;
