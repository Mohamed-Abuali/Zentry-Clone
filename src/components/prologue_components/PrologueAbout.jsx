import React, {useEffect, useRef, useState} from 'react'
import gsap from "gsap";
import AnimatedTitle from "../AnimatedTitle.jsx";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/all";


gsap.registerPlugin(ScrollTrigger)

const PrologueAbout = () => {
//Ref's
    const aboutSecRef = useRef(null);
    const aboutchangecolorRef = useRef(null);
    const scrollImageRef_1 = useRef(null);
    const scrollImageRef = useRef(null);
const aboutPicRef = useRef(null);

//useState's
const [changeColor, setChangeColor] = useState(false);


//function's
    const handleMouseLeave = () => {
        gsap.to(aboutPicRef.current, {
            duration:0.3,
            rotateY :15,
            rotateX:10,
            perspective:500,
            ease:'power1.inOut',

        })
    }
    const handleMouseMove =(e) => {
        const {clientX, clientY} = e;

        if (!aboutPicRef.current) return;

        const rect = aboutPicRef.current.getBoundingClientRect();
        const y2 = clientY - rect.top;
        const x2 = clientX - rect.left;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y2 - centerY) / centerY) * -20;
        const rotateY = ((x2 - centerX) / centerX) * 20;


        gsap.to(aboutPicRef.current, {
            duration: 0.3,
            rotateY, rotateX,
            transformPerspective: 500,
            ease: 'power1.inOut',

        })


    }
    useEffect(() => {
        const aboutCtx = gsap.context(() => {
            const abouttl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutSecRef.current,
                    start: '-=200 center',
                    end: 'center bottom',


                    toggleActions: 'play none none reverse',

                }
            });

            abouttl.to('.prologue-about-image', {
                transform: 'translate3d(0,0,0) rotateY(15deg) rotateX(10deg)',
                ease: 'power2.inOut',
                scaleX: 1,
                duration: 1,
            });
            return ()=> aboutCtx.revert();
        },aboutSecRef)
    },)


    //gsap for changing the bg color
    useEffect(() => {
        ScrollTrigger.create({
            trigger: '#about-image-card-section',
            start: '-=200 center',




            onEnter: () => {
                setChangeColor(true)
                console.log('onEnter');
            },


            onLeaveBack: () => {
                setChangeColor(false)
                console.log('onLeave back')},
        })
    }, []);



    //about-scroll-image-2 animations
    useEffect(() => {
        const imageScrollCtx1 = gsap.context(() => {
            const imageScroll1 = gsap.timeline( {
                scrollTrigger:{
                    trigger:'#scroll-image-container-2',
                    start:'top center',
                    end:'bottom top',
                    scrub:true,
                    toggleActions:'play none none reverse',

                }
            })
            imageScroll1.to(scrollImageRef.current,{

                transform: 'translate3d(0,150px,0)',
                duration:3,
                ease:'power1.inOut',
            })
            imageScroll1.from(scrollImageRef.current, {
                transform: 'translate3d(0,0,0)',
            })
            return () => imageScrollCtx1.revert();

        },'#scroll-image-container-2')

    }, []);


    //about-scroll-image-1 animations
    useEffect(() => {
        const imageScrollCtx2 = gsap.context(() => {
            const imageScroll2 = gsap.timeline( {
                scrollTrigger:{
                    trigger:'#scroll-image-container-1',
                    start:'top center',
                    end:'bottom top',
                    scrub:true,
                    toggleActions:'play none none reverse',
                }
            })
            imageScroll2.to(scrollImageRef_1.current,{

                transform: 'translate3d(0,150px,0)',
                duration:3,
                ease:'power1.inOut',
            })
            imageScroll2.from(scrollImageRef_1.current, {
                transform: 'translate3d(0,0,0)',
            })
            return () => imageScrollCtx2.revert();

        },'#scroll-image-container-1')

    }, []);



//JSX SECTIONS

    return (
        <div ref={aboutchangecolorRef} className={`relative min-h-dvh w-screen overflow-hidden ${changeColor ? 'bg-violet-50':'bg-violet-300'}`}>
            <div className={`relative overflow-hidden w-full px-12 md:px-28 flex flex-col gap-2`}>
                <h3 className={`font-general`}>A new discovery</h3>
                <p className={`font-circular-web text-xl text-wrap md:w-[35rem]`}>At the edge where all realms meet, stands an eternal pillar. It is the axis of realms, weaving the old and the new together, guiding them into the flow of balance and harmony.</p>
            </div>
            <div className={`flex flex-col md:flex-row gap-2 mt-8 justify-center items-center`}>
                <div ref={aboutSecRef}   className={`relative  w-full h-full  text-white  flex justify-center items-center`}>
                    <img
                        id="about-card-image"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        ref={aboutPicRef}
                    src="/img/pillar-chapter-visual.png"
                    className={`prologue-about-image   border-slate-700 border-2  `}
                    />
                </div>
                <div className={`  w-full  h-dvh  flex flex-col gap-2 justify-center items-center px-5 `}>
                    <p className={`text-center font-circular-web`}>A boundless infinite structure
                    </p>
                    <AnimatedTitle
                    title=" T<b>h</b>e<br/>Univ<b>e</b>rse<br/>Pill<b>a</b>r"

                    containerClass={` !text-black text-center !text-[72px] md:!text-[150px]`}

                    />

                    <p className={`md:w-[450px] text-bl text-center font-circular-web`}>The Pillar transcends mere structure; it is a universe unto itself,
                        harboring its own unique ecology and ecosystem.
                        This universe, distinct and mysterious, is called Zentry.</p>

                </div>
            </div>
            <div className={`flex flex-col md:flex-row gap-2 mt-8 justify-center items-center h-[100dvh] w-screen`}>


                <div
                    id="about-image-card-section"
                    className={`z-20 h-[60vh] relative w-72 origin-center object-cover md:mr-[10rem]  md:mb-[20rem] overflow-hidden md:w-[20vw]`}>
                    <div id="scroll-image-container-1"
                         className={`h-[90%] relative w-full overflow-hidden rounded-2xl `}>
                        <img src="/img/prologue-prx-1.png"
                             ref={scrollImageRef_1}
                             className={`h-full w-full absolute top-0 object-cover  rounded-2xl `}
                        />
                    </div>
                        <p className={`h-[10%] w-full font-general`}>The new haven of opportunities</p>
                    </div>
                    <div
                        className={`z-20 h-[902px] w-[622px] origin-center object-cover md:ml-[5rem] overflow-hidden md:mt-[10rem]  md:w-[30vw]`}>
                        <div id="scroll-image-container-2"
                             className={`h-[80%] relative w-[90%] md:w-full overflow-hidden rounded-2xl `}>
                            <img id="scroll-image-2" ref={scrollImageRef} src="/img/prologue-prx-2.png"
                                 className={`h-[1080px] w-[1280px] object-cover absolute top-0`}
                            />
                        </div>
                        <p className={`h-[10%] w-full font-general`}>The new multi-realm economy</p>
                    </div>
                </div>
            </div>
            )
            }
            export default PrologueAbout
            //
