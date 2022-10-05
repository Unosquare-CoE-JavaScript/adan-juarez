import React from 'react';
import '../../static/styles/header.scss';

const Header = () => {
    let imgUrl = "https://assets.pokemon.com/assets/cms2-es-xl/img/misc/gus/buttons/logo-pokemon-79x45.png"
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__catched">
                    <img src={imgUrl} alt="pokeapi-logo" />
                </div>
            </div>
        </header>
    )
}

export default Header
