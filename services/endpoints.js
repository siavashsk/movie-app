import { api } from "./axios";

export const GET = async (url) => {
  return await api
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const config = {
  headers: { "Content-Type": "application/json" },
};

export const POST = async (url, body) => {
  return await api.post(url, body, config);
};

export const UPDATE = async (url, body) => {
  return await api.patch(url, body);
};

export const DELETE = async (url) => {
  return await api.delete(url);
};
