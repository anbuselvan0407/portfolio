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
          <motion.a href="https://www.instagram.com/anna_anbuselvan/" target='blank'
            whileHover={{ y: -3, scaleX: 1.1, scaleY: 1.1, transition: { duration: 0.3 } }}>
            <img src="./instagram.png" alt="" />
          </motion.a>
          <motion.a target='blank' href="https://www.facebook.com/share/19cVFX3RG8/" whileHover={{ y: -3, scaleX: 1.1, scaleY: 1.1, transition: { duration: 0.3 } }} >
            <img src="./facebook.png" alt="" />
          </motion.a>
          <motion.a target='blank' href="https://www.linkedin.com/in/anbu-selvan546?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" whileHover={{ y: -3, scaleX: 1.1, scaleY: 1.1, transition: { duration: 0.3 } }}>
            <img src="./linked.png" alt="" />
          </motion.a>
        </div>
      </div>

    </div>
  )
}

export default NavBar

