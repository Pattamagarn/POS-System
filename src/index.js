import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Receipt from './pages/receipt/Receipt';
import PayCard from './pages/method-pay/PayCard';
import PayCash from './pages/method-pay/PayCash';
import SelectMenu from './pages/select-menu/SelectMenu';


document.body.className = 'font-Kanit'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<SelectMenu />} />
        <Route exact path='/pay-cash' element={<PayCash />} />
        <Route exact path='/pay-card' element={<PayCard />} />
        <Route exact path='/receipt' element={<Receipt />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
