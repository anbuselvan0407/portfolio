import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import utiliko from '../../assets/utiliko.png'
import ttrack from '../../assets/T-track.png'
import chatApp from '../../assets/chatApp.png'
import stud from  '../../assets/stud.png'
const items = [
	{
		id: 1,
		title: "Student Dashboard",
		img: stud,
		desc: "The ERP Dashboard is a web application built with Angular and Angular Material, offering an enterprise-style admin panel. It features assessment cards for business insights, a data table with sorting, filtering, pagination, and drag-and-drop support. A “Products Sold” progress bar section visualizes performance metrics, inspired by SB Admin.The app integrates JWT authentication and role-based protected routes to ensure secure access. It follows a modular, responsive design with scope for backend integration and real-time data management.",
		link:"https://student-management-app-8c6ae.web.app"
	},
	{
		id: 2,
		title: "Utilko Clone",
		img: utiliko,
		desc: "Developed a Utiliko-inspired clone featuring a full sidebar-based navigation system using Angular, Html, CSS and Express with MySQL. The dashboard displays finance, invoices, tasks, and ticket summaries in real time. It includes a pinned details table with sorting and search functionality.",
		link:"https://utiliko-b0f2a.web.app"
	},
	{
		id: 3,
		title: "Ticket Tracking Application",
		img: ttrack,
		link:"https://t-track2.web.app",
		desc: "T-Track is a ticket tracking web application designed for managing tasks and support issues. It provides a dashboard view with ticket statistics (Total, In-Progress, In-Review, Done). Users can create, search, and track tickets with details like ID, title, description, and status. The app supports pagination, filtering, and secure JWT authentication with role-based access. Admins can manage user roles, promoting maintainers to admins for advanced privileges.",
	}	
];

const Single = ({ item }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

	return (
		
		<section >
			<div className="container">
				<div className="wrapper">
					<motion.div className="imageContainer"
						whileHover={{
							scaleX: 1.02, scaleY: 1.02,
							transition: { duration: 0.5 },border:"3px solid orange"
						}} ref={ref}>

						<motion.img src={item.img} alt=""  />

					</motion.div>
					<motion.div className="textContainer" style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<a href={item.link} target="blank" >
							<button>See Project</button>
						</a>
						
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const Portfolio = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	return (
		<div className="portfolio" ref={ref}>
			<div className="progress">
				<h1 className="my_projects">My Projects</h1>
				<motion.div style={{ scaleX }} className="progressBar"></motion.div>
			</div>

			<motion.div className="down">
				<motion.a href="#Contact">
					<motion.img src="./arrow.png" alt="" animate={
						{
							y: 10,
							opacity: 0.2,
							transition: {
								duration: 2,
								repeat: Infinity,
							}
						}
					}
					/>
				</motion.a>

			</motion.div>

			{items.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};

export default Portfolio;
