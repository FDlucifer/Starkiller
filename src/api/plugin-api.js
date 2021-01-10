import { axiosInstance as axios } from '@/api/axios-instance';

/**
 * Returns a full list of plugins.
 */
export function getPlugins() {
  return axios.get('/plugin/active')
    .then(({ data }) => data.plugins)
    .catch(error => Promise.reject(error.response.data.error));
}

/**
 * Returns a plugin by name.
 * This endpoint appears to be broken atm, we just grab the plugin from the list.
 */
export function getPlugin(name) {
  return axios.get(`/plugin/${name}`)
    .then(({ data }) => data)
    .catch(error => Promise.reject(error.response.data.error));
}

/**
 * Execute a plugin command.
 */
export function executePlugin(name, options) {
  return axios.post(`/plugin/${name}`, options)
    .then(({ data }) => data)
    .catch(error => Promise.reject(error.response.data.error));
}
