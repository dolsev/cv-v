import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./UI/Navbar/Navbar";
import Error from "./pages/Error";
import Main from "./pages/Main";

function App() {

  return (
      <div>
              <BrowserRouter>
                  <Navbar/>
                  <Routes>
                      <Route path="/" element={<Main />}></Route>
                      <Route path="*" element={<Navigate replace to="/404"/>}/>}
                      <Route path="/404" element={<Error />} />
                  </Routes>
              </BrowserRouter>

      </div>
  )
}

export default App;