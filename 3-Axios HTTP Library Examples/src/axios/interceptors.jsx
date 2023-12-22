import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://course-api.com',
});

authFetch.interceptors.request.use(

  (request) => {
    request.headers['Accept'] = 'application/json';

    console.log('request success');
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }

);

authFetch.interceptors.response.use(

  (response) => {
    console.log('respons success');
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      console.log('NOT FOUND');
    }
    return Promise.reject(error);
  }

);

export default authFetch;

