import { useEffect, useState } from "react";
import s from "./Checkbox.module.scss";

export function Checkbox(props){
    
    const label = props.label != "undefined" ? props.label : "";
    const hasLabel = label !== "";
    const name = `checkbox_${props.name}`

    // automatic styling
    const checkboxType = (props.boxType !== undefined) ? props.boxType : "primary";
    const variant = (props.variant !== undefined) ? props.variant : "outlined";

    // state
    const [isChecked , setIsChecked]  = useState(false);

    const handleCheck = () => setIsChecked((prev) => !prev)
    
    return(

        <div className={s.container}>
        {// Hide this native checkbox - still exists for screen readers 
        }
            <input className={s.native_checkbox} type="checkbox" onChange={handleCheck} name={name} value={props.name}/>
        
            {// Custom Checkbox hide from aria
        }
            <div className={`${s["checkbox"]}  ${s[checkboxType]} ${s[variant]}`} aria-hidden="true" onClick={handleCheck}>
              {isChecked && <span className={s.check} />}  
            </div>

            { hasLabel && <span className={s.label}> {label}</span>}
        </div>
    )

}