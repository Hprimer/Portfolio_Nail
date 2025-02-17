import React from 'react'
import Project from '../Components/projects/Project'
import proj01 from './../img/projects/01.jpg'
import projBig01 from './../img/projects/01-big.jpg'
import proj02 from './../img/projects/02.jpg'
import projBig02 from './../img/projects/02-big.jpg'
import proj03 from './../img/projects/03.jpg'
import projBig03 from './../img/projects/03-big.jpg'
import proj04 from './../img/projects/04.jpg'
import projBig04 from './../img/projects/04-big.jpg'

const projectList = [
    { 
        id: 1,
        title: "Shop",
        skills: "Html, Css, Bootstrap, React",
        image: proj01,
        imageBig: projBig01 ,
        github: 'https://github.com/Hprimer/Shop_react',
        link: 'https://hprimer.github.io/Shop_react/',
        description:"Небольшая страница интернет-магазина"

    },
    { 
        id: 2,
        title: "List of people",
        skills: "Html, Css, React",
        image: proj02,
        imageBig: projBig02,
        github: 'https://github.com/Hprimer/React_people_list',
        description:"Страница с редактируемым списком людей"
        
    },
    { 
        id: 3,
        title: "Roboderm",
        skills: "Html, Css, Bootstrap, JavaScript",
        image: proj03,
        imageBig: projBig03,
        github: 'https://github.com/Hprimer/roboderm_only_front',
        link: 'https://hprimer.github.io/roboderm_only_front',
        description:"Фронтэнд, написанный для проекта, определяющего вид кожного заболевания"

    },
    { 
        id: 4,
        title: "RoboSchool",
        skills: "Html, Css, Bootstrap, React",
        image: proj04,
        imageBig: projBig04,
        github: 'https://github.com/Hprimer/RoboSchool',
        link: 'https://hprimer.github.io/RoboSchool',
        description:"Лендинг страница онлайн школы"

    },
]
function Projects() {
	return (
 	<main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                {projectList.map(e => {
                    return <Project key={e.id} proj = {e}/>
                })}



            </ul>
        </div>
    </main>
	)
}

export default Projects
