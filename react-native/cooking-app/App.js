import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import DetailScreen from './screens/DetailScreen';
//onject with 2 properties
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#351401' }
          }}>
            <Stack.Screen
              name="Meals Categories"
              component={CategoriesScreen}
              options={{
                title: 'All Categories',
              }}
            />
            <Stack.Screen
              name="Meals Overview"
              component={MealsOverviewScreen}
             /*  options={({ route, navigation }) => {
                const catId = route.params.categoryId;
                return {
                  title: catId,
                }
              }} */
            />
            <Stack.Screen 
              name="Meal Details"
              component={DetailScreen}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
