import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import s from "./Search.module.scss";
import { PMedium } from "../StyleGuide/Typography/Typography";
import { SortByButton } from "../Buttons/Buttons";
import { Dropdown } from "../Buttons/Buttons";

 const Search = (props) => {

    const [dropdownOn , setDroprownOn] = useState(false);


    const toggleDropdownOn = () => {
        console.log(dropdownOn)
        setDroprownOn((prev) => !prev)
    };
    return (
        <div className={s.container}>
        <div className={s.search}>

            <div className={s.start}>
            <BiSearch/>
            <input type="text" placeholder="Search" className={s.input} onChange = {(event) => props.filterSearch(event.target.value)}/> 
            </div>

            
            <SortByButton onClick={() => toggleDropdownOn()}/>
            
        </div>

       { dropdownOn && <Dropdown list={props.list} selectSort={selectVal => { toggleDropdownOn(); props.selectSort(selectVal)}}/>}
        </div>
    )
}

export {Search}