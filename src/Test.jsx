import React from 'react'
import { motion } from 'framer-motion'
const Test = () => {
    const varaints = {
        visible: {
            opacity: 1,
            x: 100,
            transition:{staggerChildren:0.5}
        },
        hidden: { opacity: 0 },

    }
    const items = ["item1", "item2", "item3", "item4", "item5"]
    return (
        <div className='test'>

            <motion.ul variants={varaints} initial="hidden" animate="visible">
                {items.map((item, i) => (
                    <motion.li key={i} variants={varaints} >{item}</motion.li>
                ))}

            </motion.ul>
        </div>
    )
}

export default Test
