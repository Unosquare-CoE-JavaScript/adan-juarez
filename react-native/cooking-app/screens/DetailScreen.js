import {
    View, Text, StyleSheet, Image,
    ScrollView,
    Button
} from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
//import { ScrollView } from 'react-native-gesture-handler';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../components/MealDetail/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

const DetailScreen = ({ route, navigation }) => {
    //const favoriteMealsCtx = useContext(FavoritesContext);
    const dispatch = useDispatch();
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    /* const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    Context
    function changeFavoriteStatusHandler() {
       if(mealIsFavorite) {
        favoriteMealsCtx.removeFavorite(mealId)
       } else {
        favoriteMealsCtx.addFavorite(mealId)
       }
    } */

    //redux
    const mealIsFavorite = favoriteMealIds.includes(mealId);
    
    function changeFavoriteStatusHandler() {
        if(mealIsFavorite) {
            dispatch(removeFavorite({ id: mealId }))
        } else {
            dispatch(addFavorite({ id: mealId }))
        }
     }
    //console.log(mealIsFavorite)
    //console.log(selectedMeal.imageUrl)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton 
                    icon={mealIsFavorite ? 'star' : 'star-outline'}
                    color="white"
                    onPress={changeFavoriteStatusHandler}
                />
            )
        })
    }, [navigation, changeFavoriteStatusHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.text}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    text: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        marginVertical: 10,
        fontSize: 20,
        textOverflow: 'ellipsis'
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
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
    image: {
        width: '100%',
        height: 200,
    },
})