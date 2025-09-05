import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import './parallax.scss'

const Parallax = ({ type }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]

    })
    const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "400%"])
    const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    return (
        <div className='parallax'
            ref={ref}
            style={{
                background: type === "services" ?
                    "linear-gradient(180deg, #49868eff ,#0c0c1d)" :
                    "linear-gradient(180deg, #49868eff ,#505064)"
            }}>
            <motion.h1 style={{ y: ytext }}>{type === "services" ? "What  I can Do" : "What I did"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div
                style={{ backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"} )` ,y:ybg}}
                className="planets"
            ></motion.div>
            <motion.div
            style={{x:ybg}}
                className="stars"
            ></motion.div>
        </div>
    )
}

export default Parallax
