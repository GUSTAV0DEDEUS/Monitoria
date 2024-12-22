import axios from 'axios';

const baseUrl = "https://monitoria-fb90.onrender.com";

export async function getAllProperties(limit, offset) {
  try {
    const response = await axios.get(`${baseUrl}/list?limit=${limit}&offset=${offset}`);
    return response;
  } catch (error) {
    console.error("Erro na solicitação: ", error);
    throw error;
  }
}
