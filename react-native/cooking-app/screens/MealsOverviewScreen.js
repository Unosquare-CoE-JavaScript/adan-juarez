import { View, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useRoute } from '@react-navigation/native'

import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import CategoryGridTile from '../components/CategoryGridTile'

const MealsOverviewScreen = ({ route, navigation }) => {
  //use it with nested components routes the useRoute()
  //const route = useRoute();
 const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId)
      .title;
    
      navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
    }

    return <MealItem {...mealItemProps} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  ) 
 
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})