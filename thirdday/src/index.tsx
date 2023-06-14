import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

//import pages
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';


const router=
<BrowserRouter>
<ToastContainer />
  <Routes>
    <Route path='/' element={<Login/>} />
  </Routes>
</BrowserRouter>

  
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render( 
    router
);

