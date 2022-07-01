import React, {useState} from "react"
import {animated, useSpring} from "react-spring"

const Box = ({w, i, boxClass, children}) => {
    const [rand, setRand] = useState(true)
    const [randomX,setRandomX] = useState(Math.floor(Math.random() * w))
    const width = Math.floor(Math.random() * (340 - 150) +150)
    const height = Math.floor(Math.random() * (340 - 150) +150)

    const spring = useSpring({
        loop: true,
        to: { x: -350},
        from: {
            x: rand ? randomX : w,
        },
        config: { duration: Math.floor(Math.random() * (10000 - randomX) + randomX*10) },
        onRest: () => {
            setRand(false)
            setRandomX(Math.floor(Math.random() * w))
        }
    })
    
    return (
        <animated.div
        style={{
            ...spring,
            width: width,
            height: height,
        }}
        className={boxClass}
        key={i}>
            {children}
        </animated.div>
    )
}

export default Box;