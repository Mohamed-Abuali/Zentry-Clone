import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from "./components/Navbar.jsx";

import Home from "./components/Home.jsx";

import Prologue from "./components/Prologue.jsx";



function App() {
//<section className={`relative min-h-screen bg-amber-300 w-screen`}></section>

    return (

        <BrowserRouter>
            <main className={`relative min-h-screen w-screen overflow-x-hidden`}>
                <Navbar/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/prologue" element={<Prologue/>}/>
                </Routes>
            </main>

        </BrowserRouter>
    )
}

export default App
