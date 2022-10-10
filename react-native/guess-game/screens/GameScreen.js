import { View, Text, StyleSheet, Alert, FlatList, useWindowDimensions } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { Ionicons } from '@expo/vector-icons/'
import Title from '../components/ui/Title.ios'
import NumberContainer from '../components/game/NumberContainer';
import PrimatyButton from '../components/ui/PrimatyButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}


let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess])
    const { width, height } = useWindowDimensions()

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'higher' && currentGuess > userNumber)
        ) {
            Alert.alert('Don´t lie', 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' }
            ])
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            userNumber
        );
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds])
    }

    const guessRoundsListLength = guessRounds.length;

    const lists = (itemData) => {
        return <GuessLogItem
            roundNumber={guessRoundsListLength - itemData.index}
            guess={itemData.item}
        />
    }

    let content = <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <View style={styles.btnContainer}>
                <View style={styles.btn}>
                    <PrimatyButton onPress={nextGuessHandler.bind(this, 'higher')}>
                        <Ionicons name="md-add" size={24} color="white" />
                    </PrimatyButton>
                </View>
                <View style={styles.btn}>
                    <PrimatyButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white" />
                    </PrimatyButton>
                </View>
            </View>
        </Card>
    </>

    if (width > 500) {
        content =
            <>
                <InstructionText style={styles.instTexto} text="Higher or lower!" />
                <View style={styles.btnsContainerWide}>
                    <View style={styles.btnContainer}>
                        <View style={styles.btn}>
                            <PrimatyButton onPress={nextGuessHandler.bind(this, 'higher')}>
                                <Ionicons name="md-add" size={24} color="white" />
                            </PrimatyButton>
                        </View>
                        <NumberContainer>{currentGuess}</NumberContainer>
                        <View style={styles.btn}>
                            <PrimatyButton onPress={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name="md-remove" size={24} color="white" />
                            </PrimatyButton>
                        </View>
                    </View>
                </View>

            </>

    }

    return (
        <View style={styles.screen}>
            <Title>Opponent´s Game</Title>
            {content}
            <View style={styles.flatContainer}>
                {/* {guessRounds.map((guessRound) => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList
                    keyExtractor={(item) => item}
                    data={guessRounds}
                    alwaysBounceVertical={false}
                    renderItem={lists}
                />
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,

    },
    instTexto: {
        marginBottom: 10,
    },
    btnContainer: {

        flexDirection: 'row',
        width: '100%',
    },
    btn: {
        flex: 1,
        height: 50,
    },
    flatContainer: {
        flex: 1,
        padding: 16,
        
    },
    btnsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})