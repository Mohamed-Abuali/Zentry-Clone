import  {useEffect , useRef} from 'react'
import gsap from 'gsap';
const AnimatedTitle = ({title, containerClass}) => {
    const contextRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() =>{
            const titleAnimation = gsap.timeline({
                scrollTrigger:{
                    trigger: contextRef.current,
                    start:'100 bottom',
                    end:'center bottom',
                    toggleActions:'play none none reverse',
                }
            })
            titleAnimation.to('.animated-word',{
                opacity: 1,
                transform:'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                stagger: 0.02,
                ease:'power2.inOut',


            });
            return () => ctx.revert()
        },contextRef)
    },[])
    return (
        <div
            ref={contextRef}
            className={`${containerClass} animated-title`}>
            {/* eslint-disable-next-line react/prop-types */}
            {title.split(<br/>).map((line,index) => (
                <div key={index} className={`flex-center max-w-full flex-wrap gap-2  px-10 md:gap-3`}>
                    {line.split(' ').map((word,i) => (
                        <span key={i} className={`animated-word`} dangerouslySetInnerHTML={{__html:word}}>

                        </span>
                    ))}
                </div>
                ))}
        </div>
    )
}
export default AnimatedTitle
