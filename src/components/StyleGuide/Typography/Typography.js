
import s from "./Typography.module.scss"

const getTextColor = (props) => (props.textType != undefined) ? s["s"]  : s["dc"]; 

 function Display(props){
    const textType = getTextColor(props);
    
    return(
            <span className={`${s.display} ${s[textType]} `}>{props.children}</span>
    )
}


 function H1(props){
    const textType = getTextColor(props);

    return(
        <h1 className={`${s.h1} ${s[textType]}`}>{props.children}</h1>
    )
}
 function H2(props){
    const textType = getTextColor(props);
    return(
        <h2 className={`${s.h2} ${s[textType]}`}>{props.children}</h2>
    )
}
 function H3(props){
    const textType = getTextColor(props);
    return(
        <h3 className={`${s.h3} ${s[textType]}`}>{props.children}</h3>
    )
}
 function H4(props){
    const textType = getTextColor(props);
    return(
        <h4 className={`${s.h4} ${s[textType]}`}>{props.children}</h4>
    )
}
 function H5(props){
    const textType = getTextColor(props);
    return(
        <h5 className={`${s.h5} ${s[textType]}`}>{props.children}</h5>
    )
}

 function PLarge(props){
    const textType = getTextColor(props);

    return(
        <p className={`${s.p_large} ${s[textType]}`}>{props.children}</p>

    )
}

 function PMedium(props){
    const textType = getTextColor(props);

    return(
        <p className={`${s.p_medium} ${s[textType]}`}>{props.children}</p>
    )
}
 function PSmall(props){
    const textType = getTextColor(props);

    return(
        <p className={`${s.p_small} ${s[textType]}`}>{props.children}</p>
    )
}

export {Display ,  H1 , H2 , H3, H4, H5, PLarge, PMedium, PSmall }