import React from 'react'
import { Provider } from 'react-redux';
import {store} from './state';
import './index.css';
import Counter from './components/Counter';
import { SetCounter } from './components/SetCounter';

function App() {
  return (
    <Provider store={store}>
        <React.StrictMode>
            <Counter /> 
            <SetCounter />
        </React.StrictMode>
        
    </Provider>
  );
}

export default App;