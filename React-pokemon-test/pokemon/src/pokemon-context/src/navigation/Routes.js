import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TitleComponent from './TitleComponent';
import PokemonMainView from '../views/PokemonMainView';
import '../static/styles/container.scss';


import Header from '../components/common/Header';

const Routes = () => {
    return (
        <Router>
            <Header />
            <div className="route_cont">
                <Switch>
                    <Route exact path="/">
                        <TitleComponent title="Pokemon API Dacodes" />
                        <PokemonMainView />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;