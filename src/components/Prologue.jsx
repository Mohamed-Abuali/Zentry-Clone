import React from 'react'
import PrologueHero from "./prologue_components/PrologueHero.jsx";
import PrologueAbout from "./prologue_components/PrologueAbout.jsx";

const Prologue = () => {
    return (
        <div className={`relative min-h-dvh w-screen overflow-hidden `}>
            <PrologueHero />
            <PrologueAbout/>
            <section className={`relative min-h-dvh w-screen overflow-hidden bg-violet-50`}></section>
        </div>
    )
}
export default Prologue
