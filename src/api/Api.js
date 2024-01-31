import axios from "axios";

const Api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL});
Api.interceptors.request.use(request => requestInterceptor(request))

const requestInterceptor = (request) => {
   request.withCredentials = true;
   return request;
}
export default Api;