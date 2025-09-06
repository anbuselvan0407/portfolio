import React from 'react'
import './about.scss'
import { motion } from 'framer-motion'
import ServiceCard from './serviceCard/ServiceCard'

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
         duration: 1,
         staggerChildren: 0.12
      }
   }
}
const About = () => {
   return (
      <>
         <motion.div className='about'  initial="initial" whileInView={"animate"} variants={variants}>
            <motion.div className="container"  variants={variants} >
               <motion.div className="textImgContainer" variants={variants}>
                  <motion.div className="imgContainer" variants={variants}>
                     <img src="./photoclg.jpg" alt="" />
                  </motion.div>
                  <motion.div className="textContainer" variants={variants}>
                     <motion.p variants={variants}>Passionate about full-stack development, I bring a strong foundation in HTML, CSS, and JavaScript, using these skills to craft engaging and responsive user interfaces. My proficiency in Angular allows me to build dynamic, component-driven frontend experiences that focus on performance, reusability, and seamless user interaction.
                     </motion.p>
                     <motion.p variants={variants}>On the backend, I excel in Node.js with Express and Nest.js, building robust, scalable server-side applications and RESTful APIs. I have practical experience integrating backend logic with frontend frameworks to deliver end-to-end solutions. My skills also extend to database management using MongoDB, MySQL and PostgreSQL ensuring efficient, secure, and reliable data handling.
                     </motion.p>
                     <motion.p variants={variants}>As a fresher, I’m eager to dive into new technologies and continuously sharpen my skills. I’m committed to building innovative solutions and enjoy collaborating with teams to create impactful applications in the ever-evolving software development ecosystem.
                     </motion.p>
                  </motion.div>
               </motion.div>
               <motion.div className="boxContainer" variants={variants}>

                  <motion.div variants={variants}>
                     <ServiceCard count={"11+"} text={"Projects"} />
                  </motion.div>
                  <motion.div variants={variants} >
                     <ServiceCard count={"7+"} text={"Front-end-projects"} />
                  </motion.div>
                  <motion.div variants={variants}>
                     <ServiceCard count={"2+"} text={"FullStack Projects"} />
                  </motion.div>

                  {/*  <ServiceCard  count={"11+"} text={"projects"}/>
                    <ServiceCard  count={"19+"} text={"front-end-projects"}/>
                    <ServiceCard  count={"19+"} text={"FullStack Projects"}/>
                    <ServiceCard  count={"19+"} text={"projects"}/> */}
               </motion.div>
            </motion.div>
         </motion.div>

         {/* this is for mobile     */}

         <div className='mobileabout'  >
            <div className="container" >
               <div className="textImgContainer" >
                  <div className="imgContainer">
                     <img src="./photoclg.jpg" alt="" />
                  </div>
                  <div className="textContainer">
                     <p>Passionate about full-stack development, I bring a solid foundation in HTML, CSS, and JavaScript, leveraging these skills to create engaging and responsive user interfaces. My proficiency in React.js allows me to craft dynamic frontend experiences that prioritize user interaction and satisfaction.
                     </p>
                     <p>On the backend, I excel in Node.js and Express, implementing robust server-side solutions that support scalable applications. My knowledge extends to database management using MongoDB and SQL, ensuring efficient data storage and retrieval mechanisms that uphold application performance and reliability
                     </p>

                  </div>
               </div>

            </div>
         </div>
      </>
   )
}

export default About
