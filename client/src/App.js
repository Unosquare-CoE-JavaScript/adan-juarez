import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Routes from './navigation/Routes';

class App extends Component {
    render() {
        return(
            <div>
                <Routes />
            </div>
        )
    }
}

export default App