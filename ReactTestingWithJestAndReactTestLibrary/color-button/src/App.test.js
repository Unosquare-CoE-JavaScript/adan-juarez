import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { toHaveStyle, toBeEnabled, toBeChecked, toBeDisabled } from '@testing-library/jest-dom'
import App from './App'
import { replaceCamelWithSpaces } from './utils/replaceCamelWithSpaces'

test('button has the correct initial color', () => {
    render(<App />)
    //find an element with a role of button and text of ´change to blue'
    const colorButton = screen.getByRole('button', { name: 'Change to blue' })

    // expect the background to be red
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

    //click button
    fireEvent.click(colorButton)

    //expect the background color to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

    //expect the button text to be 'change to red'
    expect(colorButton.textContent).toBe('Change to red')
})

test('initial conditions', () => {
    render(<App />)

    const colorButton = screen.getByRole('button', { name: 'Change to blue' })
    expect(colorButton).toBeEnabled()

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
})

test('checkbox disables button on first click and enables on sceond click', () => {
    render(<App />)
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
    const button = screen.getByRole('button', { label: 'Change to blue' })

    fireEvent.click(checkbox)
    expect(button).toBeDisabled()

    fireEvent.click(checkbox)
    expect(button).toBeEnabled()
})

test('Clicked disabled button has gray background and reverts to red', () => {
    render(<App />)
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
    const colorButton = screen.getByRole('button', { label: 'Change to blue' })

    // disable button
    fireEvent.click(checkbox)
    expect(colorButton).toHaveStyle('background-color: gray')

    // re-eneable button
    fireEvent.click(checkbox)
    expect(colorButton).toHaveStyle('background-color: red')
})

test('Clicked disabled button has gray background and reverts to blue', () => {
    render(<App />)
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
    const colorButton = screen.getByRole('button', { label: 'Change to blue' })
    // change button to blue
    fireEvent.click(checkbox)

    // disable button
    fireEvent.click(checkbox)
    expect(colorButton).toHaveStyle('background-color: gray')

    // re-eneable button
    fireEvent.click(checkbox)
    expect(colorButton).toHaveStyle('background-color: blue')
})

// mediumVioledtRed  Midnight Blue
describe('spaces before camel-case capital letters', () => {
    test('Works for no inner capital letters', () => {
        expect(replaceCamelWithSpaces('Red')).toBe('Red')
    })

    test('Works for one inner capital letters', () => {
        expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
    })

    test('Works for multiple inner capital letters', () => {
        expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
    })
})