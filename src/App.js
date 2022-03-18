import React from 'react'
import { Provider } from 'react-redux';
import { store } from './state';
import './index.css';
import Counter from './components/Counter';
import { SetCounter } from './components/SetCounter';
import Calculator from './components/connectAPI/Calculator';
import { Theme } from '@twilio-paste/core/theme';

function App() {
    return (
        <Provider store={store}>
            <Theme.Provider theme="default">
                <React.StrictMode>
                    {/*  <Counter /> 
            <SetCounter /> */}
                    <Calculator />
                </React.StrictMode>
            </Theme.Provider>
        </Provider>
    );
}

export default App;