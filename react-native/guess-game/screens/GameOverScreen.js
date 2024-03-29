import { View, Text, Image, StyleSheet, Dimensions, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title.ios'
import ColorsBar from '../constants/colors.ios'
import PrimatyButton from '../components/ui/PrimatyButton'

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
    const { width, height } = useWindowDimensions()

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/success.png')}
                    />
                </View>
                <Text style={styles.summaryText}>Your phone needed{' '}
                    <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guesss the number{' '}
                    <Text style={styles.highlight}>{userNumber}</Text>
                </Text>
                <PrimatyButton onPress={onStartNewGame}>Start New Game</PrimatyButton>
            </View>
        </ScrollView>
    )
}

export default GameOverScreen

//const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        //borderRadius: deviceWidth > 380 ? 75 : 150,
        //width: deviceWidth > 380 ? 150 : 300,
        //height: deviceWidth > 380 ? 150 : 300,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: ColorsBar.primary800,
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: ColorsBar.primary500,
    }
})