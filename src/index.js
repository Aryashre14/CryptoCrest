import React  from "react";
import  {createRoot}  from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";


import App from "./App";
import 'antd/dist/reset.css';

const container=document.getElementById('root');
const root=createRoot(container);

root.render(
 <Router>
 
  <App />
  
 </Router>,
 //document.getElementById('root')
 );
