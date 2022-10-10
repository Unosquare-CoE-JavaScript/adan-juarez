import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ColorsBar from '../../constants/colors.ios'

const InstructionText = ({text, style}) => {
  return <Text style={[styles.instText, style]}>{text}</Text>
}

export default InstructionText

const styles = StyleSheet.create({
    instText: {
        fontFamily: 'open-sans',
        color: ColorsBar.accent500,
        fontSize: 24,
    },
})