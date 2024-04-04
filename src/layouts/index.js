import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar'

export default function Layouts(props) {
    return (
        <div>
            <Header />
            <div className="d-flex position-fixed top-0 start-0 w-100 ">
                <div className="col-lg-2  main-sidebar">
                    <Sidebar />
                </div>
                <div className="col-lg-10 col-md-12 col-sm-12">
                    <div className="main-content overflow-auto" style={{ maxHeight: 'calc(100vh - 56px)' }}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
