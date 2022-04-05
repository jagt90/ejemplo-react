import http, { apiEndpoint } from '../placeholderApi';

const endpoint = `${apiEndpoint}posts/`;

export async function getPosts(params) {
  return await http.get(`${endpoint}`, { params });
}
