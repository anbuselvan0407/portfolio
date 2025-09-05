import React from 'react'
import './skills.scss'
import Title from './title/Title'
import SkillCard from './skillCard/SkillCard'
import { motion } from 'framer-motion'

const variants = {
	initial: {
		x: -500,
		y: 200,
		opacity: 0,
	},
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			staggerChildren: 0.13
		}
	}
}
const Skills = () => {
	return (
		<>
			<motion.div id='Skills' className='skills' variants={variants} initial="initial" whileInView={"animate"}>

				<motion.div className="container" variants={variants}>

					<motion.div className="abouts" variants={variants}>
						<motion.div className="contents" variants={variants}>
							<motion.h2 variants={variants}>
								My Skills & Experieence
							</motion.h2>
							<motion.p variants={variants}>
							Proficient in HTML, CSS, JavaScript, and Angular for creating responsive, interactive, and dynamic user interfaces. Committed to applying my skills to contribute to innovative and user-focused software solutions.
							</motion.p >
							<motion.p variants={variants}>
							Skilled in backend development with Node.js, Express and Nest.js crafting robust, secure, and scalable server-side applications and RESTful APIs.
							</motion.p>
							<motion.p variants={variants}>
							Knowledgeable in database management with MongoDB, MySQL and PostgreSQL ensuring efficient data storage and retrieval. Eager to learn new technologies and continuously improve my technical skills. 
							</motion.p>
						</motion.div>
					</motion.div>

					<motion.div className="skillbar" variants={variants}>
						<motion.div className="skillcard" variants={variants}>

							<motion.div variants={variants} style={{ width: "100%", height: "100%" }} >
								<SkillCard skill={"HTML"} color={"#ff3f3f"} percentage={"89%"} move={false} />
							</motion.div>
							<motion.div variants={variants} style={{ width: "100%", height: "100%" }} >
								<SkillCard skill={"css"} color={"#008fff"} percentage={"70%"} move={true} />
							</motion.div>
							<motion.div variants={variants} style={{ width: "100%", height: "100%" }} >
								<SkillCard skill={"Javascript"} color={"#FFB900"} percentage={"90%"} move={false} />
							</motion.div>
							<motion.div variants={variants} style={{ width: "100%", height: "100%" }} >
								<SkillCard skill={"Node.js & Express.js"} color={"#78d052c6"} percentage={"90%"} move={true} />
							</motion.div>
							<motion.div variants={variants} style={{ width: "100%", height: "100%" }} >
								<SkillCard skill={"Nest.js"} color={"#63e649"} percentage={"75%"} move={false} />
							</motion.div>
							<motion.div variants={variants} style={{ width: "100%", height: "100%", marginLeft: "50px" }}>
								<SkillCard skill={"Angular"} color={"#00FFF3"} percentage={"70%"} move={false} />
							</motion.div>
							<motion.div variants={variants} style={{ width: "100%", height: "100%" }}>
								<SkillCard skill={"Mongodb,Sql & PostgreSQL"} color={"#FFE400"} percentage={"60%"} move={true} />
							</motion.div>
							<motion.div variants={variants} style={{ width: "100%", height: "100%" }}>
								<SkillCard skill={"Python & Java"} color={"#9e42c5"} percentage={"60%"} move={false} />
							</motion.div>



							{/* <SkillCard skill={"HTML 5"} color={"#ff3f3f"} percentage={"89%"} move={false} />
						<SkillCard skill={"css"} color={"#008fff"} percentage={"70%"} move={true} />
						<SkillCard skill={"javascript"} color={"#FFB900"} percentage={"90%"} move={false} />
						<SkillCard skill={"node js"} color={"#78d052c6"} percentage={"90%"} move={true} />
						<SkillCard skill={"react js"} color={"#00FFF3"} percentage={"70%"} move={false} />
						<SkillCard skill={"mongodb & firebase"} color={"#FFE400"} percentage={"60%"} move={true} />

						<SkillCard skill={"mongodb & firebase"} color={"#FFE400"} percentage={"60%"} move={false} />
						<SkillCard skill={"mongodb & firebase"} color={"#FFE400"} percentage={"60%"} move={true} /> */}

						</motion.div>

					</motion.div>
				</motion.div>
			</motion.div>
			{/*------------------------------- for mobile------------------------------------------------- */}
			<div id='Skills' className='mobileskills' >

				<div className="container" >

					<div className="abouts" >
						<div className="contents" >
							<h2 >
								My Skills & Experieence
							</h2>
							<p >
							Proficient in HTML, CSS, and JavaScript for creating responsive and interactive user interfaces. Committed to applying my skills to contribute to innovative software solutions.
							</p >
							
						</div>
					</div>

					<div className="skillbar" >
						<div className="skillcard" >
						<div style={{ width: "100%", height: "100%" }} >
								<SkillCard skill={"Spring Boot "} color={"#63e649"} percentage={"75%"} move={false} />
							</div>
							
							<div style={{ width: "100%", height: "100%" }} >
								<SkillCard skill={"HTML 5"} color={"#ff3f3f"} percentage={"89%"} move={false} />
							</div>
							<div  style={{ width: "100%", height: "100%" }} >
								<SkillCard skill={"css"} color={"#008fff"} percentage={"70%"} move={false} />
							</div>
							<div  style={{ width: "100%", height: "100%" }} >
								<SkillCard skill={"Javascript"} color={"#FFB900"} percentage={"90%"} move={false} />
							</div>
							<div  style={{ width: "100%", height: "100%" }} >
								<SkillCard skill={"Node.js"} color={"#78d052c6"} percentage={"90%"} move={false} />
							</div>
							<div  style={{ width: "100%", height: "100%" }}>
								<SkillCard skill={"React js"} color={"#00FFF3"} percentage={"70%"} move={false} />
							</div>

						</div>

						<div className="skillcard" >

							<div style={{ width: "100%", height: "100%" }} >
								<SkillCard skill={"Express.js"} color={"#ff3f"} percentage={"89%"} move={false} />
							</div>
							<div  style={{ width: "100%", height: "100%" }} >
								<SkillCard skill={"Mongodb"} color={"#906fff"} percentage={"70%"} move={false} />
							</div>
							<div  style={{ width: "100%", height: "100%" }} >
								<SkillCard skill={"Sql"} color={"#67B900"} percentage={"90%"} move={false} />
							</div>
							<div  style={{ width: "100%", height: "100%" }} >
								<SkillCard skill={"Python"} color={"#9cc542"} percentage={"90%"} move={false} />
							</div>
							<div  style={{ width: "100%", height: "100%" }}>
								<SkillCard skill={"Java & C"} color={"#cb24b8"} percentage={"70%"} move={false} />
							</div>

						</div>

					</div>
				</div>
			</div>
		</>
	)
}

export default Skills
