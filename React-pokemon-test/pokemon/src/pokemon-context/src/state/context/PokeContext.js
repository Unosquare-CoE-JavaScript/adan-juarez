import React, { createContext, useState, useEffect, useContext } from 'react';
import {
    getPokemon, getPokemonData, getPokemonDescriptionData
} from '../../services/poke_api';
import { languageOptions, dictionaryList } from '../../translations/languages';

export const PokeContext = createContext({
    userLanguage: 'en',
    dictionary: dictionaryList.es,
    descriptionLang: 'en'
});

const PokemonProvider = (props) => {
    const { match } = props;
    const defaultLanguage = window.localStorage.getItem('rcml-lang');

    const [pokemon, setPokemon] = useState([]);
    const [description, setDescription] = useState([]);
    const [searchPokemon, getSearchPokemon] = useState({
        name: '',
        number: '',
        type: []
    });
    const [id,setId] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [search, savedSearch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [userLanguage, setUserLanguage] = useState(defaultLanguage || "en");
    const [clickText, setClickText] = useState();
    const [selectedOption, setSelectedOption] = useState();

    const { name, number, type } = searchPokemon;

    const getAllPokemon = async () => {
        try {
 
            setLoading(true);
            const data = await getPokemon(20, 20 * page);
            let dataPoke = data.results.map(async (pokemon) => {
                let pokemonD = await getPokemonData(pokemon.url)
                return pokemonD;
            })

            let pokeData = await Promise.all(
                dataPoke
            )
                
            
            setPokemon(pokeData);
            setLoading(false);
            setTotal(Math.ceil(data.count / 5));
            setNotFound(false);
            
        } catch (err) {
            console.log(err)
        }
    };

    const getDescription = async () => {
        try {
 
            setLoading(true);
            const data = await getPokemon(5, 5 * page);
           
            
        } catch (err) {
            console.log(err)
        }
    };
    
    // const getDescription = async () => {
    //     try {
    //         const data = await getPokemon(5, 5 * page);
    //         let dataPokeDesc = data.results.map(async (pokemon) => {
    //             let pokemonDes = await getPokemonData(pokemon.url)
    //             let pokeDes = pokemonDes.species
    //             let descr = getPokemonData(pokeDes)

    //             return descr;
    //         })

    //         let pokeDataDes = await Promise.all(
    //             dataPokeDesc
    //         )

    //         setPokemon(pokeDataDes)
    //         const res = await descriptionPokemon(pokemon);
    //         console.log(res)
    //         const pokeUrl = res.res.flavor_text_entries
    //         let descrPokemon = pokeUrl.map(async (descriptions) => {
    //             let pokeDescurl = descriptions
    //             console.log(pokeDescurl)
    //             return pokeDescurl

    //         })

    //         const ans = descrPokemon.filter((lang) => {
    //             console.log(lang.flavor_text.url)
    //             if (lang.language.name === "en")

    //                 return lang.flavor_text
    //         });

    //         setPokemon({ pokeUrl });

    //     } catch (err) { }
    // }

    useEffect(() => {
        if (!search) getAllPokemon();
    }, [page]);
    //show pokemon by 5
    useEffect(() => {
        getAllPokemon()
        getDescription()
    }, []);

    useEffect(() => {
        setNotFound(notFound)
    }, []);

    const providerValuePoke = {
        pokemon,
        getSearchPokemon,
        savedSearch,
        loading,
        page,
        total,
        setPage,
        notFound,
        description,
        setDescription,
        match,
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: selected => {
            const newLanguage = languageOptions[selected] ? selected : 'en'
            setUserLanguage(newLanguage);
            window.localStorage.setItem('rcml-lang', newLanguage);
        },
        clickText, setClickText,
        selectedOption, setSelectedOption
    }

    return (
        <PokeContext.Provider
            value={providerValuePoke}
        >
            {props.children}
        </PokeContext.Provider>
    )
}

/* export const translateDescriptions = () => {
    const dataLangCntx = useContext(PokeCOntext)
} */

export function Text({ tid }) {
    const languageContext = useContext(PokeContext);

    return languageContext.dictionary[tid] || tid;
};

export default PokemonProvider;