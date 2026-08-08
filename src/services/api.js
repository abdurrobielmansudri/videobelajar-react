// src/services/api.js
import axios from 'axios';

// Membuat instance Axios dengan baseURL dari file .env (Vite)
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// 1. Fungsi untuk Mengambil Data Courses (GET)
export const getCourses = async () => {
  try {
    const response = await API.get('/courses');
    return response.data;
  } catch (error) {
    console.error('Gagal mengambil data kursus:', error);
    return [];
  }
};

// 2. Fungsi untuk Cek Login User (GET)
export const loginUser = async (email, password) => {
  try {
    const response = await API.get('/users');
    const users = response.data;

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    return foundUser;
  } catch (error) {
    console.error('Gagal melakukan login:', error);
    return null;
  }
};

// 3. Fungsi untuk Mendaftarkan User Baru (POST)
export const registerUser = async (userData) => {
  try {
    const response = await API.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Gagal melakukan registrasi:', error);
    return null;
  }
};