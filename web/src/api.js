import axios from 'axios';
const API_BASE = import.meta.env.VITE_API_BASE || 'https://engagesense-1708.onrender.com/api';
export async function uploadFile(file) {
  const form = new FormData();
  form.append('file', file);
  const res = await axios.post(`${API_BASE}/upload`, form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
}
export async function listDocuments() {
  const res = await axios.get(`${API_BASE}/documents`);
  return res.data;
}
export async function getDocument(id) {
  const res = await axios.get(`${API_BASE}/documents/${id}`);
  return res.data;
}
