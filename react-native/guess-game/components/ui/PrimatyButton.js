import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import ColorsBar from '../../constants/colors.ios'

const PrimatyButton = ({
    children,
    onPress,
}) => {
    
    return (
    <View style={styles.buttonOuterContainer}>
        <Pressable 
            style={
                ({pressed}) =>  pressed 
                ? [styles.buttonInnerContainer, styles.pressed] 
                : styles.buttonInnerContainer
            } 
            onPress={onPress} 
            android_ripple={{ color: ColorsBar.primary600}}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
    )
}

export default PrimatyButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: ColorsBar.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    container: {
        backgroundColor: ColorsBar.primary500,
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 4,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,

    }
});
