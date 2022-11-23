
import s from  "./PageHeading.module.scss" 
import {BiCalendarWeek} from "react-icons/bi";
import {H3} from "../StyleGuide/Typography/Typography"
 
const PageHeading = () => {

        return(
            <div className={s.pageHeading}>
                 <BiCalendarWeek/>

                 <H3> Your Appointments </H3>
            </div>
        )
}



export  {PageHeading};