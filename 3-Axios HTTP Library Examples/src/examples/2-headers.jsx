import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';

const Headers = () => {
  const [joke, setJoke] = useState('Random dad joke');

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios(url, { headers: {Accept: 'application/json',},});
      setJoke(data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}> random joke </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );

};

export default Headers;

