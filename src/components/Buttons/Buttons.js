import { PMedium } from "../StyleGuide/Typography/Typography";
import s from "./Buttons.module.scss" ;

import { BiCaretDown } from "react-icons/bi";
import ActiveContainer from "../StyleGuide/ActiveContainer/ActiveContainer";
import { IoAddSharp ,  IoTrash } from "react-icons/io5";

const DropdownItem = (props) => {
    const itemName = props.item;
    let selectVal = "aptDate";
        switch(itemName){
            case 'Name' :  selectVal =  'petName';
            break;
            case 'Owner' : selectVal = 'ownerName';
            break;
            default : selectVal = "aptDate"
        }
  
    return (
       <div className={s.dropdownItem}  onClick={() => props.selectSort(selectVal)}> <PMedium> {props.item}</PMedium></div>
    )
}


const Dropdown = (props)=> {

    const list = props.list;
    return(
            <div className={s.dropdown}>
                {list.map((item) => <DropdownItem item={item}  selectSort={ (selectVal) => props.selectSort(selectVal) } />)} 
            </div>
    )
}
 const SortByButton = (props) => {

    return(
        
        <ActiveContainer className="wrapContent">
        <div className={s.sortByButton} onClick= {props.onClick} >
             <PMedium>Sort by</PMedium>
             <BiCaretDown/>
        </div>
        </ActiveContainer>

       
        
    )
}

const AddButton = (props) => {


    return(
        
            <button aria-roledescription="add appointment" className={s.iconCTA} onClick={props.onClick}>
                <ActiveContainer className="wrapContent" >
                    <IoAddSharp />
                </ActiveContainer>
            </button>
        
    )
    
}


const DeleteButton = (props) => {

    return(
        
        <button className={s.deleteButton} onClick={props.onClick}>
                <IoTrash />
        </button>
    
)
}

export {SortByButton , Dropdown, AddButton , DeleteButton}
