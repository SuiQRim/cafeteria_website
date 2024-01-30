import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:5145" });
Api.interceptors.request.use(request => requestInterceptor(request))

const requestInterceptor = (request) => {
   request.withCredentials = true;
   return request;
}
export default Api;