
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import AnimatedTitle from "./AnimatedTitle.jsx";



gsap.registerPlugin(ScrollTrigger)


export const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger:'#clip',
                start:'center center',
                end:'+=800 center',
                scrub:0.5,
                pin:true,
                pinSpacer:true,
            }

        })
        clipAnimation.to('.mask-clip-path',{
            clipPath:' polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            width:'100vw',
            height:'100vh',
            borderRadius:'0',
        })
    })


    return (
        <div id="about" className={`min-h-screen w-screen`}>
            <div className={` relative mb-8 mt-36 flex flex-col items-center gap-5`}>
                <h1 className={`font-general text-sm uppercase md:text-[10px]`}>
                    Welcome to zentry
                </h1>
                <AnimatedTitle title="Dic<b>o</b>ver The w<b>o</b>rld's <br/> l<b>a</b>rgest sh<b>a</b>red <b>a</b>dventure"
                               containerClass="mt-5 !text-center text-4xl !text-black uppercase leading-[0.8] md:text-[6rem]" />

                <div className={`about-subtext`}>
                    <p>
                        The Game of Game begins-your life, now an epic MMORPG
                    </p>
                    <p>
                        Zentry unites every player from countless games and platforms
                    </p>

                </div>
            </div>
            <div className={`h-dvh w-screen `} id="clip">
                <div className={`mask-clip-path about-image `}>
                    <img
                        src="img/about.webp"
                        alt="background"
                        className={`absolute top-0 right-0 size-full object-cover `}
                    />


                </div>
                <img
                    src="img/about-overlay.webp"
                    alt="background"
                    className={`absolute top-0 right-0 size-full object-cover z-20 `}
                />
            </div>
        </div>
    )
}
export default About;
