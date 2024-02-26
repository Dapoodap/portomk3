import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
    {/* Wrapping App component inside BrowserRouter component */}  
    <BrowserRouter> 
      <App /> 
    </BrowserRouter>  
  </React.StrictMode> 
); 