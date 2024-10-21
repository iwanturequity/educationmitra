import React from 'react';
import { fcLike } from "react-icons/fa";

const Card = ({course}) => {
  return (
    <div>
        <div>
            <img src={course.image.url}></img>

            <div>
                <button>
                    <fcLike fontSize="1.75rem"/>
                </button>
            </div>
        </div>
        <div>
            <p>{course.title}</p>
            <p>{course.description}</p>
        </div>

        
    </div>
  )
}

export default Card ;
