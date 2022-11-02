import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import ColorsBar from '../../constants/colors.ios';

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({ 
    container: {
        borderWidth: 4,
        borderColor: ColorsBar.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: ColorsBar.accent500,
        fontSize: deviceWidth < 380 ? 26 : 36,
        fontWeight: 'bold',
    }
})