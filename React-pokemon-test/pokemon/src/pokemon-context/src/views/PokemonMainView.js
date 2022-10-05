import React, { useContext } from 'react';
import { PokeContext, Text } from '../state/context/PokeContext';
import PokemonDescription from '../components/items/PokemonDescription';
import Pagination from '../components/common/Pagination';
import '../static/styles/main-view.scss';
import {LanguageSelector} from '../components/selectors/LanguageSelector';

const PokemonMainView = () => { 
    const { pokemon, loading, page, total,
        setPage
    } = useContext(PokeContext);

    console.log(pokemon)

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    };

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total - 1);
        setPage(nextPage);
    };
    
    return (
        <div className="main-pokemon">
            <div className="main-pokemon__header">
                <div style={{ display: 'flex', color: 'white', alignItems: 'center' }}>
                   <LanguageSelector />
                </div>
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>

            {loading ?
                (
                    <div className="main-pokemon__message">
                        <Text tid="LOADING"/>
                    </div>
                )
                : (
                    <div className="main-pokemon__container">
                        {
                            pokemon.map((poke, id, dictionaryUI) => (

                                <PokemonDescription
                                    key={id + 1}
                                    pokemon={poke}
                                    dictionary={dictionaryUI}
                                    // description={description}
                                />
                            ))
                        }
                    </div>

                )
            }
        </div>
    )

}

export default PokemonMainView;