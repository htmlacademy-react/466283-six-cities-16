import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';

const URL_API = 'https://16.design.htmlacademy.pro/six-cities';
const REQUEST_TIME = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: URL_API,
    timeout: REQUEST_TIME,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return api;
};
