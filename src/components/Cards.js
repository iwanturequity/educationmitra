import React from 'react'
import Card from './Card';

const Cards = ({courses}) => {
    let allCourses = [];
    
    // return as list of all courses 
    const getCourses = () => {
        Object.values(courses).forEach((courseCategories) => {
            courseCategories.forEach((course) =>{
                allCourses.push(course);
            })
        })
        return allCourses;
    }

  return (
    <div>
        {
        getCourses().map((course) => {
            return <Card key={course.id} course={course}/>
        })
      }
    </div>
  )
}

export default Cards;