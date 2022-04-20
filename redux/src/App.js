import React from 'react'
import { Provider } from 'react-redux';
import { store, storeCharacters, storeReuxToolkit } from './state';
import './index.css';
import Counter from './components/Counter';
import { SetCounter } from './components/SetCounter';
import Calculator from './components/connectAPI/Calculator';
import { Theme } from '@twilio-paste/core/theme';
import { CounterEx } from './components/counter/Counter';
import FetchCharacters from './components/thunk/FetchCharacters';
import Characters from './components/thunk/Characters';

function App() {
    return (
        // <Provider store={storeReuxToolkit}>
        // <Provider store={store}>
        <Provider store={storeCharacters}>
            <Theme.Provider theme="default">
                <React.StrictMode>
                    {/*  <Counter /> 
            <SetCounter /> */}
                    {/* <Calculator /> */}
                    {/* <CounterEx /> */}
                    <FetchCharacters />
                    <Characters />
                </React.StrictMode>
            </Theme.Provider>
        </Provider>
    );
}

export default App;