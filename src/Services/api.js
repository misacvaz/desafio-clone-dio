import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8001', // Verifique se a URL está correta
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };
