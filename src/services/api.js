import axios from 'axios';

const api = axios.create({
  baseURL: "http://192.168.0.12:3333"
});

export default api; 

// Para liberar porta
// json-server --watch db.json --port 8080
// Instalar ngrok
// ./ngrok http 8080