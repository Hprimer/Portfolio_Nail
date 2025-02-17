import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

// import proj02 from './../img/projects/02.jpg'
// import proj03 from './../img/projects/03.jpg'
// import proj04 from './../img/projects/04.jpg'
// import proj05 from './../img/projects/05.jpg' 



function Project(props) {
	return (
			<li className="project">
				<NavLink to={`/Portfolio_Nail/projects/${props.proj.id}`} state={{ proj: props.proj }} > 
				{/* // state нужен для передачи массива в Project_pg;
				// чтобы поймать массив в P_pg нужно использовать useLocation;
				// чтобы поймать индекс страници нужен useParams */}
					<img src={props.proj.image} alt="Project img" className="project__img"/>
					<h3 className="project__title">{props.proj.title}</h3>
				</NavLink>
				
				
				
				<a className="column githubLink" href={props.proj.github} target="_blank" rel="noreferrer">GitHub</a>
				{props.proj.link && ( // проерка на наличие ссылки
					<a className="column siteLink" href={props.proj.link} target="_blank" rel="noreferrer">Site</a>
				)}
				
				
				{/* </div> */}
				<br/>
				<br/>
				<br/>
			</li>
	)
}

export default Project
