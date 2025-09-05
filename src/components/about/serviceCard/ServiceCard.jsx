import React from 'react'
import './serviceCard.scss'
import { motion } from "framer-motion"
const ServiceCard = ({ count, text }) => {
    return (
        <motion.div className='serviceCard'
            whileHover={{ boxShadow: "0px 0px 14px 5px #4bd74b" ,transition:{duration:0.4}}}>
            <motion.div className="boxShadow"  >
                <span>{count}</span>
                <p>{text}</p>
            </motion.div>

        </motion.div>
    )
}

export default ServiceCard
