import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon-item.styles.scss';


const PokemonItem = ({ name, linkTo }) => {
    return (
        <Link to={`/pokemon/${linkTo}`}>
            <div className='pokemon-item pokemons__pokemon'>
                <div className='pokemon-body'>
                    <h5 className='pokemon-title'>{name}</h5>
                </div>
            </div>
        </Link>
    )
}

export default PokemonItem;