import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  // const [enteredText, setEnteredText] = useState('');
  const [courseGoals, setCourseGoal] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  console.log("TO BE RE-RENDER: ");
  console.log(courseGoals);

  const addGoalList = enteredValue => {
    if(enteredValue.length === 0){
      return;
    }
    setCourseGoal(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredValue }]);
    setIsShowModal(false);
  }

  const removeGoalHandler = goalId => {
    console.log("TO BE DELETED: ");
    console.log(courseGoals);
    setCourseGoal(currentGoals => {
      //only want to keep items which their id do not match with the pressed item's id
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const onCancelHandler = () =>{
    setIsShowModal(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsShowModal(true)} />
      <GoalInput visible={isShowModal} onAddInput={addGoalList} onCancel={onCancelHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            value={itemData.item.value}
            onDelete={removeGoalHandler}
          // onDelete={removeGoalHandler.bind(this, itemData.item.id)} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
