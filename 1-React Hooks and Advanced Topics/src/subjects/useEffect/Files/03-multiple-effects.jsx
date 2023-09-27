import { useState, useEffect } from 'react';

const MultipleEffects = () => {
  const [firstValue, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log('hello from first useEffect');
  }, [firstValue]);

  useEffect(() => {
    console.log('hello from second useEffect');
  }, [secondValue]);

//   useEffect(() => {
//     console.log('hello from generic useEffect');
//   }, [firstValue,secondValue]);

  return (
    <div>
      <h1>first value : {firstValue}</h1>
      <button className='btn btn-success' onClick={() => setValue(firstValue + 1)}>
      first value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className='btn btn-success' onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );

};
export default MultipleEffects;