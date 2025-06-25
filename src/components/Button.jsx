import React, {useEffect, useRef} from 'react'
import gsap from 'gsap';
const Button = ({title, onClick, containerClass, leftIcon, rightIcon , textStyle}) => {
    const buttonRef = useRef(null);
    const [isHovered, setHovered] = React.useState(false);
    useEffect(() => {
        if(isHovered){
            gsap.to(buttonRef.current,{
                duration:0.8,
                clipPath:'polygon(4% 0%, 100% 11%, 100% 85%, 4% 100%)',
                scaleY:1.1,
                ease:'power1.inOut',

            })

        }else{
            gsap.to(buttonRef.current,{
                duration:0.8,
                clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                scale:1,

                ease:'power1.inOut',
            })
        }
    }, [isHovered]);

    return (
        <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} ref={buttonRef} onClick={onClick}
                className={`${containerClass} group relative  z-10 w-fit cursor-pointer rounded-full overflow-hidden bg-violet-50 px-7 py-3 text-black
        `}>
            {leftIcon}
            <span className={`relative inline-flex overflow-hidden  ${textStyle? textStyle : ' font-general'} text-xs uppercase`}>
                <div>
                    {title}
                </div>
            </span>
            {rightIcon}</button>
    )
}
export default Button
