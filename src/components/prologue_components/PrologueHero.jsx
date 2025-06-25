import React from 'react'
import Button from "../Button.jsx";
import {TiLocationArrow} from "react-icons/ti";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";


gsap.registerPlugin(ScrollTrigger)

const PrologueHero = () => {




    useGSAP(() => {
        gsap.set("#prologue-hero", {
            clipPath:"polygon(20% 0%, 80% 0%, 100% 88%, 5% 93%)",



        })
        gsap.from('#prologue-hero', {
            clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration:1.5,
            ease:"power1.inOut",
            markers: true,

            scrollTrigger:{
                trigger:"#prologue-hero",
                start:"center center",
                end:"bottom center",
                scrub:true,
            },

        })
        }
    )

    return (
        <div  className={`relative min-h-dvh w-screen overflow-hidden bg-violet-300`}>
            <div  id="prologue-hero" className={` relative w-full h-dvh overflow-hidden`}>
                <img

                src="/img/prologue-hero-cover.png"
                alt="Prologue Hero"
                className={`absolute left-0 top-0 w-full h-full object-cover  -z-10 object-center`}
                />

                    <div className={`h-dvh w-full flex justify-center items-start py-36 z-20 text-violet-50`}>
                        <h1 className={`hero-heading special-font md:!text-[240px]`}>Prolog<b>u</b>e</h1>
                    </div>
                <div className={`absolute left-0 w-full bottom-12 flex flex-row md:flex-col gap-3 justify-center items-center  px-4 md:text-center`}>
                    <p className={`text-violet-50`}>
                        In the twilight of realms, where all converges, stands Pillar of<br/> Zentry: a universe of endless opportunities.
                    </p>
                    <Button leftIcon={<TiLocationArrow/>} title="Prologue Trailer" containerClass={`gap-1 flex-center`}/>
                </div>
             </div>
        </div>
    )
}
export default PrologueHero
