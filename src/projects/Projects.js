import React from "react";
import s from './Projects.module.css';
import sContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";




function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectContainer}`}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <Project title = {"Todo"} discription = {"Loren bla bla bla1"} />
                    <Project title = {"SoshNet"} discription = {"Loren bla bla bla2"} />
                    <Project title = {"SoshNet"} discription = {"Loren bla bla bla2"} />

                </div>
            </div>
        </div>
    );
}

export default Projects;
