import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ColorsBar from '../../constants/colors.ios';

const GuessLogItem = ({roundNumber, guess}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Game: {guess}</Text>
    </View>
  )
}

export default GuessLogItem;

const styles = StyleSheet.create({ 
    listItem: {
        borderColor: ColorsBar.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 20,
        marginVertical: 8,
        backgroundColor: ColorsBar.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'open-sans'
    }
})