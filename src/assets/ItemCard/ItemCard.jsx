import {v4 as uuidv4} from 'uuid';
import UnsortedList from "./../UnsortedList/UnsortedList";
import './ItemCard.scss'
import './../UnsortedList/UnsortedList.scss'

const ItemCard = (props) => {

    // console.log(props);
    return ( 
        <article className='item_card_wrapper'>
            <div className="item_card_top">
                <h2>{props.emoji}</h2>
                <h3>{props.name}</h3>
                <h4>{props.species}</h4>
                <h4>{props.habitat}</h4>
                <h4>{props.diet}</h4>
                <h5>{props.lifespan} years</h5>
            </div>
            <div className="item_card_bottom">
                {props.funFacts.map((funFact) => <UnsortedList
                key={uuidv4()}
                funFact={funFact}/>)}
            </div>
        </article>
    );
}

export default ItemCard
