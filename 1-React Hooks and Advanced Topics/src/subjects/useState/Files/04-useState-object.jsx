import { useState } from "react";

const UseStateObject = () => {  
    const [person, setPerson] = useState({name: 'Fırat',age: 29,hobby: 'Photographer',});
    // const [name, setName] =  useState('Fırat');  
    // const [age, setAge] = useState(29); 
    // const [hobby, setHobby] = useState('Photographer'); 

const displayPerson = () => {
    // setPerson({ name: 'mert', age: 26, hobby: 'read books' });
    // setPerson({ name: 'mert' }); 
    // setName('mert');
    // setAge(26);
    // setHobby('read books');
    setPerson({...person, name: 'Vatan'})
};
          return (
          <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>Enjoys : {person.hobby}</h4>
            <button className="btn btn-success" onClick={displayPerson}>Change</button>
           </>
    );
};

export default UseStateObject
