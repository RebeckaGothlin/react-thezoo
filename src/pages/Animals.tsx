import '../style/animal.scss';
import { useLoaderData } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { Spinner } from '../components/Spinner';
import { AnimalsPresentation } from '../components/AnimalPresentation';

export const Animals = () => {
  const animals = useLoaderData() as IAnimal[]; // Hämta laddade data
  const isLoading = animals.length === 0; // Kontrollera om data är laddad

  if (isLoading) return <Spinner />;

  return (
    <>
      <h1>Våra Djur</h1>
      <AnimalsPresentation animals={animals} />
    </>
  );
};