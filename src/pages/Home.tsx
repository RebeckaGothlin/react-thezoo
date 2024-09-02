import "../style/home.scss";
import logo from "/logo-big.png";
import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { calculateHoursSinceFed } from "../functions/timeCalculation";
import { getAnimal } from "../services/AnimalService"; 
import { Spinner } from "../components/Spinner";

export const Home = () => {
  const [hungryAnimals, setHungryAnimals] = useState<IAnimal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const storedAnimals = sessionStorage.getItem("animals");
        let animals: IAnimal[] = [];

        if (storedAnimals) {
          animals = JSON.parse(storedAnimals);
        } else {
          const response = await getAnimal(); 
          if (response) {
            sessionStorage.setItem("animals", JSON.stringify(response));
            animals = response;
          }
        }

        const hungry = animals.filter(animal => {
          const hoursSinceFed = calculateHoursSinceFed(new Date(animal.lastFed));
          return hoursSinceFed >= 4; 
        });

        setHungryAnimals(hungry);
      } catch (error) {
        console.error("Error fetching animals:", error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchAnimals();
  }, []);

  return (
    <>
      {isLoading ? ( 
        <Spinner />
      ) : (
        <div className="home-img">
          <div className="home-info">
            <div className="logo-container">
              <img src={logo} alt="the zoo logo" width={375} />
            </div>
            <div className="hungry-animals">
              <h2>Hungriga djur</h2>
              {hungryAnimals.length > 0 ? (
                <ul>
                  {hungryAnimals.map((animal) => (
                    <li key={animal.id}>{animal.name}</li>
                  ))}
                </ul>
              ) : (
                <p>Inga djur är hungriga just nu.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
