import React, { useEffect, useState } from 'react';
import { replaceCamelWithSpaces } from './utils/replaceCamelWithSpaces';

const App = () => {
    const [color, setColor] = useState('red')
    const [disabled, setDisabled] = useState(false)

    const newColor = color === 'red' ? 'blue' : 'red'

    const changeColor = () => {
        setColor(newColor)
    }

    console.log(disabled)
    console.log(color)

    return (
        <div>
            <button 
                style={{ backgroundColor: disabled ? 'gray' : color }}
                onClick={changeColor} 
                disabled={disabled}
            >
                Change to {newColor}
            </button>
            <input 
                type="checkbox"
                id="disable-button-checkbox"
                aria-checked={disabled}
                defaultChecked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
            />
            <label htmlFor="disable-button-checkbox">Disable button</label>
        </div>
    )
}

export default App