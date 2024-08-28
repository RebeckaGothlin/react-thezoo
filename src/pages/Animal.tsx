import '../style/animal.scss';
import { useNavigate, useParams } from "react-router-dom";
import { IAnimal } from '../models/IAnimal';
import { AnimalInfo } from '../components/AnimalInfo';
import { useEffect, useState } from 'react';
import { calculateHoursSinceFed } from '../functions/timeCalculation';
import { Spinner } from '../components/Spinner';

export const Animal = () => {
  const [disabled, setDisabled] = useState(false);
  const [animals, setAnimals] = useState<IAnimal[]>(() => {
    const storedAnimals = sessionStorage.getItem('animals');
    return storedAnimals ? JSON.parse(storedAnimals) : [];
  });

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const findAnimal = animals.find(animal => animal.id === Number(id));

  useEffect(() => {
    if (findAnimal) {
      const hoursSinceFed = calculateHoursSinceFed(new Date(findAnimal.lastFed));
      setDisabled(hoursSinceFed < 3);
    }
  }, [findAnimal]);

  const handleBack = () => {
    navigate('/animals');
  };

  const clickToFeed = (animal: IAnimal) => {
    const updatedAnimals = animals.map(a => 
      a.id === animal.id ? { ...a, isFed: true, lastFed: new Date().toLocaleString('sv-SE') } : a
    );

    setAnimals(updatedAnimals);
    sessionStorage.setItem('animals', JSON.stringify(updatedAnimals));
    setDisabled(true);
  };

  return (
    <>
      {findAnimal ? (
        <AnimalInfo
          animal={findAnimal}
          handleBack={handleBack}
          clickToFeed={clickToFeed}
          disabled={disabled}
        ></AnimalInfo>
      ) : (
        <Spinner />
      )}
    </>
  );
};