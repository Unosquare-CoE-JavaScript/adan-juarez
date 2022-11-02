import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const GoalItem = ({ text, onDeleteItem, id }) => {
    return (

        <View style={styles.textStyle}>
            <Pressable
                onPress={onDeleteItem.bind(this, id)}
                android_ripple={{ color: '#5e0acc' }}
                style={({pressed}) => pressed && styles.pressedItem }
            >
                <Text style={styles.textColorWhite}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 10,
        margin: 8,
        borderRadius: 5,
        backgroundColor: '#5e0acc',
        fontWeight: '500',
        color: 'white'
    },
    textColorWhite: {
        padding: 8,
        color: 'white',
        fontSize: 15
    },
    pressedItem: {
        opacity: 0.5,

    },
})