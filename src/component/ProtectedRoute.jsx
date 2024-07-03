import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Alert from "./Alert";


const ProtectedRoute = (props) => {
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
  <Navbar toggleMode={props.toggleMode} alert={props.alert} mode={props.mode}/>  
  <Outlet />
  </>
);
};

export default ProtectedRoute;
