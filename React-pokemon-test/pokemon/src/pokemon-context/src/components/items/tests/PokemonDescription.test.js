import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PokemonDescription from '../PokemonDescription';

jest.mock("../PokemonDescription", () => {
    return  function PokemonDescriptionComponentFake(props) {
        return(
            <div data-testid="poke-descr">
                {props.title}
            </div>
        )
    }
 });


