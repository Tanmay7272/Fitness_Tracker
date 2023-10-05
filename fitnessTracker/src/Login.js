import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert,ImageBackground } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = () => {
     axios.post('http://192.168.1.104:3000/login', values)
      .then((res) => {
        if (res.data.status === 'Success') {
          Alert.alert('Success', res.data.message);
          AsyncStorage.setItem('userEmail', values.email);
           console.log('User email stored:', values.email);
          navigation.navigate('Home'); // Change 'Home' to your app's main screen
        } else {
          Alert.alert('Error', res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });

      
  };

  // const handleGoogleLogin = () => {
  //   // Handle Google login logic
  // };

  // const handleLinkedinLogin = () => {
  //   // Handle LinkedIn login logic
  // };

  return (
    <View style={styles.container}>
    <ImageBackground
  source={require('../assets/wallpaper.jpg')}
  style={styles.container}
  >
  
      <View style={styles.formContainer}>
        <Text style={styles.header}>LOGIN</Text>
        <TextInput
          value={values.email}
          onChangeText={(text) => setValues({ ...values, email: text })}
          placeholder="youremail@gmail.com"
          style={styles.input}
        />
        <TextInput
          value={values.password}
          onChangeText={(text) => setValues({ ...values, password: text })}
          placeholder="********"
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText} >Log In</Text>
        </TouchableOpacity>
        <View style={styles.socialButtonsContainer}>
         
        </View>
        <Text style={styles.registerText}>
          Don't have an account?{' '}
          <Text style={styles.linkText} onPress={() => navigation.navigate('Register')}>
            Register here.
          </Text>
        </Text>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width:"100%"
  },
  formContainer: {
    padding: 25,
    width: '80%',
    borderRadius: 0.4,
    background: 'none',
    borderWidth:2,
    borderColor:"#edffd7",
    opacity:0.7,
    borderTopLeftRadius: 70, 
    borderBottomRightRadius: 70,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 24,
  },
  header: {
    fontSize: 24,
    color: '#040e3c',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    marginVertical: 10,
    padding: 10,
    fontSize:18,
    borderRadius: 8,
    backgroundColor: '#cbe0de',
    
  },
  button: {
    backgroundColor: 'transparent',
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#e4ffc2',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  socialButtonText: {
    color: 'white',
    marginLeft: 10,
  },
  registerText: {
    marginTop: 20,
    fontSize:14,
    fontWeight: 'bold',
    color: '#d6ffa3',
    textAlign: 'center',
  },
  linkText: {
    color: '#c5ff7d',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
};

export default Login;
// <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
// <FontAwesomeIcon icon={faGoogle} size={20} color="white" />
// <Text style={styles.socialButtonText}>Google login</Text>
// </TouchableOpacity>
// <TouchableOpacity style={styles.socialButton} onPress={handleLinkedinLogin}>
// <FontAwesomeIcon icon={faLinkedin} size={20} color="white" />
// <Text style={styles.socialButtonText}>LinkedIn Login</Text>
// </TouchableOpacity>