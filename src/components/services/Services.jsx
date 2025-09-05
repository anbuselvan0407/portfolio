
import React from 'react'
import { motion } from 'framer-motion'
import './services.scss'

const variants = {
	initial: {
		x: -500,
		y:200,
		opacity: 0,
	},
	animate: {
		x: 0,
		y:0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1
		}
	}
}
const Services = () => {
	return (
		<>
			<motion.div className='services' variants={variants} initial="initial" whileInView={"animate"}>
				<motion.div className="textContainer" variants={variants}>
					<p>Iam Focused on helping your company to <br />
						grow and move forward</p>
					<hr />
				</motion.div>


				<motion.div className="titleContainer" variants={variants}>
					<div className="title">
						<img src="/people.webp" alt="" />
						<h1>
							<motion.b whileHover={{ color: "orange" }}>Unique </motion.b> Ideas
						</h1>
					</div>
					<div className="title">
						<h1>
							<motion.b whileHover={{ color: "orange" }}>For Your </motion.b> Business
						</h1>
						<button>What I do?</button>
					</div>
				</motion.div>

				<motion.div className="listContainer" variants={variants}>
					<motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
						<h2>Frontend Development</h2>
						<p>Passionate about frontend development, I specialize in creating responsive and user-friendly interfaces using HTML, CSS, JavaScript, and Angular Experienced in translating design concepts into functional web applications that prioritize usability and aesthetic appeal.



						</p>
						<button>Ok</button>
					</motion.div>
					
					<motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black", transition: { duration: 2 } }}>
						<h2>Backend development</h2>
						<p>Experienced in backend development with Node.js, Express.js and Nest.js I specialize in building robust server-side applications. Skilled in creating APIs, handling data storage with MongoDB, MySQL and PostgreSQL, ensuring scalable and efficient server operations


						</p>
						<button>Ok</button>
					</motion.div>
					<motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
						<h2>Fullstack Development</h2>
						<p>Proficient in both frontend and backend development, I specialize in creating responsive user interfaces with HTML, CSS, JavaScript, and Angular, while also building robust server-side applications with Node.js, Express.js, Nest.js, MongoDB, PostgreSQL and MySQL. 

						</p>
						<button>Ok</button>
					</motion.div>

				</motion.div>
			</motion.div>

			{/* this is testing */}

			<div className='mobileService' >
				<div className="textContainer" >
					<p>Iam Focused on helping your company to <br />
						grow and move forward</p>
					<hr />
				</div>


				<div className="titleContainer" >
					<div className="title">
						<img src="/people.webp" alt="" />
						<h1>
							<b >Unique </b> Ideas
						</h1>
					</div>
					<div className="title">
						<h1>
							<b >For Your </b> Business
						</h1>
						<button>What I do?</button>
					</div>
				</div>
				
				<div className="listContainer" >
					
					<div className="box">
						<h2>Frontend Development</h2>
						<p>Passionate about frontend development, I specialize in creating responsive and user-friendly interfaces using HTML, CSS, JavaScript, and Angular Experienced in translating design concepts into functional web applications that prioritize usability and aesthetic appeal.

						</p>
						<button>Ok</button>
					</div>
					<div className="box">
						<h2>Backend Development</h2>
						<p>Experienced in backend development with Node.js, Express.js and Nest.js I specialize in building robust server-side applications. Skilled in creating APIs, handling data storage with MongoDB, MySQL and PostgreSQL, ensuring scalable and efficient server operations

						</p>
						<button>Ok</button>
					</div>
					
					
					
					
				</div>
			</div>
		</>

	)

}

export default Services
