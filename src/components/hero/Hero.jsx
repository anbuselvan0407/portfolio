import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'

const textVariant = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.7,
			staggerChildren: 0.1
		}
	},
	scrollButton: {
		y: 10,
		opacity: 0,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	}
}
const sliderVariants = {
	initial: {
		x: 0,
		opacity: 1,
	},
	animate: {
		x: "-270%",
		opacity: 1,
		transition: {
			duration: 20,
			repeat: Infinity,
			repeatType: "mirror",
		}
	},


}
const Hero = () => {
	return (
		<div className='hero'>
			
			
			<div className="wrapper">
				
				<motion.div className="textContainer" variants={textVariant} initial="initial" animate="animate">
					<motion.h2 variants={textVariant}>Anbuselvan A</motion.h2>
					<motion.h1 variants={textVariant}>I am a FullStack Developer</motion.h1>
					<motion.div className="buttons" variants={textVariant}>
						{/* <motion.button variants={textVariant}>Download Cv</motion.button> */}
						<motion.a href="#contacts" variants={textVariant} >
							<motion.button variants={textVariant}>Contact Me</motion.button>
						</motion.a>

					</motion.div>
					<motion.img src="./scroll.png" alt="" variants={textVariant} animate="scrollButton" />
	
				</motion.div>

			</div>
			<motion.div className="slidieingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
				FullStack Developer Content Creater
			</motion.div>


			<div className="imageContainer">
				<img src="./hero.png" alt="" />
			</div>
			
		</div>
	)
}

export default Hero 
