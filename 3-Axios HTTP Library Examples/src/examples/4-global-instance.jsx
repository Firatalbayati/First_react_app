import { useEffect } from 'react';

import authFetch from '../axios/global';
import axios from 'axios';

const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch('/react-store-products');
      console.log(resp1);
      const resp2 = await axios(randomUserUrl);
      console.log(resp2);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>Global instance</h2>;
};
export default GlobalInstance;
