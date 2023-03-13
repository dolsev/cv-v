import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import TopLayout from "./components/TopLayout";
import Contacts from "./components/Contacts";
import Error from "./pages/Error";
import MyFooter from "./UI/MyFooter/MyFooter";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {/* <Navbar/>*/}
        <div className='full-page'>
            <TopLayout/>
            <Contacts/>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="*" element={<Navigate replace to="/404"/>}/>}
                <Route path="/404" element={<Error />} />
            </Routes>
            <MyFooter/>

        </div>
    </BrowserRouter>);

reportWebVitals();
