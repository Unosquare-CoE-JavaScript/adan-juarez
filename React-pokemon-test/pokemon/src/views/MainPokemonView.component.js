import React, { useState, useEffect } from 'react'
import { Container, PokemonContainer } from '../components/container/container.component';
import PokemonItem from '../components/pokemon-item/PokemonItem.component';
import PokemonMarkCount from '../components/pokemon-mark-count/pokemon-mark-count.component';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemonList } from '../redux/pokemon/pokemon.action';
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import _ from "lodash";

const MainPokemonView = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.PokemonList);

  useEffect(() => {
    FetchData(1)
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page))
  }

  const ShowData = () => {
    if (pokemonList.loading) {
      return <p>Loading...</p>
    }

    if (!_.isEmpty(pokemonList.data)) {
      return(
        <div className={"list-wrapper"}>
          {pokemonList.data.map(el => {
            return(
              <div className={"pokemon-item"}>
                <p>{el.name}</p>
                <Link to={`/pokemon/${el.name}`}>View</Link>
              </div>
            )
          })}
        </div>
      )
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>
    }

    return <p>unable to get data</p>
  };

  return (
    <Container>
      <PokemonMarkCount />
       {ShowData()}
      <PokemonContainer>
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )}
      </PokemonContainer>
      <PokemonMarkCount />
    </Container>
  )
}

export default MainPokemonView;