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
    <div>

      <div className="h-[100vh] w-[100vw] flex flex-col  bg-gradient ">
        {/* <div className="bg-blue-600  mx-auto items-center  text-2xl capitalize ">for worlds 1% readers!</div> */}

      <div className=" mx-auto text-6xl mt-11 font-extrabold">48 LAWS OF POWER</div>
       
       <p className=" ml-[67%] mt-3 font-medium"> ~robert greene</p>

        <div className="mx-auto text-xl p-4"> <FaQuoteLeft /></div>

        <Title  review={reviews[index]}/>

        <div className="mx-auto text-xl p-4">  <FaQuoteRight /></div>

        <Idea review={reviews[index]}/>
        
        <div className="flex mx-auto gap-5  m-4 justify-center rounded-md mt-9">

          <button onClick={leftShiftHandler} className="text-5xl"> <FiChevronLeft /></button>

          <button onClick={rightShiftHandler} className="text-5xl"><FiChevronRight /></button>

        </div>

        <button onClick={surpriceShiftHandler} className=" mx-auto text-white 
        rounded-md bg-gray-900 w-40 h-8 mt-5 text-xl">New One!</button>
      </div>
      
    </div>
  )
};

export default App;
