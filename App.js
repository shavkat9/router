import React from 'react'
// import Navbar from './components/Navbar/Navbar';
// import Abaya from './components/Abaya/Abaya'
// import Libos from './components/Libos/Libos';
import Home from './components/Home/Home'
import About from './components/About/About';
import Form from './components/Form/Form';
import Contact from './components/Contact/Contact'
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container w- 50'>
       <h1>Hello World</h1>
       <Routes>
        <Route path='/' element={ < Home />} />
        <Route path='/form' element={ < Form />} />
        <Route path='/about' element={ < About />} />
        <Route path='/contact' element={ < Contact />} />
       </Routes>
      
    </div>
  )
}

export default App