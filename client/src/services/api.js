import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000' });

export async function getBooks(){
  const res = await api.get('/books');
  return res.data;
}

export async function getBook(id){
  const res = await api.get(`/books/${id}`);
  return res.data;
}

export async function addBook(book){
  const res = await api.post('/books', book);
  return res.data;
}

export async function updateBook(id, book){
  const res = await api.put(`/books/${id}`, book);
  return res.data;
}

export async function deleteBook(id){
  const res = await api.delete(`/books/${id}`);
  return res.data;
}

export default api;
