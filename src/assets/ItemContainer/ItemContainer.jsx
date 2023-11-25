import ItemCard from '../ItemCard/ItemCard';
import animals from '../data/animals';
import { v4 as uuidv4 } from 'uuid';
import './ItemContainer.scss'

// console.log(animals[0].funFacts);

const ItemContainer = () => {
    return ( 
        <section className="item_container">
            {animals.map((animal) => <ItemCard 
            key={uuidv4()}
            emoji={animal.emoji}
            name={animal.name}
            species={animal.species}
            habitat={animal.habitat}
            diet={animal.diet}
            lifespan={animal.lifespan}
            funFacts={animal.funFacts}/>
            )}
        </section>
    );
}

export default ItemContainer;