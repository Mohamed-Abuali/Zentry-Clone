import  {useRef} from 'react'
import AnimatedTitle from "./AnimatedTitle.jsx";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners.jsx";
import Button from "./Button.jsx";
const Story = () => {


    const frameRef = useRef(null);

    const handleMouseLeave = () => {
        gsap.to(frameRef.current, {
            duration:0.3,
            rotateY : 0,
            rotateX:0,
            perspective:500,
            ease:'power1.inOut',

        })
    }
    const handleMouseMove =(e) => {
        const {clientX, clientY} = e;

        if(!frameRef.current) return;

        const rect = frameRef.current.getBoundingClientRect();
        const y = clientY - rect.top;
        const x = clientX - rect.left;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;


        gsap.to(frameRef.current, {
            duration:0.3,
            rotateY,rotateX,
            transformPerspective: 500,
            ease:'power1.inOut',

        })




    }
    return (
        <div id="story" className={`min-h-dvh w-screen bg-black text-blue-50`}>
            <div className={`flex size-full flex-col items-center py-10 pb-24`}>
                <p className={`font-general text-sm uppercase md:text-[10px]`}>
                    The multiverse ip world
                </p>
                <div className={`relative size-full`}>
                    <AnimatedTitle
                    title="The St<b>o</b>ry of <br/> a hidden real<b>m</b>"
                    sectionId="#story"
                    containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"

                    />
                    <div className={`story-img-container`}>
                        <div className={`story-img-mask`}>
                            <div className={`story-img-content`}>
                                <img
                                ref={frameRef}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseLeave}
                                onMouseEnter={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                                src="/img/entrance.webp"
                                alt="entrance"
                                className="object-contain"



                                />
                            </div>

                        </div>
                        <RoundedCorners/>

                    </div>
                </div>
                <div className={`-mt-[80] flex w-full justify-center md:-mt-64 md:me-44 md:justify-end `}>
                    <div className={`h-full w-fit flex items-center flex-col md:items-start`}>
                        <p className={`mt-3 text-center max-w-sm font-circular-web text-violet-50 md:text-start`}>
                            Where realms converge, lies Zentry and the boundless pillar.
                            Discover its secrets and shape your fate amidst infinite opportunities.
                        </p>
                        <Button
                        title="Discover Prologue"
                        containerClass={`mt-5 !py-2 !px-5 `}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Story
