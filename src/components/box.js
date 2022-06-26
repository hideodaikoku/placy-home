import React, {useState} from "react"
import {animated, useSpring} from "react-spring"

const Box = ({w, i, boxClass, children}) => {
    const [rand, setRand] = useState(true)

    const spring = useSpring({
        loop: true,
        to: { x: -350},
        from: {
            x: rand ? Math.floor(Math.random() * w) : w
        },
        config: { duration: Math.floor(Math.random() * (11500-7000)+5000) + i*1500 },
        onRest: () => setRand(false)
    })

    return (
        <animated.div
        style={{
            ...spring,
            width: Math.floor(Math.random() * (340 - 150) +150),
            height: Math.floor(Math.random() * (340 - 150) +150),
        }}
        className={boxClass}
        key={i}>
            {children}
        </animated.div>
    )
}

export default Box;