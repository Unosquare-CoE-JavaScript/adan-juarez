import React, { Fragment, useEffect } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import MainPokemonView from '../views/MainPokemonView.component'
import PokemonView from '../views/PokemonView'

const Navigation = () => {
  return (
    <div>
    <Switch>
      <Route path={"/"} exact component={MainPokemonView} />
      <Route path={"/pokemon/:pokemon"} exact component={PokemonView} />
      <Redirect to={"/"} />
    </Switch>
    </div>
  )
}

export default Navigation