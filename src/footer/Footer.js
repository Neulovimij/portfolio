import React from "react";
import sContainer from './../common/styles/Container.module.css'
import s from './Footer.module.css';
import Project from "../projects/project/Project";


function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div className={s.name}>
                <h2 className={s.title}>Алексей Самаль</h2>
                </div>
                <div className={s.footer}>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>
                <p>&#169; 2021 Все права защищены</p>
            </div>
        </div>
    );
}

export default Footer;
