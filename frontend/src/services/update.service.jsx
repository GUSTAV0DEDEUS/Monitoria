import axios from "axios"
const baseUrl = "https://monitoria-fb90.onrender.com/list"

export default async function UpdateService(queryParam) {
  try {
    const response = await axios.get(`${baseUrl}/${queryParam}`);
    return response
  } catch (e) {
    console.log(e)
  }
}
