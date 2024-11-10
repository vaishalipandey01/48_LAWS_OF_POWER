import React, { useState } from "react";
import reviews from "./data";
import Title from "./components/Title";
import Idea from "./components/Idea";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";


const App = () => {
  
        const[index,setIndex] =useState(0);
        function leftShiftHandler(){
          index-1 <0 ? setIndex(reviews.length-1):setIndex(index-1);

        };
        function rightShiftHandler(){
          index+1 ===reviews.length ?setIndex(0) : setIndex(index+1);

        };
        function surpriceShiftHandler(){
          const supriceIndex= Math.floor(Math.random()*reviews.length);
          setIndex(supriceIndex);

  };
  return (
   
      <div className="h-screen w-full flex flex-col bg-gradient p-4">
              <div className="mx-auto text-4xl sm:text-5xl md:text-6xl mt-8 sm:mt-11 font-extrabold text-center">
                   48 LAWS OF POWER
              </div>
          
              <p className="text-center text-sm sm:text-base md:text-lg font-medium mt-3">
                   ~ Robert Greene
              </p>
          
              <div className="mx-auto text-lg sm:text-xl p-2 sm:p-4">
                    <FaQuoteLeft />
              </div>
          
                 <Title review={reviews[index]} />
          
              <div className="mx-auto text-lg sm:text-xl p-2 sm:p-4">
                   <FaQuoteRight />
              </div>
          
                   <Idea review={reviews[index]} />
          
              <div className="flex justify-center gap-4 sm:gap-5 mt-8">
                  <button onClick={leftShiftHandler} className="text-3xl sm:text-5xl">
                     <FiChevronLeft />
                   </button>
                    <button onClick={rightShiftHandler} className="text-3xl sm:text-5xl">
                     <FiChevronRight />
                   </button>
              </div>
    
              <button
                    onClick={surpriceShiftHandler}
                    className="mx-auto w-28 sm:w-40 h-10 sm:h-12 mt-5 text-lg sm:text-xl rounded-md bg-gray-900 text-white"
                  >
                        New One!
              </button>
      </div>
    );
    
  
};

export default App;

