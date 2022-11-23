

import {PageHeading} from "./components/PageHeading/PageHeading";
import { Search } from "./components/Search/Search";
import {AppointmentCard } from "./components/Appointment/Appointment";
import { AddButton } from "./components/Buttons/Buttons";
import { AddAppointmentModal } from "./components/AddAppointmentModal/AddAppointmentModal";
import { useCallback, useEffect, useState } from "react";

function App() {


  // get the data from "database"
  const [appointments , setAppointment] = useState([]);

  const [modalIsShwon , setModalIsShown] = useState(false);
  const [query , setQuery] = useState("");
  const [sortBy , setSortBy] = useState("aptDate");
  const [sortOrder , setSortOrder] = useState("asc");

  const fetchData = useCallback(() => {
    fetch("./data.json").then(response => response.json())
      .then(data =>setAppointment(data))
  } , [])

  useEffect(() => { 
                    fetchData() ;
                  
                  }
  , [])



  const filteredSearch = appointments.filter((data) => {

            return (
              data.petName.toLowerCase().includes(query.toLowerCase()) ||
              data.ownerName.toLowerCase().includes(query.toLowerCase())||
              data.aptNotes.toLowerCase().includes(query.toLowerCase())
            )
              
            
            }
        ).sort(
          (a, b) => {
            let order = (sortOrder === "asc") ? 1 : -1;

            return (
                      a[sortBy] .toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : order
                      
                    )
          }
        )
       




  function toggleModalIsShown(){
    console.log(modalIsShwon)
      setModalIsShown((prev) => !prev)
  };
  

  function deleteAppointment(id){
    const result = appointments.filter((data) => data.id !== id);
    
    setAppointment(result)
     console.log(appointments)
                            
  }
 
  function selectSort(val) {

  }
  
  
  return (
    
    <div className="App" >

      <AddAppointmentModal modalIsShown = {modalIsShwon} toggleModalIsShown={toggleModalIsShown}/>
      <AddButton onClick={toggleModalIsShown}/>
      <div className="scrollContent">
      <PageHeading/>

      <div className="content">
        <Search filterSearch={(val) => setQuery(val)} list={[ "Date" ,"Name" , "Owner"]}  selectSort={(selectVal) =>  setSortBy(selectVal)}/>

        <div className="apppointments">
    	    { 
            filteredSearch.map(
              (data) => <AppointmentCard data={data} key={data.id} deleteAppointment={(id) => deleteAppointment(id)}></AppointmentCard>
            )
          }
        </div>

      </div>
        
      </div>
    
    </div>
  )
}

export default App;
