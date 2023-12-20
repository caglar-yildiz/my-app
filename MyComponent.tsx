import React from 'react';
import {View, StyleSheet, TextInput, Button, Text, TouchableOpacity,useColorScheme, ScrollView} from 'react-native';

const MyComponent = () => {

  const [enteredGoal, setEnteredGoal] = React.useState('');
  const [goalsList, setGoalsList] = React.useState<string[]>([]);
  const colorScheme = useColorScheme();
  const getCardStyles = () => {
    if (colorScheme === 'dark') {
      return styles.darkCard;
    }
    console.log(colorScheme);
    return styles.lightCard;
  };
  const addGoalHandler = () => {
    setGoalsList(prevGoalsList => [...prevGoalsList, enteredGoal]);
    setEnteredGoal('');
  };


  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.appContainer}>
        <View style={styles.inputContainer} >
            <TextInput style={styles.textInput} onChangeText={setEnteredGoal} placeholder="Enter Your Goal"  value={enteredGoal}/>
            <View style={styles.buttonContainer}>
              <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
        </View>
        <View style={styles.goalsContainer} >
          <ScrollView>
        {goalsList.map((goal, index) => (
          <View style={getCardStyles()} key={index} >
            <TouchableOpacity  onPress={() => console.log(goal)} >
              <Text style={styles.cardTitle}>{goal}</Text>
              <Text style={styles.cardContent}>{goal}</Text>
            </TouchableOpacity>
          </View>
        ))}
        </ScrollView>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  goalsContainer: {
    flex: 5,
  },
  textInput: {
    flex: 1,
    backgroundColor: 'rgba(190,207,194,1)',
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 10,
    padding : 10,
    
  },
  buttonContainer : {
    height: 40,
  },  
  lightCard: {
    backgroundColor: '#41f069',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  darkCard: {
    flex: 1,
    backgroundColor: '#47e96c',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
  },
});

export default MyComponent;