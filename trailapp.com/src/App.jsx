import React from 'react'
import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopLoadingBar from "./Components/Common/TopLoadingBar";

import Header from "./Components/Layout/Header/Header";

import Home from "./Components/Pages/Home/Home";

import Footer from "./Components/Layout/Footer/Footer";

function App() {
  return <Router>

    <TopLoadingBar />
    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>

    <Footer />

  </Router>



}

export default App;
