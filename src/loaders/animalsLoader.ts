import { IAnimal } from "../models/IAnimal";
import { getAnimal } from "../services/AnimalService";


export interface IAnimalsLoader {
  animalList: IAnimal[];
  error: string;
}

export const animalsLoader = async (): Promise<IAnimalsLoader> => {
  const data: IAnimalsLoader = { animalList: [], error: '' };
const response = await getAnimal();
  try {
    
    if (response) {
      data.animalList = response;
    } else {
      data.error = 'No response from the API';
    }
  } catch (error) {
    console.error('An error occurred:', error);
    data.error = 'Something went wrong. Please try again later.';
  }

  return data;
};