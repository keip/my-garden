import axios from "axios";
import { Plant } from "../types/plant";

const BASE_URL = "http://localhost:8080";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getPlants = async () => {
  return (await axiosInstance.get<Plant[]>("plants")).data;
};

export const addPlant = async (plant: Plant) => {
  return (await axiosInstance.post<Plant>("plants", { plant })).data;
};

export const waterPlant = async (plantId: number) => {
  return (await axiosInstance.put<Plant>(`plants/${plantId}/water`)).data;
};
