import axios from 'axios';
import { apiDetails } from '../config/appConfig';
const { baseUrl } = apiDetails;

export const getRatsList = async () => {
  const { data } = await axios.get(`${baseUrl}/rat-names`);
  return data;
};

export const getRatDetails = async (ratName: string) => {
  const { data } = await axios.get(`${baseUrl}/rat/${ratName}`);
  return data;
};
