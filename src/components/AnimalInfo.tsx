import { IAnimal } from "../models/IAnimal";

interface IAnimalProps {
  animal: IAnimal;
  handleBack: () => void;
  clickToFeed: (animal: IAnimal) => void;
  disabled: boolean;
}

export const AnimalInfo = ({ animal, handleBack, clickToFeed, disabled }: IAnimalProps) => {
  const fallbackImg = '/nopic-logo.png';

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
        <button
          className='button-feed'
          onClick={() => clickToFeed(animal)}
          disabled={disabled}
        >
          MATA
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
