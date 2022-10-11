import { View, Text, Pressable, StyleSheet, Image, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MealItem = ({
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    onPress,
    id
}) => {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('Meal Details', {
            mealId: id,
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerStyle}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealItem 
                        duration={duration}
                        affordability={affordability}
                        complexity={complexity}
                    />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        //ios
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
    },
    innerStyle: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.5,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8,
        margin: 8,
    },
 
})