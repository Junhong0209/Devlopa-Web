import axios, { AxiosError, AxiosInstance } from "axios";
import Config from "src/config/config.json";

import { refresh } from "src/utils/refresh";

export const request: AxiosInstance = axios.create({
  baseURL: Config.SERVER_IP,
  timeout: 100000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const instance = axios.create({
  baseURL: Config.SERVER_IP,
});

instance.interceptors.request.use(refresh);

instance.interceptors.response.use(
  function (res) {
    return res;
  },
  function (err: AxiosError) {
    return Promise.reject(err);
  }
);
