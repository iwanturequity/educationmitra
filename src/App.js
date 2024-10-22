
import React, { useEffect, useState } from'react';
import { apiUrl, filterData} from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { toast } from 'react-toastify';
import Card from './components/Card';
import Spinner from './components/Spinner';



const App =  () => {

  const [courses , setCourses] = useState(null);
  const [loading , setloading ] = useState(true);
  
  async function fetchData(){
    setloading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      //output aayega fetch data ka 
      setCourses(output.data);
    }
    catch(error){
      toast.error("Failed to fetch data");
    }
    setloading(false);  // loading state false karega after fetching data
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      <div>
      <Navbar />
      </div>

      <div>
      <Filter 
      filterData={filterData}
      />
      </div>

      <div className=' w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] '>
      {
        loading ? ( <Spinner/> ) : ( <Cards courses={courses}/> )
      }
      </div>
      
    </div>
    
  );
}; 

export default App;
