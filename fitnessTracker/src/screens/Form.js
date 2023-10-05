import React from 'react';
import { View, Text, TextInput, TouchableOpacity ,ImageBackground} from 'react-native';

const Form = () => {
  return (
    <View>
    <ImageBackground
    source={require('../../assets/wallpaper.jpg')}
    style={{height:'100%'}} imageStyle={{ opacity: 0.4 }} 
    >
    <View style={styles.formContainer}>
    
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCompleteType="off"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCompleteType="off"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.textarea}
        placeholder="Message"
        multiline={true}
        numberOfLines={6}
        autoCompleteType="off"
      />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground></View>
  );
};

const styles = {
  formContainer: {
    padding: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  textarea: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    height: 100,
  },
  submitButton: {
    backgroundColor: '#ccc',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
};

export default Form;
