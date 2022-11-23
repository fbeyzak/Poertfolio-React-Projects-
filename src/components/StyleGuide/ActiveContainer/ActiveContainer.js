import s from "./ActiveContainer.module.scss"


export default function ActiveContainer(props){

    console.log(`${s.container} ${s[props.className]}`)

    const variant = (props.variant !== undefined) ? props.variant : "solid";
    return(
        <div className={`${s.container} ${s[props.className]} `}>
             <div className={s[variant]}>
                {props.children}
            </div>
        </div>
           
        )
    
}