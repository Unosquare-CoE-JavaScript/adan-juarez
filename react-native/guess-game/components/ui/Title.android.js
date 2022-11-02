import { View, Text, StyleSheet, Platform } from 'react-native'
import ColorsBar from '../../constants/colors.ios'

const Title = ({children}) => {
  return  <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        fontWeight: 'bold',
        color: ColorsBar.light,
        textAlign: 'center',
        borderWidth: 2,
        //borderWidth: Platform.OS === 'android' ? 2 : 0, one form
       // borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderColor: ColorsBar.light,
        padding: 12,
        maxWidth: '100%',
     

    }
})