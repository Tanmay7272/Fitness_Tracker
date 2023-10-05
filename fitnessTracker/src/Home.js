import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import { deviceHeight, deviceWidth } from "../screens/Dimensions"
import React, { useState , useEffect} from 'react';
import Carousel from './Carousel';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export default function Home() {
  const navigation = useNavigation();

  const [userEmail, setUserEmail] = useState('');

 

  useEffect(() => {

    AsyncStorage.getItem('userEmail')

      .then((email) => {

        if (email) {

          console.log('Retrieved user email:', email);

          setUserEmail(email);

        }

      })

      .catch((error) => {

        console.log(error);

      });

  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f2fff8'}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
            padding: 20,
          }}>
          <Text style={{fontSize: 16}}> {userEmail}</Text>
          <ImageBackground
            source={require('../assets/profile_img.jpg')}
            style={{width: 35, height: 35}}
            imageStyle={{borderRadius: 25}}
          />
        </View>
        <Carousel />
        <View style={{flex: 1, height: 120, marginBottom: 10}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 20,
            }}>
            {' '}
            Select Your Age{' '}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              style={{
                height: 45,
                width: 150,
                backgroundColor: 'white',
                borderWidth: 4,
                borderColor: 'white',
                justifyContent: 'center',
                padding: 10,
                borderRadius: 50,
                textAlign: 'center',
                shadowColor: "#0b5d2c",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                
                elevation: 11,
              }}
              onPress={() => navigation.navigate('AgeGroup1')}>
              <Text> 20 - 24</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 45,
                width: 150,
                backgroundColor: 'white',
                borderWidth: 4,
                borderColor: 'white',
                justifyContent: 'center',
                padding: 10,
                borderRadius: 50,
                textAlign: 'center',
                shadowColor: "#0b5d2c",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                
                elevation: 11,
              }}
              onPress={() => navigation.navigate('AgeGroup2')}>
              <Text> 24 - 30</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ fontSize: 20,
          fontWeight: 'bold',
          color: '#5b5e5d',      
          marginBottom: 0,}}> We’d Love to Hear from You</Text>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ADD8E6',
            height: 190,
            marginBottom: 10,
            flex: 1,
            justifyContent: 'flex-end',
            alignItems:'center',
            marginRight:10,
            marginLeft:10,
            borderRadius:7,
            marginTop:70
          }}>
        
          <Text style={{fontSize: 18, textAlign: 'justify', padding: 10,color: '#fff',
          marginBottom: 0,}}>
            Anytime Fitness clubs are independently owned and operated. To learn
            more about a club close to you, please contact them directly.{' '}
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', justifyContent: 'space-around'}}  onPress={() => navigation.navigate('Form')}>
            <Text
              style={{
                height: 45,
                width: 90,
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                padding: 10,
                borderRadius: 10,
                textAlign: 'center',
                marginBottom:10
              }}>
             
              Contact
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
