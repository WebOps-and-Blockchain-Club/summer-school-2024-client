import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";


const ProtectedRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [location.pathname]);

  return (
    <>    
  <Outlet />
  </>
);
};

export default ProtectedRoute;
