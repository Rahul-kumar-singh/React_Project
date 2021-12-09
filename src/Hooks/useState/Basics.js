import React,{useState} from "react";

const Basics = () =>{
    const [text,setText] = useState('Random Title');
    const handle = () =>{
        if(text ==='Random Title' ){
            setText("Hello");
        }
        else{
            setText("Random Title"); 
        }
         
    }
    return <>
       <h1>{text}</h1>
       <button className="btn btn-success" onClick={handle}>Change Title</button>
    </>
}
export default Basics;