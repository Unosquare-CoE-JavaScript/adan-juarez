import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

const DetailScreen = ({ route, imageUrl }) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    return (
        <View>
            <View>
                <Image source={{ uri: imageUrl }} />
                <Text style={styles.text}>{selectedMeal.title}</Text>
            </View>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
            />
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient =>
                <Text key={ingredient}>{ingredient}</Text>
            )}
            <Text>Steps</Text>
            {selectedMeal.steps.map(step =>
                <Text key={step}>{step}</Text>
            )}
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        width: '100%',
    },
    detailItem: {
        width: 'auto',
        marginHorizontal: 8,
        fontSize: 12,
    },
})