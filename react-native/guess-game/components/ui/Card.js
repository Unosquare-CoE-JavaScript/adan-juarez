import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import ColorsBar from '../../constants/colors.ios'

const Card = ({children}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({ 
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: ColorsBar.primary800,
        // add shadow
        //android
        elevation: 8,
        //ios: with shadow properties
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
})