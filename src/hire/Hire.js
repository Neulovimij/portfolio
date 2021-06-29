import React from "react";
import sContainer from './../common/styles/Container.module.css'
import s from './Hire.module.css';



function Hire() {
    return (
        <div className={s.hireBlock}>
            <div className={`${sContainer.container} ${s.hireContainer}`}>
                <h2 className={s.title}>Рассматриваю варианты удаленной работы</h2>
                <div className={s.hire}>
                   <button>Hire Me</button>
                </div>
            </div>
        </div>
    );
}

export default Hire;
