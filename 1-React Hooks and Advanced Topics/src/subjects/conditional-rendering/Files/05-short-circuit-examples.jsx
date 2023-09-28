import { useState } from 'react';

const ShortCircuitExamples = () => {
 
  const [text, setText] = useState(''); //false
  const [name, setName] = useState('Firat'); //true
  const [user, setUser] = useState({ name: 'Mert' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>

        <h2>{text || 'default value'}</h2>

        {text && (<div><h2> whatever return</h2><h2>{name}</h2></div>)}

        {!text && <h4>also works</h4>}

        <button className='btn btn-success'> {isEditing ? 'edit' : 'add'}</button>

        {user ? (<div><h4>hello there user {user.name}</h4></div>) : (<div><h2>please login</h2></div>)}

        {user && <SomeComponent name={user.name} />}

    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <hr></hr>
      <h4>hello there, {name}</h4>
      <button className='btn btn-danger'>log out</button>
    </div>
  );
};


export default ShortCircuitExamples;