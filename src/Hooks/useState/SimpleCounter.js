import React,{useState} from 'react';
let SimpleCounter = ()=>{
    const[value,setValue] = useState(0);
    const reset = ()=>{
        setValue(0);
    };
    return <>
            <section style={{margin:'4rem 0'}}>
              <h2>Regular Counter</h2>
              <h1>{value}</h1>
              <button className='btn btn-success' onClick={()=> setValue(value - 1)} >Decrease</button>
              <button className='btn btn-primary' onClick={reset}>Reset</button>
              <button className='btn btn-warning' onClick={()=> setValue(value + 1)}>Increase</button>
            </section>
           </>

}
export default SimpleCounter;