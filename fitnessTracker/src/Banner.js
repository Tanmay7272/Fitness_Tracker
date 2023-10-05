import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';

const Banner = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/banner.jpg')}
        style={styles.imageBackground}
      >
        <Text style={styles.text}>
          Staying fit to keep you in good condition can now be achieved through mobile apps
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
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
    width: '100%',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
    marginTop:520,
    fontWeight: 'bold',

  },
//   text1: {
//     fontSize: 28,
//     textAlign: 'center',
//     margin: 10,
//     color: '#c5ff7d',
//     marginTop:450,
//     fontWeight: 'bold',

//   },
  button: {
    backgroundColor: '#bbff66',
    padding: 12,
    borderRadius: 10,
    marginTop: 35,
    width:320
  },
  buttonText: {
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
    
  },
};

export default Banner;
// <Text style={styles.text1}>Stay healthy even when you stay at home</Text>
