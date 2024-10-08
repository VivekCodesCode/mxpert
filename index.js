import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Story from './Story';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/Story' element={<Story/>}/>
        </Routes>
    </Router>
    
 
);