import React from 'react';
import PokemonCard from '../components/pokemon-card/PokemonCard';
import { useLocation, Link } from 'react-router-dom';
import { Container } from '../components/container/container.component';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemonList } from '../redux/pokemon/pokemon.action';

export const PokemonView = (props) => {
    const location = useLocation()
    return (
        <Container>
            <Link to={location}>
            <div style={{cursor: "pointer", display: "flex", marginLeft: "auto"}}>
                Back
            </div>
            </Link>
            <div>
                <PokemonCard />
            </div>
        </Container>
    )
}
