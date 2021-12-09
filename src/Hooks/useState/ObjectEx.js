import React,{useState} from 'react';
const ObjectEx = () =>{
    const [person,setPerson] = useState({
        name:'peter',
        age:28,
        message:'Random Message'
    });
    const changeMessage = () =>{
        setPerson({...person,message:"hello world"});
    }
return <>
         <h3>{person.name}</h3>
         <h3>{person.age}</h3>
        <h3>{person.message}</h3>
        <button className='btn btn-warning' onClick={changeMessage}>Change Message</button>
       </>
}
export default ObjectEx;