import React, { useState } from 'react'
import './sidebar.scss'
import Links from './links/Links'
import { delay, motion } from "framer-motion"
import ToogleButton from './toggleButton/ToogleButton'

const variants = {
	open: {
		clipPath: "circle(1000vh at 50px 50px)",
		transition: {
			type: "spring",
			stiffness: 20,

		}

	},
	closed: {
		clipPath: "circle(30px at 50px 50px)",
		transition: {
			type: "spring",
			delay: 0.04,
			stiffness: 400,
			damping: 40,
		}
	}
}
const Sidebar = () => {
	const [open, setOpen] = useState(false)

	//console.log(open)

	return (
		
			<motion.div className='sidebar' animate={open ? "open" : "closed"}>
				<motion.div className="bg" variants={variants}>
					<Links />
				</motion.div>

				<motion.div  >
					<ToogleButton setOpen={setOpen} />
				</motion.div>

			</motion.div>


		
	)
}

export default Sidebar
