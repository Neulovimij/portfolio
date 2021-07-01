import React from "react";
import s from './Project.module.css';




function Project(props) {
    return (
        <div className={s.project}>
           <div className={s.iconContainer}>
               <a className={s.button}>Посмотреть</a>
           </div>
            <h3>{props.title}</h3>
            <span className={s.discription}>{props.discription}</span>
        </div>
    );
}

export default Project;
