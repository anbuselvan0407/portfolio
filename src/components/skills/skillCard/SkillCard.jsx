import React from 'react'
import { motion } from 'framer-motion'
import './skillCard.scss'

const SkillCard = ({ skill, percentage, color, move }) => {
	return (
		<motion.div className='cards' 
		whileHover={{backgroundColor:"#ffffff84",color:"black",y:-4}}
			style={{ boxShadow: "inset 0 0 5px rgba(255,255,255, 0.3)", marginLeft:move ? "50px":"0"}}>
			<div className="name">
				<p>{skill}</p>
				<div className="line">
					<motion.div initial={{ width: 0 }} whileInView={{ width: percentage }} transition={{ duration: 2, }}
						className='bar'
						style={{ backgroundColor: color }} >
					</motion.div>
				</div>
			</div>
			<div className="percentage" style={{ border: `1px solid ${color}` }}>
				<motion.div initial={{ height: 0 }}
					whileInView={{ height: percentage }}
					transition={{ duration: 1.3 ,}}
					className='percentageBar' style={{ backgroundColor: color }}>
					<p>{percentage}</p>
				</motion.div>
			</div>
		</motion.div>
	)
}

export default SkillCard
