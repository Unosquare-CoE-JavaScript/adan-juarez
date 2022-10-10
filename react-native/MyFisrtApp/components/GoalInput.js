import { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal, Image } from 'react-native'

export default function GoalInput({
    placeholder,
    onAddHandler,
    title,
    visible,
    onCancel
}) {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);

    }

    function addGoalHandler() {
        onAddHandler(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} 
                    source={require('../assets/images/goal.png')} 
                    //source={require('./assets/images/goal.png')} 
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={placeholder}
                    onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title={title}
                            onPress={addGoalHandler}
                            color='#b18080'
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            onPress={onCancel}
                            color='#f31282'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        width: '100%',
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '70%',
        height: 30,
        fontSize: 15,
        marginLeft: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },    
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 8
    },
    button: {
        width: 100,
        marginHorizontal: 16
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})