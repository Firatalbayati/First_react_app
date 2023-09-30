import { people } from '../../../data';
import Person from './Person';


const List = () => {

  return (
    <div>
      {people.map((person) => {
        console.log(person);
         return <Person key={person.name} {...person} /> ;
         })}
    </div>
  );

};

export default List;