import { LoaderFunction } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { getAnimal } from "../services/AnimalService";

export const animalsLoader: LoaderFunction = async () => {
  try {
    const storedAnimals = sessionStorage.getItem("animals");
    if (storedAnimals) {
      return JSON.parse(storedAnimals) as IAnimal[];
    }

    const animals = await getAnimal();
    if (animals) {
      sessionStorage.setItem("animals", JSON.stringify(animals));
      return animals;
    }
    
    throw new Error("Failed to fetch animals");
  } catch (error) {
    console.error("Loader Error: ", error);
    throw error;
  }
};