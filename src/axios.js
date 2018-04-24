import axios from 'axios';

// creates an instance of axios (a copy of the axios object)
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

// Set auth token for all requests
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;