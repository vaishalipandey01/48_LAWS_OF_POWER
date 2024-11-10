

function Title(props) {
    const reviews = props.review;
   
    return ( 
        <div className=" font-bold mx-auto w-[70%] h-[3rem] flex  justify-center items-center">
            <h2 className="text-xl">{reviews.title}</h2>

        </div>
     );
}

export default Title;