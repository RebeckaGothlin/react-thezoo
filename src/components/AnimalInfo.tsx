import { IAnimal } from "../models/IAnimal";
import { calculateHoursSinceFed } from '../functions/timeCalculation';

interface IAnimalProps {
  animal: IAnimal;
  handleBack: () => void;
  clickToFeed: (animal: IAnimal) => void;
  disabled: boolean;
}

export const AnimalInfo = ({ animal, handleBack, clickToFeed, disabled }: IAnimalProps) => {
  const fallbackImg = '/nopic-logo.png';
  
  const hoursSinceFed = calculateHoursSinceFed(new Date(animal.lastFed));
  
  const getFeedingStatusText = (hours: number) => {
    if (hours < 3) return "Har fått mat.";
    if (hours < 4) return "Börjar bli hungrig.";
    return "Behöver bli matad!";
  };

  const feedingStatusText = getFeedingStatusText(hoursSinceFed);

  return (
    <div className='animal-presentation'>
      <div className='animal-presentation-header'>
        <button
          className='button-back material-symbols-outlined'
          onClick={handleBack}>
          arrow_back_ios_new
        </button>
      </div>

      <h1 className='animal-name'>{animal?.name}</h1>
      <p><strong>Födelseår:</strong> {animal?.yearOfBirth}</p>

      <div className='animal-image-container'>
        <img
          className='animal-image'
          src={animal?.imageUrl}
          alt={animal?.name}
          width={300}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = fallbackImg;
          }}
        />
      </div>

      <div className='animal-text-container animal-short-desc'>
        <span className='animal-about'>OM</span>
        <p><span className='text-bold'>Latinskt namn: </span>{animal?.latinName}</p>
        <p>{animal?.longDescription}</p>
        <p><span className='text-bold'>Mediciner:</span> {animal?.medicine}</p>
        <p><span className='text-bold'>Senast matad:</span> {animal?.lastFed}</p>
        <p className={`animal-feeding-status ${hoursSinceFed < 3 ? 'isFed' : (hoursSinceFed < 4 ? 'gettingHungry' : 'isHungry')}`}>
          {feedingStatusText}
        </p>
        <button
          className='button-feed'
          onClick={() => clickToFeed(animal)}
          disabled={disabled}
        >
          MATA DJUR
        </button>
      </div>
      <div 
        className='animal-presentation-footer' 
        onClick={handleBack}>
        <button 
          className='button-back material-symbols-outlined' 
          onClick={handleBack}>arrow_back_ios_new </button>
      </div>
    </div>
  );
};
