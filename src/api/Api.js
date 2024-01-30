import axios from "axios";

const Api = axios.create({ baseURL: "https://localhost:7118" });
Api.interceptors.request.use(request => requestInterceptor(request))

const requestInterceptor = (request) => {
   request.withCredentials = true;
   return request;
}
export default Api;