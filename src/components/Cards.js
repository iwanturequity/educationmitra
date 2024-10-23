import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {

   let courses = props.courses;
   let categories = props.categories;

  const [likedCourses , setlikedCourses] = useState([]);

    
    // return as list of all courses 
    function getCourses()  {
      if(categories === "All"){
        let allCourses = [];
         Object.values(courses).forEach((courseCategories) => {
             courseCategories.forEach((course) =>{
                 allCourses.push(course);
             })
         })
         return allCourses;
      }
      else{
        return courses[categories];
      }
      
    }

    return (
      <div className='flex flex-wrap justify-center gap-4 mb-4 '>
          {
          getCourses().map((course) => {
            
              return <Card key={course.id} course={course}
              likedCourses={likedCourses}
              setlikedCourses={setlikedCourses} 
              />

          })
        }
      </div>
    )
}

export default Cards;