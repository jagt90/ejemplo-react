import HttpClient from '../../utils/httpClient';

//La configuracion de variables de entorno para react siempre deben comenzar con REACT_APP para que las tome en cuenta
const endpoint = process.env.REACT_APP_PLACEHOLDER_API_URL;
const http = new HttpClient({ baseURL: endpoint }).init();

// //set custom request interceptors
// http.setRequestInterceptors((config) => config);

export default http;
export const apiEndpoint = endpoint;
