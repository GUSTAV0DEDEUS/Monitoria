import axios from 'axios';

const baseUrl = "https://monitoria-fb90.onrender.com/property";

export async function allModifiedItemsService() {
  try {
    const response = await axios.get(`${baseUrl}/group/modified`);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function allInactiveItemsService() {
  try {
    const response = await axios.get(`${baseUrl}/group/inactive`);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function allAmountPropertiesService() {
  try {
    const response = await axios.get(`${baseUrl}/amount`);
    return response;
  } catch (e) {
    console.log(e);
  }
}
