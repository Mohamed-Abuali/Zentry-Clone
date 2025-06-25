import {useEffect, useRef, useState} from 'react'
import Button from "./Button.jsx";
import {TiLocationArrow} from "react-icons/ti";
import {useWindowScroll} from "react-use";
import gsap from "gsap";
import {Link} from "react-router-dom";

const nav = [
    'Nexus', 'Vault', 'Prologue','About','Contact'
]
const Navbar = () => {
   const navContainerRef = useRef(null);
   const audioElementRef = useRef(null);
   const[isAudioPlaying, setIsAudioPlaying] = useState(false);
   const[isIndicatorActive, setIsIndicatorActive] = useState(false);
   const [lastScrollY, setLastScrollY] = useState(0);
   const[isNavVisible, setIsNavVisible] = useState(true);


    const toggleAudioIndicator = () =>{
            setIsAudioPlaying((prevState) => !prevState);
            setIsIndicatorActive((prevState) => !prevState);
    }
    const {y:currentScrollY} = useWindowScroll();

    useEffect(() => {
        if(currentScrollY == 0){
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        }else if(currentScrollY > lastScrollY){
            setIsNavVisible(false);
            navContainerRef.current.classList.add('floating-nav');
        }
        else if(currentScrollY < lastScrollY){
            setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }

    setLastScrollY(currentScrollY);

    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible? 0 : -100,
            opacity: isNavVisible ? 1 :0,
            duration:0.2,
        })
    }, [isNavVisible]);


    useEffect(()=>{
        if(isAudioPlaying){
            audioElementRef.current.play();
        }else{
            audioElementRef.current.pause();
        }
    },[isIndicatorActive])

    return (
        <div ref={navContainerRef} className={`fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6`}>
            <header className={`absolute top-1/2 w-full -translate-y-1/2`}>
                <nav className="flex size-full p-4 items-center justify-between">
                    <div className="flex items-center gap-7">
                        <img
                        src="/img/logo.png"
                        alt={`Logo`}
                        className={`w-10`}
                        />
                        <Button
                        id="product-button"
                        title="Product"
                        rightIcon={<TiLocationArrow/>}
                        containerClass={`bg-blue-50 md:flex justify-center items-center hidden gap-1`}
                        />

                    </div>
                    <div className="flex items-center h-full">
                        <div className={`hidden md:block`}>
                            {nav.map((item, index) => (
                                //<a key={index} href={`#${item.toLowerCase()}`} className={`nav-hover-btn`}>{item}</a>
                                <Link key={index} to={`/${item.toLowerCase() === 'nexus' ? '' : item.toLowerCase()}`} className={`nav-hover-btn`}>{item}</Link>
                            ))

                            }
                        </div>
                        <button  onClick={toggleAudioIndicator} className={`ml-10 flex items-center space-x-0.5`}>
                            <audio ref={audioElementRef} loop autoPlay src="/audio/loop.mp3"/>
                                {[1,2,3,4].map((bar) => (
                                    <div key={bar} className={`indicator-line ${isIndicatorActive ?'active' : ''} `}
                                    style={{animationDelay: `${bar * 0.1}s`}}

                                    />
                                ))}

                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Navbar
