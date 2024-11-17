import axios from 'axios';
import {
  requestErrorHandler,
  requestInterceptor,
  responseErrorHandler,
  responseInterceptor,
} from './AxiosHelperMethods';

// Define the base URL
const baseUrl = 'https://crudcrud.com/api/ab643670a58749deb9e38e18cb9f6dda';

// Create an Axios instance with the base URL
const axiosApi = axios.create({
  baseURL: baseUrl, // Corrected: use `baseURL` instead of `baseUrl`
});

// Add request and response interceptors to the Axios instance
axiosApi.interceptors.request.use(requestInterceptor, requestErrorHandler);
axiosApi.interceptors.response.use(responseInterceptor, responseErrorHandler);

export default axiosApi;
