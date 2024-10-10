import React from 'react'
import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopLoadingBar from "./Components/TopLoadingBar";

import Header from "./Components/Header"

import Home from "./Components/Home"
import Projects from "./Components/Projects"
import About from "./Components/About"
import Contact from "./Components/Contact"

import Footer from "./Components/Footer"

function App() {
  return <Router>

    <TopLoadingBar />
    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>

    <Footer />

  </Router>



}

export default App;
