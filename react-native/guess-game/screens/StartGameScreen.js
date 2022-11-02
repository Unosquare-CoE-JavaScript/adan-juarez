import React, { useState } from 'react'
import {
    View, Alert, TextInput, StyleSheet,
    Text, Dimensions, useWindowDimensions,
    KeyboardAvoidingView, ScrollView
} from 'react-native'

import PrimatyButton from '../components/ui/PrimatyButton'
import ColorsBar from '../constants/colors.ios';
import Title from '../components/ui/Title.ios';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({
    onPickNumber
}) => {
    const [enteredNumber, setEnterNumber] = useState('');

    // it executes every time the app update the state
    const { width, height } = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnterNumber(enteredText);
    }

    function resetInputHandler() {
        setEnterNumber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //show alert
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return;
        }
        onPickNumber(chosenNumber)
    }

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
                    <Title>Guess my number</Title>
                    <Card>
                        <InstructionText text="Enter a number" />
                        <TextInput
                            style={styles.numberInput}
                            maxLength={2}
                            keyboardType="number-pad"
                            autoCapitalize='none'
                            autoCorrect={false}
                            value={enteredNumber}
                            onChangeText={numberInputHandler}
                        />
                        <View style={styles.btnContainer}>
                            <View style={styles.btnStyles}>
                                <PrimatyButton onPress={resetInputHandler}>Reset</PrimatyButton>
                            </View>
                            <View style={styles.btnStyles}>
                                <PrimatyButton onPress={confirmInputHandler}>Confirm</PrimatyButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen

// just renderized one, use better useWindowDimensions instead
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        //marginTop: deviceHeight < 400 ? 30 : 100,
        marginHorizontal: 20,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: ColorsBar.accent500,
        borderBottomWidth: 2,
        color: ColorsBar.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
    },
    btnStyles: {
        flex: 1,
    }
});