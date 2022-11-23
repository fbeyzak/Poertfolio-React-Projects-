import s from "./Box.module.scss"

export default function Box(props){

 
    const boxType = (props.boxType !== undefined) ? props.boxType : "primary";
    const variant = (props.variant !== undefined) ? props.variant : "solid";

    console.log((props.Variant !== undefined) ? props.box : "solid");
    return(
        <div className={`${s[boxType]} ${s[variant]} `}>
            {props.children}
        </div>
    )

}