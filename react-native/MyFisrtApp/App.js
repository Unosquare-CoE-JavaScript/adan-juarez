import { useEffect, useState } from 'react';
import {
  StyleSheet, View, FlatList, Button, 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler() {
    setModalIsVisible(!modalIsVisible)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }
  
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      //itemData of FlatList
      { text: enteredGoalText, id: Math.random().toString() }
    ])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id )
    })
  }

  const courses = (itemData) => {
    return <GoalItem 
      text={itemData.item.text} 
      id={itemData.item.id}
      onDeleteItem={deleteGoalHandler}
    />
  }
  return (
    <>
    <StatusBar style="light" />
     <View style={styles.appContainer}>
      <Button 
        title='Add New Goal' color="#a065ec" 
        onPress={startAddGoalHandler}
        
      />
      <GoalInput
        placeholder="Your course goal"
        title="Add goal"
        onAddHandler={addGoalHandler}
        visible={modalIsVisible}
        onCancel={endAddGoalHandler}
      /> 
      <View style={styles.goalsContainer}>
        <FlatList
          keyExtractor={(item, index) => {
            return item.id
          }}
          data={courseGoals} alwaysBounceVertical={false}
          renderItem={courses}
        />
      </View>
    </View>
    </>
   
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,

  },
});
