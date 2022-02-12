import axios from "axios";

const backUrl = process.env.API_KEY;

export const fetchProducts = async (page = 1) => {
  const { data } = await axios.get(
    `http://localhost:4000/product?page=${page}`
  );
  console.log("url", backUrl);
  return data;
};

export const fetchProduct = async (id: string | string[] | undefined) => {
  const { data } = await axios.get(`http://localhost:4000/product/${id}`);

  return data;
};

export const deleteProduct = async (id: string | string[] | undefined) => {
  const { data } = await axios.delete(`http://localhost:4000/product/${id}`);

  return data;
};

export const updateProduct = async (id: any, input: any) => {
  const { data } = await axios.put(
    `http://localhost:4000/product/${id}`,
    input
  );

  return data;
};

export const postProduct = async (input: any) => {
  const { data } = await axios.post(`http://localhost:4000/product/`, input);
  return data;
};
