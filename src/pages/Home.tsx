import "../style/home.scss";
import logo from "/logo-big.png";
import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { calculateHoursSinceFed } from "../functions/timeCalculation";

export const Home = () => {
  const [hungryAnimals, setHungryAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    const storedAnimals = sessionStorage.getItem("animals");
    if (storedAnimals) {
      const animals: IAnimal[] = JSON.parse(storedAnimals);

      const hungry = animals.filter(animal => {
        const hoursSinceFed = calculateHoursSinceFed(new Date(animal.lastFed));
        return hoursSinceFed >= 4; // Om djuret inte har matats på mer än 4 timmar
      });

      setHungryAnimals(hungry);
    }
  }, []); // Kör bara en gång när komponenten mountas

  return (
    <>
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
    </>
  );
};
