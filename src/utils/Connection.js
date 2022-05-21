import axios from "axios";
import { BACKEND_URL } from "../Assets/Constants/index";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const fetchClient = () => {
  const defaultOptions = {
    baseURL: `${BACKEND_URL}`,
  };

  let instance = axios.create(defaultOptions);

  instance.interceptors.request.use((config) => {
    console.log(config);
    const token = cookies.get("token");
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    console.log(token);
    return config;
  });

  return instance;
};

export default fetchClient();
