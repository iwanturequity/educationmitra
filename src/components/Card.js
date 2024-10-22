import React from 'react';
import { FcLike } from "react-icons/fc";

const Card = (props) => {
    let course = props.course;
  return (
    <div className='w-[300px] bg-blue-950 bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative '>
            <img src={course.image.url}></img>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-1
            grid place-items-center '>
                <button>
                    <FcLike fontSize="1.75rem"/>
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
