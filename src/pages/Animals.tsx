import "../style/animal.scss";
import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { AnimalPresentation } from "../components/AnimalPresentation";
import { Spinner } from "../components/Spinner";
import { getAnimal } from "../services/AnimalService";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>(() => {
    const storedAnimals = sessionStorage.getItem("animals");
    return storedAnimals ? JSON.parse(storedAnimals) : [];
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        if (animals.length === 0) {
          const response = await getAnimal();
          if (response) {
            sessionStorage.setItem("animals", JSON.stringify(response));
            setAnimals(response);
          }
        }
      } catch (error) {
        console.error("Error fetching animals:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnimals();
  }, [animals.length]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1>Våra djur</h1>
          <AnimalPresentation animals={animals}></AnimalPresentation>
        </>
      )}
    </>
  );
};
