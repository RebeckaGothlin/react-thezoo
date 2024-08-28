import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

interface IAnimalsPresentationProps {
  animals: IAnimal[];
}

export const AnimalsPresentation = ({ animals }: IAnimalsPresentationProps) => {
  return (
    <section>
        {animals.map((animal) => (
            <div key={animal.id}>
                <h1>{animal.name}</h1>
                <div>
                    <img src={animal.imageUrl} alt="" />
                </div>
                <Link to={`/animal/${animal.id}`}>Läs mer</Link>
            </div>
        ))}
    </section>
  );
};