import React from "react";
import sContainer from './../common/styles/Container.module.css'
import s from './Contacts.module.css';


function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <div>
                    <form className={s.contactsForm}>
                        <input className={s.contactsInput}/>
                        <input className={s.contactsInput}/>
                        <textarea/>
                    </form>
                </div>
                <div className={s.contacts}>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
