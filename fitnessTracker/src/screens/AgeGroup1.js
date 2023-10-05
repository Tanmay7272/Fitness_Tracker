  import React from 'react';
  import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

  const AgeGroup1 = () => {
    const navigation = useNavigation();

    return (
      <View style={{backgroundColor:'white'}}>
      <ImageBackground
    source={require('../../assets/wallpaper.jpg')}
    style={{height:'100%'}} imageStyle={{ opacity: 0.5 }} 
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>My Plan</Text>
      <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('GuideScreen')}
        >
          <ImageBackground
          source={require('../../assets/workout.jpg')}
            style={styles.imageBackground}
          >
            <Text style={styles.cardText}>Workout</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Meals')}
      >
        <ImageBackground
        source={require('../../assets/meal.jpg')}
          style={styles.imageBackground}
        >
          <Text style={styles.cardText}>Meal Plan</Text>
        </ImageBackground>
      </TouchableOpacity>
      </ImageBackground>
      </View>
    );
  };

  const styles = StyleSheet.create({
    card: {
      marginHorizontal: 20,
      marginTop:40,
      borderRadius:20,
      borderWidth:1,
      borderColor: 'transparent',
      overflow: 'hidden', // Ensure rounded corners are applied properly
      // backgroundColor: 'black',
      shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,

  elevation: 24,
    },
    imageBackground: {
      position: 'relative',
      borderRadius: 10,
      opacity:0.8,
      height: 200,
      width: '100%',
      overflow: 'hidden',
    },
    cardText: {
      fontSize: 30,
      width: '100%',
      height: '100%',
      textAlign: 'center',
      textAlignVertical: 'center',
      color: '#e3fffc',
    },
  });

  export default AgeGroup1;
