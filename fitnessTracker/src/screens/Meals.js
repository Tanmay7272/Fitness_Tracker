import React, { useState } from 'react';
import axios from 'axios';



import {

  Text,

  View,

  KeyboardAvoidingView,

  ScrollView,

  TextInput,

  TouchableOpacity,

  Alert,

  ImageBackground, StyleSheet

} from 'react-native';



import Meal from './Meal';





const Meals = () => {

  const [task, setTask] = useState('');



  const [taskItems, setTaskItems] = useState([]);



  const [editedIndex, setEditedIndex] = useState(-1);



  const [categoryIndex, setCategoryIndex] = React.useState(0);



  const categories = ['BREAKFAST', 'LUNCH', 'DINNER']; //categories fields to navigate





  const CategoryList = () => {

    return (

      <View style={styles.categoryContainer}>

        {categories.map((item, index) => (

          <TouchableOpacity

            key={index}

            activeOpacity={0.8}

            onPress={() => setCategoryIndex(index)}>

            <Text

              style={[

                styles.categoryText,

                categoryIndex === index && styles.categoryTextSelected,

              ]}>

              {item}

            </Text>

          </TouchableOpacity>

        ))}

      </View>

    );

  };



  const handleAddTask = () => {

    axios.post('http://192.168.1.104:3000/meals', { addMeal: task })
      .then((res) => {
        if (res.data.status === 'Success') {
          setTaskItems([task, ...taskItems]);
          setTask('');
          Alert.alert('Success', res.data.message);
          navigation.navigate('Meals');
          console.log(res.data.message);
        } else {
          Alert.alert('Error', res.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });



  };



  const completeTask = index => {


    const mealPlanId = taskItems[index];

    axios.delete(`http://192.168.1.104:3000/meals/${mealPlanId.id}`)
      .then((res) => {
        if (res.data.status === 'Success') {
          const updatedTaskItems = taskItems.filter((item, i) => i !== index);
          setTaskItems(updatedTaskItems);
          Alert.alert('Success', res.data.message);
        } else {
          Alert.alert('Error', res.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });

  };



  const handleEditTask = index => {

    setEditedIndex(index); // Set the edited task index

  };



  const handleSaveEdit = (editedText, index) => {

    const updatedTasks = [...taskItems];



    updatedTasks[index] = editedText;



    setTaskItems(updatedTasks);



    setEditedIndex(-1); // Reset the edited task index



    Alert.alert('Task Edited', 'The task has been edited successfully.');

  };



  return (

    <View style={{ backgroundColor: '#f2fff8', flex: 1 }}>



      <ImageBackground

        source={require('../../assets/wallpaper.jpg')}

        style={{ height: 700, opacity: 0.8 }}>

        <KeyboardAvoidingView>



          <CategoryList />

          <View



            style={{

              flexDirection: 'row', // Set flexDirection to 'row'



              alignItems: 'center',



              paddingHorizontal: 10,



              borderWidth: 1,



              borderColor: 'rgba(227, 237, 255, 1) 53%',



              borderRadius: 10,



              width: '95%',



              marginBottom: 20,



              marginTop: 10,



              width: 355,



              backgroundColor: 'white',



              shadowColor: '#ffffff',



              shadowOffset: { width: 10, height: 6 },



              shadowOpacity: 0.39,



              marginLeft: 15,



              shadowRadius: 8.46,



              elevation: 14,

            }}>

            <TextInput

              style={{ fontSize: 20, flex: 1 }} // Added flex: 1 to allow the TextInput to take space

              placeholder={'Enter your Meal'}

              value={task}

              onChangeText={text => setTask(text)}

            />



            <TouchableOpacity onPress={() => handleAddTask()}>

              <View>

                <Text

                  style={{ fontSize: 35, fontWeight: 'bold', paddingLeft: 10 }}>

                  +

                </Text>

              </View>

            </TouchableOpacity>

          </View>

        </KeyboardAvoidingView>



        <ScrollView>

          <View>

            {taskItems.map((item, index) => (

              <Meal

                key={index}

                text={item}

                onDelete={() => completeTask(index)}

                onEdit={() => handleEditTask(index)} // Pass the index to the edit function

                isEditing={editedIndex === index} // Pass whether the task is being edited

                onSave={editedText => handleSaveEdit(editedText, index)}

              />

            ))}

          </View>

        </ScrollView>

      </ImageBackground>

    </View>

  );

};



export default Meals





const styles = StyleSheet.create({



  categoryContainer: {

    flexDirection: 'row',

    marginTop: 8,

    marginBottom: 20,

    justifyContent: 'space-between',

    marginLeft: 15,

    marginRight: 15,

    backgroundColor: '#fff'

  },

  categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },

  categoryTextSelected: {

    color: '#00B761',

    paddingBottom: 5,

    borderBottomWidth: 2,

    borderColor: '#00B761',

  },



});

