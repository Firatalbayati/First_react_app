import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('Firat');  

  const codeExample = text || 'hello world';

return (
 <div>

   <table className='table'>
       <tr>
          <th>Falsy OR   :</th>
          <th>{text || 'hello world'}</th>
       </tr>
       <tr>
          <th>Falsy AND  :</th>
          <th>{text && 'hello world'}</th>
       </tr>
       <tr>
          <th>Truthy OR  :</th>
          <th>{name || 'hello world'}</th>
       </tr>
       <tr>
          <th>Truthy AND :</th>
          <th>{name && 'hello world'}</th>
       </tr>
   </table>

       {codeExample}

</div>

  );
};

export default ShortCircuitOverview;