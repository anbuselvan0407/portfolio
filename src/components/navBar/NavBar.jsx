import React from 'react'
import { motion } from 'framer-motion'
import './navBar.scss'
import Sidebar from '../sidebar/Sidebar'
const NavBar = () => {
  return (
    <div className='navbar'>
      {/*sideBar */}
      {/* <Sidebar /> */}
      <div className="wrapper" >
        <motion.span initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}

        >Portfolio</motion.span>
        <div className="social">
          <motion.a href="https://www.instagram.com/deni__00_1/" target='blank'
            whileHover={{ y: -3, scaleX: 1.1, scaleY: 1.1, transition: { duration: 0.3 } }}>
            <img src="./instagram.png" alt="" />
          </motion.a>
          <motion.a target='blank' href="https://www.facebook.com/Denikanth12/" whileHover={{ y: -3, scaleX: 1.1, scaleY: 1.1, transition: { duration: 0.3 } }} >
            <img src="./facebook.png" alt="" />
          </motion.a>
          <motion.a target='blank' href="https://x.com/denikanth72611" whileHover={{ y: -3, scaleX: 1.1, scaleY: 1.1, transition: { duration: 0.3 } }}>
            <img src="./twitter.png" alt="" />
          </motion.a>
          <motion.a target='blank' href="https://www.linkedin.com/in/denikanth-r-4647a31b1/" whileHover={{ y: -3, scaleX: 1.1, scaleY: 1.1, transition: { duration: 0.3 } }}>
            <img src="./linked.png" alt="" />
          </motion.a>
        </div>
      </div>

    </div>
  )
}

export default NavBar

