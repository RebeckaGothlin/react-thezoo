import { useLoaderData } from "react-router-dom"
import { IAnimal } from "../models/IAnimal"

export const Animal = () => {
    const animal = useLoaderData() as IAnimal;
    return <>
        <section>
            <h2>{animal.name}</h2>
            <div>
                <img src={animal.imageUrl} alt={animal.name} />
            </div>
            <p>{animal.latinName}</p>
            <p>{animal.longDescription}</p>
        </section>
    </>
}