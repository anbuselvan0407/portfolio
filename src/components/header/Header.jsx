import React, { useState } from 'react'
import './header.scss'
import { AnimatePresence, motion } from 'framer-motion'
const Header = () => {
	const [toolVisible, setToolShow] = useState(false)
	const items = [{ name: 'Home', location: "#Home", img: "./home.png" },
	{ name: "About", location: "#About", img: "./about.png" },
	{ name: "Skill", location: "#Skill", img: "./skill.png" },
	{ name: "Service", location: "#Service", img: "./service.png" },
	{ name: "Potfolio", location: "#Portfolio", img: "./project.png" },
	{ name: "Contact", location: "#Contact", img: "./contact.png" }]
	return (
		<div className='header'>
			<div className="bar">

				{items.map((item, index) => (
					<a href={item.location} key={index} onMouseEnter={() => setToolShow(true)} onMouseLeave={() => setToolShow(false)} >
						<img src={item.img} alt="" />

						<AnimatePresence>
							<motion.div className="tooltip"
								initial={{opacity:0,x:-25} }
								whileInView={ {opacity:1,x:0}}
								exit={{opacity:0,x:-25} }
								
							>
								<p>{item.name}</p>
								<div className="dummy"></div>
							</motion.div>

						</AnimatePresence>

					</a>
				))}

				{/* <a href="#HomePage" onMouseEnter={()=>setToolShow(true)} onMouseLeave={()=>setToolShow(false)} >
					<img src="./home.png" alt="" />
					<AnimatePresence>
						{toolVisible && <motion.div className="tooltip">
							<p>Home</p>
							<div className="dummy"></div>
						</motion.div>}
					</AnimatePresence>

				</a>
				<a href="#About" onMouseEnter={()=>setToolShow(true)} onMouseLeave={()=>setToolShow(false)} >
					
					<img src="./about.png" alt="" />
					<AnimatePresence>
						{toolVisible && <motion.div className="tooltip">
							<p>About</p>
							<div className="dummy"></div>
						</motion.div>}
					</AnimatePresence>
				</a>
				<a href="#Skills" onMouseEnter={()=>setToolShow(true)} onMouseLeave={()=>setToolShow(false)} >
					
					<img src="./skill.png" alt="" />
					<AnimatePresence>
						{toolVisible && <motion.div className="tooltip">
							<p>Skill</p>
							<div className="dummy"></div>
						</motion.div>}
					</AnimatePresence>
				</a>
				<a href="#Services" onMouseEnter={()=>setToolShow(true)} onMouseLeave={()=>setToolShow(false)} >
					
					<img src="./service.png" alt="" />
					<AnimatePresence>
						{toolVisible && <motion.div className="tooltip">
							<p>Service</p>
							<div className="dummy"></div>
						</motion.div>}
					</AnimatePresence>
				</a>
				<a href="#Portfolio" onMouseEnter={()=>setToolShow(true)} onMouseLeave={()=>setToolShow(false)} >
					
					<img src="./project.png" alt="" />
					<AnimatePresence>
						{toolVisible && <motion.div className="tooltip">
							<p>Projects</p>
							<div className="dummy"></div>
						</motion.div>}
					</AnimatePresence>
				</a>
				<a href="#Contact" onMouseEnter={()=>setToolShow(true)} onMouseLeave={()=>setToolShow(false)} >
					
					<img src="./contact.png" alt="" />
					<AnimatePresence>
						{toolVisible && <motion.div className="tooltip">
							<p>Contact</p>
							<div className="dummy"></div>
						</motion.div>}
					</AnimatePresence>
				</a> */}


			</div>
		</div>
	)
}

export default Header
