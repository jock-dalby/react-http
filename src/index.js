import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// This is global and will catch all requests from all components
const requestInterceptor = axios.interceptors.request.use(requestConfig => {
  console.log('axios', requestConfig);
  // Can edit the requestConfig with headers/ keys etc.

  // Always need to return requestConfig otherwise the request will be blocked
  return requestConfig;
}, error => {
  // This only receives errors related to sending the request (e.g. no connectivity)
  console.log('Sending error:', error);
  // If do nto return the error this will swallow all errors and will not be forwarded to original request
  return Promise.reject(error);
})

// NOTE: To remove interceptor we call
// axios.interceptors.request.eject(requestInterceptor); and
// axios.interceptors.request.eject(responseInterceptor);

const responseInterceptor = axios.interceptors.response.use(response => {
  console.log('axios', response);
  // Can view / edit the response

  // Always need to return response otherwise it will not be forwarded to component
  return response;
}, error => {
  // This only handles errors returned from the sent request
  console.log('Response error', error);
  // If do nto return the error this will swallow all errors and will not be forwarded to original request
  return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
