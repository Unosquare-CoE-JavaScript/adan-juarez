import React, { useContext, useState } from 'react'
import '../../static/styles/pokemon.scss'
import Modal from '../modal/Modal';
import { convertionWeight, convertionHeight } from '../../constants/convertions';
import { Text, PokeContext } from '../../state/context/PokeContext';

const PokemonDescription = (props) => {
    //console.log(props)
    const { pokemon, dictionary, 
        description, dictionaryPokemon,  
    } = props;
    console.log(pokemon)
    //console.log(dictionary)
    const [modalShown, toggleModal] = useState(false);
       
    return (
        <>
            <li data-testid="item-container" className="pokemon-item">
                <figure className="pokemon-item__fg">
                    <img className="pokemon-item__img"
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />
                </figure>

                <div className="pokemon-item__poke--info">
                    <p className="pokemon-item__number">
                        {" "}
                        <span className="pokemon-item__number--prefix">N.º{" "}{pokemon.id}</span>

                    </p>
                    <h5 className="pokemon-item__name">{pokemon.name}</h5>

                    <div className="pokemon-item__abilities">

                        {pokemon.types.map((type, id) => (
                            <span
                                key={id}
                                className={"pokemon-item__type"}
                            >{type.type.name}</span>
                        ))}
                    </div>
                </div>
                <div className="pokemon-item__card-bottom">
                    <button
                        className="pokemon-item__btn-more"
                        onClick={() => { toggleModal(!modalShown) }}
                    >
                        <Text tid="SHOW_MORE"/>
                    </button>
                </div>
            </li>
                            
            <Modal
                title={<Text tid="CLOSE"/>}
                shown={modalShown}
                close={() => { toggleModal(false) }}
            >
                <div className="pokemon__details_container">
                    <h2
                        onClick={() => { }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            textTransform: 'capitalize'
                        }}>
                        {pokemon.name}</h2>
                    <div className="pokemon__details_container--measures">
                        <h2 className="pokemon__details_container--title"><Text tid="MEASURES"/></h2>
                        <span className="pokemon__details_container-H"><Text tid="HEIGHT"/> </span>
                        {" "}
                        <span className="pokemon__details_container--Hnumber">{convertionHeight(props.pokemon.height)}{" "}m</span>
                        <span className="pokemon__details_container-W"><Text tid="WEIGHT"/>: {" "}</span>
                        <span className="pokemon__details_container-Wnum">{convertionWeight(props.pokemon.weight)}{" "}kg</span>
                    </div>
                    <div>
                        <h2 className="pokemon__details_container--title"><Text tid="ABILITIES"/></h2>
                        <div className="pokemon__details_container--sect">
                            {props.pokemon.abilities.map((ability, i) => {
                                return (
                                    <div key={i} id={i} className="pokemon__details_container--move-type">
                                        {ability.ability.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <h2 className="pokemon__details_container--title"><Text tid="DESCRIPTION"/></h2>
                        <div className="pokemon__details_container--sect">
                        {/* {props.pokemon.flavor_text_entries.map((description, i) => (
                            <h6 className="pokemon__details_container--Hnumber" key={i}>
                                {description.flavor_text}
                            </h6>
                            
                            ))} */}
                            {/*console.log(data.flavor_text.language.name)*/}
                        </div>
                    </div>
                    <div>
                        <h2 className="pokemon__details_container--title"><Text tid="MOVEMENTS"/></h2>
                        <div className="pokemon__details_container--sect">
                            {props.pokemon.moves.map((move, i) => {
                                return (
                                    <div key={i} id={i} className="pokemon__details_container--move-type">
                                        {move.move.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Modal>
        </>

    )
}

export default PokemonDescription;

