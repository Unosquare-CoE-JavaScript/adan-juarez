import React from 'react'
import './pokemon-counter.scss'

const PokemonCounter = ({ initialCount, totalCount }) => {
  return (
    <li style={{display: "flex", flexDirection: "row"}}>
        <span>
           {" "} {initialCount} {" "}
        </span>
        <span>{" "} to {" "}</span>
        <span>{" "}{initialCount + 20}{" "}</span>
        <span> {" "}of{" "} </span>
        <span>{totalCount} </span>
    </li>
  )
}

export default PokemonCounter