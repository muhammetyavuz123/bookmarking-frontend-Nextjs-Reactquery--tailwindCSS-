import axios from "axios";

const backUrl = process.env.API_KEY;

axios.interceptors.request.use(
  function (config: any) {
    const { origin } = new URL(config.url!);
    const allowedOrigins = ["http://localhost:4000"];
    const token = localStorage.getItem("acces-token");

    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = token!;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const registerFetch = async (input: any) => {
  const { data } = await axios.post(
    `http://localhost:4000/auth/register`,
    input
  );
  return data;
};

export const loginFetch = async (input: any) => {
  const data = await axios.post(`http://localhost:4000/auth/login`, input);
  return data;
};

export const fetchMe = async () => {
  const { data } = await axios.get(`http://localhost:4000/auth/me`);
  return data;
};

export const logoutFetch = async () => {
  const { data } = await axios.post(`http://localhost:4000/auth/logout`, {
    refresh_token: localStorage.getItem("refresh-token"),
  });
  return data;
};
