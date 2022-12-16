import axios from 'axios';

const url = "http://localhost:3001/books";

export const getAllBooks = async() => {
  const {data} = await axios.get(url);
  return data;
}

export const postBook = async (title) => {
  const {data} = await axios.post(url, title);
  return data;
}

export const putBook = async (title, id) => {
  const { data } = await axios.put(`${url}/${id}`, {title});
  return data;
}

export const deleteBook = async (id) => {
  const { data } = await axios.delete(`${url}/${id}`);
  return data;
}