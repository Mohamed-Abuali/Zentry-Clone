import {useState,useRef,useEffect} from 'react'
import Button from "./Button.jsx";
import {TiLocationArrow} from "react-icons/ti";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";


gsap.registerPlugin(ScrollTrigger)
const Hero = () => {


    const[currentIndex, setCurrentIndex] = useState(1);
    const[hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const[loadedVideosData, setLoadedVideosData] = useState(0);

    const nextVideoRef = useRef(null);
    const getVideoSource = (index) => `videos/hero-${index}.mp4`;
    const handleVidoeLoad = () =>{
        setLoadedVideosData((prev) => prev + 1);
    }
    const totalVideos = 4;
    const upcomingVideos = (currentIndex % totalVideos) + 1;

    const videoFrameRef = useRef(null);

    const handleMouseLeave = () => {
        gsap.to(videoFrameRef.current, {
            duration:0.3,
            rotateY : 0,
            rotateX:0,
            perspective:500,
            ease:'power1.inOut',

        })
    }
    const handleMouseMove =(e) => {
        const {clientX, clientY} = e;

        if (!videoFrameRef.current) return;

        const rect = videoFrameRef.current.getBoundingClientRect();
        const y1 = clientY - rect.top;
        const x1 = clientX - rect.left;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y1 - centerY) / centerY) * -20;
        const rotateY = ((x1 - centerX) / centerX) * 20;


        gsap.to(videoFrameRef.current, {
            duration: 0.3,
            rotateY, rotateX,
            transformPerspective: 500,
            ease: 'power1.inOut',

        })


    }



    useEffect(() => {
        if(loadedVideosData === totalVideos - 2){
            setIsLoading(false);
        }
    },[loadedVideosData]);

useGSAP(()=>{
    if(hasClicked){
        gsap.set("#current-video", {visibility:"visible"});
        gsap.to("#current-video", {
            transformOrigin:"center center",
            scale:1,

            width:"100%",
            height:"100%",
            duration:1,
            ease:"power1.inOut",
            onStart:() => nextVideoRef.current.play(),
        });

        gsap.from("#next-video",{
            transformOrigin:"center center",
            scale:0,
            duration:1.5,
            ease:"power1.inOut",
        })
    }

}, {dependencies: [currentIndex], revertOnUpdate:true})
//"polygon(20% 0, 71% 0, 90% 95%, 0 100%)"

    useGSAP(()=>{
        gsap.set('#video-frame', {
            clipPath:'polygon(14% 0%, 86% 0%, 91% 96%, 0% 100%)',
           // borderRadius:'0% 0% 0% 0%',



        })
        gsap.from('#video-frame', {
            clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            //ffborderRadius:'0 0 0 0',
            duration:1.5,
            ease:'power1.inOut',
            scrollTrigger :{
                trigger:'#video-frame',
                start: "center center",
                end: "bottom center",

                scrub:true,



            },

        })

    })
console.log(currentIndex);
    const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideos);
    }
    return (
        <div id="nexus" className={`relative h-dvh w-screen overflow-x-hidden `}>
            {isLoading && (
                <div className={`flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50 `}>
                    <div className={`three-body`}>
                        <div className={`three-body__dot`}></div>
                        <div className={`three-body__dot`}></div>
                        <div className={`three-body__dot`}></div>
                    </div>

                </div>
            )}
            <div id={`video-frame`} className={`relative h-dvh w-screen overflow-x-hidden z-100 rounded-3xl bg-blue-75 `}>
                <div>
                <div className={` absolute-center absolute z-50 size-64 rounded-lg overflow-hidden cursor-pointer`}
                     ref={videoFrameRef}
                     onMouseLeave={handleMouseLeave}

                     onMouseEnter={handleMouseLeave}
                     onMouseMove={handleMouseMove}
                >
                    <div onClick={handleMiniVideoClick}
                         className={`origin-center  scale-50 opacity-0 transition-all duration-500 ease-in hover:opacity-100 hover:scale-100 `}

                    >
                        <video
                            ref={nextVideoRef}
                            src={getVideoSource(upcomingVideos)}
                            loop
                            muted
                            id="next-video"
                            className={`origin-center size-64 scale-150 object-cover object-center`}
                            onLoadedData={handleVidoeLoad}
                        />
                    </div>
                </div>
                <video
                    ref={nextVideoRef}
                    src={getVideoSource(currentIndex)}
                    muted
                    loop
                    id="current-video"
                    className={` absolute-center z-20 size-64 absolute object-center object-cover invisible`}
                    onLoadedData={handleVidoeLoad}
                />
                <video
                    src={getVideoSource(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                    autoPlay
                    loop
                    className={`absolute top-0 left-0 size-full object-cover object-center `}/>
            </div>
            <h1 className={`special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 `}>
                G<b>a</b>ming

            </h1>

            <div className={`absolute top-0 right-0 z-40 size-full`}>
                <div className={`mt-24 px-5 sm:px-10`}>
                    <h1 className={` special-font hero-heading text-blue-75 e `}>redfi<b>n</b>e</h1>
                    <p className={`mb-5 max-w-64 text-blue-75  `}>
                        Enter the Metagame<br/>Unleash the Play Economy
                    </p>
                    <Button id="watch-traler" title={`Watch The Trailer`}
                            containerClass={`p-2 rounded-lg !bg-yellow-300 gap-1 flex-center`}
                            leftIcon={<TiLocationArrow/>}/>
                </div>
            </div>
            </div>
            <h1 className={`special-font hero-heading absolute bottom-5 right-5  -z-10 text-black`}>
                G<b>a</b>ming

            </h1>
        </div>
    )
}
export default Hero
