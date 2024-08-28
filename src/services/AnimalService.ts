import { IAnimal } from "../models/IAnimal";
import { get } from "./ServiceBase";

const BASE_URL = 'https://animals.azurewebsites.net/api/animals'

export const getAnimalAPI = async(): Promise<IAnimal[] | undefined> => {
    const response = await get<IAnimal[]>(`${BASE_URL}`);
    return response;
}