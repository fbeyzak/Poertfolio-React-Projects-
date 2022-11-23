
import s from "./AddAppointmentModal.module.scss"
import Box from "../StyleGuide/Box/Box";
import { useState } from "react";

export const AddAppointmentModal = ( props) => {

    const  modalIsShown = props.modalIsShown;
    const classes = modalIsShown ? `${s.modal}` :  `${s.modal} ${s.hidden}`;
        return(

                <div className={classes}>
                    

                        <p className={s.x} onClick ={() => props.toggleModalIsShown(!modalIsShown)}>x</p>
                </div>
        )
}