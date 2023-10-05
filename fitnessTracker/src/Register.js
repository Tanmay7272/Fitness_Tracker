import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert ,ImageBackground} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    axios.post('http://192.168.1.104:3000/registration', values)
      .then((res) => {
        if (res.data.status === 'Success') {
          Alert.alert('Success', res.data.message);
          navigation.navigate('Login');
          console.log(res.data.message);
        } else {
          Alert.alert('Error', res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
    <ImageBackground
  source={require('../assets/wallpaper.jpg')}
  style={styles.container}
  >
      <View style={styles.formContainer}>
        <Text style={styles.header}>Register</Text>
        <TextInput
          value={values.name}
          onChangeText={(text) => setValues({ ...values, name: text })}
          placeholder="Full Name"
          style={styles.input}
        />
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
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>
            Login here.
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
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  formContainer: {
    padding: 25,
    width: '80%',
    borderRadius: 0.4,
    background: 'none',
    borderWidth:2,
    borderColor:"#edffd7",
    opacity:0.6,
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
  loginText: {
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

export default Register;
