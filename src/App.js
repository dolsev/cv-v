import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./UI/Navbar/Navbar";
import Error from "./pages/Error";
import MySkills from "./pages/MySkills";
import TopLayout from "./components/TopLayout";
import Contacts from "./components/Contacts";
import MyFooter from "./UI/MyFooter/MyFooter";

function App() {

  return (
      <div className='full-page'>
          <BrowserRouter>
                  <Navbar/>
                      <TopLayout/>
                      <Contacts/>
              <Routes>
                  <Route path="/" element={<MySkills />}></Route>
                  <Route path="*" element={<Navigate replace to="/404"/>}/>}
                  <Route path="/404" element={<Error />} />
              </Routes>
              <MyFooter/>
          </BrowserRouter>
      </div>
  )
}

export default App;