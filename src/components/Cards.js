import React from 'react'
import Card from './Card';

const Cards = (props) => {

   let courses = props.courses;
    
    // return as list of all courses 
    function getCourses()  {
       let allCourses = [];
        Object.values(courses).forEach((courseCategories) => {
            courseCategories.forEach((course) =>{
                allCourses.push(course);
            })
        })
        return allCourses;
    }

    return (
      <div className='flex flex-wrap justify-center gap-4 mb-4 '>
          {
          getCourses().map((course) => {
              return <Card key={course.id} course={course}/>
          })
        }
      </div>
    )
}

export default Cards;