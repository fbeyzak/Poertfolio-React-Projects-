import s from "./Appointment.module.scss"
import { SiDatadog } from "react-icons/si";
import { H5, PSmall } from "../StyleGuide/Typography/Typography";
import { DeleteButton } from "../Buttons/Buttons";

const AppointmentCard = (props) => {
    const data = props.data;

    return(
        <div className={s.appointmentCard}>
          
           <div style={{display: "flex" , alignItems:"flex-start", gap: "4px"}}>
            
            <SiDatadog/>

            <div className={s.col}  style={{display: "inline-block" }}>
                <H5> {data.petName}</H5>
                <span> <span className={s.smallTitle}>Owner : </span> {data.ownerName}</span>
                <div className={s.notes}>
                        {data.aptNotes}
                </div>
            </div>
        	</div>
            <PSmall>{data.aptDate}</PSmall>  

            <DeleteButton onClick={() => props.deleteAppointment(data.id)}/>
           
        </div>
    )
}


export  { AppointmentCard };