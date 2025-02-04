import React from 'react'
// import imge from "./../img/projects/03-big.jpg"
import github from "./../img/icons/gitHub-black.svg"

import { useParams, useLocation } from 'react-router-dom'

function Project_pg() {

	const {id} = useParams(); // Получаем значение `id` из URL
	const location = useLocation(); // Получаем переданный state
	const project = location.state.proj;

	if (!project) return <h1>Проект не найден</h1>;

	return (
	<main className="section">
		<div className="container">
				<div className="project-details">

						<h1 className="title-1">{project.title}</h1>

						<img src={project.imageBig} alt="project_img" className="project-details__cover"/>

						<div className="project-details__desc">
							<p>{project.skills}</p>
						</div>
						<div className='project-details__desc2'>
							<p>{project.description}</p>
						</div>

						{project.github && ( // проерка на наличие ссылки 						
							<a href={project.github} className="btn-outline" target="_blank" rel="noreferrer">
								<img src={github} alt="Github icons"/>
								<p className='btn-outline-text'>GitHub repo</p>
							</a>
						)}
						{project.link && ( // проерка на наличие ссылки
						<a href={project.link} className="btn-outline" target="_blank" rel="noreferrer">
							<p className='btn-outline-text'>Link to Site</p>
						</a>
						)}

				</div>
		</div>
</main>
)}

export default Project_pg
