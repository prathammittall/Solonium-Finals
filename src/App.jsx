import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GetToKnow from './components/getToKnow'
import Connect from "./components/connectWithUs";
import Feedback from "./components/userFeedback";
import Contact from './components/Contact'
import Home from './components/Home'


function App() {
    return (
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>


            <Hero />
                <GetToKnow />
                <Feedback />


            <Connect />

        </>
    )
}

export default App