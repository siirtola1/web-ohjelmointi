import React from 'react';
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import Header from './Components/Header';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import NotFound from './Components/NotFound';
import { Route,Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <NavBar />
    <Header />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
