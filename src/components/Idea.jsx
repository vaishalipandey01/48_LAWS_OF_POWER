import React from 'react'



function Idea(props) {
    const reviews = props.review;
    return ( 
       
         <div  className=" h-[40%] w-9/12 mx-auto bg-gray-900 rounded-lg">
       
             <ul >
                <p className=" font-mono text-l text-white p-3 ">
                {reviews.idea.split('\n').map((point, index) => (
                 <li key={index}>{point.trim()}</li>
               ))}
                </p>

             </ul>
          
       </div>
     );
}

export default Idea;