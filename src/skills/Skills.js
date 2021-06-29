import React from "react";
import s from './Skills.module.css';
import sContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";



function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title = {"HTML"} discription = {"Loren bla bla bla1"} />
                    <Skill title = {"JS"} discription = {"Loren bla bla bla2"} />
                    <Skill title = {"React"} discription = {"Loren bla bla bla3"} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
