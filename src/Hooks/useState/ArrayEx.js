import React,{useState} from 'react';
import Data from './Data';
const ArrayEx = () =>{
    const [people,setPeople] = useState([Data]);
    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
      };
      return (
        <>
          {people.map((person) => {
            const { id, name } = person;
            return (
              <div key={id} className="item">
                <h4>{name}</h4>
                <button className="btn btn-warning " onClick={() => removeItem(id)}>remove</button>
              </div>
            );
          })}
          <button className='btn btn-success' onClick={() => setPeople([])}>
            clear items
          </button>
        </>
      );
};
export default ArrayEx;