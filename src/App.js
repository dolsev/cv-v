import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./UI/Navbar/Navbar";
import Error from "./pages/Error";
import MySkills from "./pages/MySkills";
import TopLayout from "./components/TopLayout";
import Contacts from "./components/Contacts";
import MyFooter from "./UI/MyFooter/MyFooter";
import Experience from "./pages/Experience";
import Personal from "./pages/Personal";
import Projects from "./pages/Projects";

function App() {

  return (
          <BrowserRouter>
                  <Navbar/>
              <div className='full-page'>

              <TopLayout/>
                      <Contacts/>
              <Routes>
                  <Route path="/" element={<MySkills />}></Route>
                  <Route path="/experience" element={<Experience />}></Route>
                  <Route path="/projects" element={<Projects/>}></Route>
                  <Route path="/personal" element={<Personal/>}></Route>
                  <Route path="*" element={<Navigate replace to="/404"/>}/>}
                  <Route path="/404" element={<Error />} />
              </Routes>
              </div>

              <MyFooter/>
          </BrowserRouter>
  )
}

export default App;