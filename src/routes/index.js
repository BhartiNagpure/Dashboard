import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import AuthProtected from './AuthProtected'; // Assuming you have an AuthProtected component
import Header from '../layouts/Header' // Assuming you have a Header component
import Sidebar from '../layouts/Sidebar'; // Assuming you have a Sidebar component
import { publicRoutes, authProtectedRoutes } from './AllRoutes'; // Assuming you have defined your routes in separate files

const AppRouter = () => {
  return (
    <Routes>
      <Route>
        {publicRoutes.map((route, idx) => (
            <Route
            key={idx}
            path={route.path}
            element={route.component}
            exact={true}
          />
        ))}
      </Route>

      <Route>
        {authProtectedRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <AuthProtected>
                {/* <Header />
                <div className="d-flex position-fixed top-0 start-0 w-100 ">
                  <div className="col-lg-2 main-sidebar">
                    <Sidebar />
                  </div> */}
                  <div className="col-lg-10 col-md-12 col-sm-12">
                    <div className="main-content overflow-auto" style={{ maxHeight: 'calc(100vh - 56px)' }}>
                    {console.log("route",route.component)}
                      {route.component}
                    </div>
                  </div>
                {/* </div> */}
              </AuthProtected>
            }
            exact={true}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
