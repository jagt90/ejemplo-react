import http, { apiEndpoint } from '../../adsisApi';

const endpoint = `${apiEndpoint}Movimientos/`;

export async function getGastos(params) {
  return await http.get(`${endpoint}Select`, { params });
}
