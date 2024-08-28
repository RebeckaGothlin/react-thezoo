import { createContext, useContext, useState, ReactNode } from 'react';
import { IAnimal } from '../models/IAnimal';

interface IAnimalContextValue {
  animals: IAnimal[];
  setAnimals: React.Dispatch<React.SetStateAction<IAnimal[]>>;
}

const AnimalContext = createContext<IAnimalContextValue | undefined>(undefined);

interface AnimalProviderProps {
  children: ReactNode;
}

export const AnimalProvider: React.FC<AnimalProviderProps> = ({ children }) => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  return (
    <AnimalContext.Provider value={{ animals, setAnimals }}>
      {children}
    </AnimalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAnimalContext = () => {
  const context = useContext(AnimalContext);

  if (context === undefined) {
    throw new Error('useAnimalContext must be used within an AnimalProvider');
  }

  return context;
};
