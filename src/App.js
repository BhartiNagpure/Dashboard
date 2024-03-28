import Sidebar from "./layouts/Sidebar";
import './assests/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sites from "./pages/Masterspages/Sites";
import Vendor from "./pages/Masterspages/Vendor";
import Client from "./pages/Masterspages/Client";
import Item from "./pages/Masterspages/Item";
import Employee from "./pages/Masterspages/Employee";
import NotFoundPage from "./pages/NotFoundPage";
import ContractTenderMaster from "./pages/Masterspages/ContractTenderMaster";
import Register from "./pages/authentication/Register";
import Sales from "./pages/Transactions/Sales";
import Purchase from "./pages/Transactions/Purchase";
import Wages from "./pages/Transactions/Wages";

function App() {
  return (
    <div>
    <Router>
      <Header />
      <div className="d-flex position-fixed top-0 start-0 w-100">
        <div className="col-lg-2 col-md-3 col-sm-12">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9 col-sm-12">
          <div className="main-content overflow-auto" style={{ maxHeight: 'calc(100vh - 56px)' }}>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/sites" element={<Sites />} />
              <Route path="/vendor" element={<Vendor />} />
              <Route path="/client" element={<Client />} />
              <Route path="/item" element={<Item />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/contract" element={<ContractTenderMaster />} />
              <Route path='/register' element={<Register/>}/>
              <Route path="/sales" element={<Sales />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/wages" element={<Wages />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  </div>
  );
}

export default App;
