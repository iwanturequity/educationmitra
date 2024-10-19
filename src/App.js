
import React, { useEffect, useState } from'react';
import './App.css';
import { apiUrl, filterData} from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { toast } from 'react-toastify';


function App() {

  //const [courses , setCourses] = useState();
  useEffect( () => {
    const fetchData = async() =>{
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        // save into a variable
        console.log(data);
      }
      catch(eroor){
        toast.error("Something went wrong");
      }
    }
    fetchData();
  },[]);


  return (
    <div>
      <Navbar />

      <Filter 
      filterData={filterData}
      />

      <Cards />
    </div>
    
  );
}; 

export default App;
