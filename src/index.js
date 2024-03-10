import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Receipt from './pages/receipt/Receipt';
import PayCard from './pages/method-pay/PayCard';
import Menu from './pages/menu/Menu';
document.body.className = 'font-Kanit'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route index path='/' element={<Receipt />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route exact path='/pay-card' element={<PayCard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
