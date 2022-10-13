import RecentExpensesScreen from './RecentExpensesScreen'
import AllExpensesScreen from './AllExpensesScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomTabs = createBottomTabNavigator();

export const ExpensesOverviewScreen = () => {
    return (
      <BottomTabs.Navigator>
        <BottomTabs.Screen name="Recent Expenses" component={RecentExpensesScreen} />
        <BottomTabs.Screen name="All Expenses" component={AllExpensesScreen} />
      </BottomTabs.Navigator>
    )
  }

export default ExpensesOverviewScreen