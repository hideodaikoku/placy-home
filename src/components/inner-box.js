import React from "react"
import {animated, useSpring} from "react-spring"

const InnerBox = ({boxClass}) => {
    const [colorSpring, animate] = useSpring(()=>({background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)"}))

    return (
        <animated.div 
            className={boxClass}
            style={colorSpring}
            onMouseEnter={() => {
                const [r1, g1, b1, a1] = Array.from({length:4}, () => Math.round(Math.random() * 255))
                const [r2, g2, b2, a2] = Array.from({length:4}, () => Math.round(Math.random() * 255))
                animate({background: `linear-gradient(180deg, rgba(${r1},${g1},${b1},${a1}) 0%, rgba(${r2},${g2},${b2},${a2}) 100%)`})
            }}
            onMouseLeave={() => {
                animate({background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)"})
            }}
        >
        </animated.div>
    )
}

export default InnerBox;