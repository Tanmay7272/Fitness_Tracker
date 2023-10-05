import React from 'react';
import { TouchableOpacity, Image,View } from 'react-native';

const Mealbutton = () => {
  return (
    <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 10,
            }}>
            <TouchableOpacity>
            <Image
              source={require('../../assets/add-button.png')}
              style={{
                borderRadius: 1,
                overflow: 'hidden',
                height: 30,
                width: 30,
                backgroundColor: 'white',
                marginRight:10
              }}
            /></TouchableOpacity>
            <TouchableOpacity>
            <Image
              source={require('../../assets/edit.png')}
              style={{
                borderRadius: 1,
                overflow: 'hidden',
                height: 30,
                width: 30,
                backgroundColor: 'white',
                marginRight:10

              }}
            /></TouchableOpacity>
            <TouchableOpacity>
            <Image
              source={require('../../assets/trash.png')}
              style={{
                borderRadius: 1,
                overflow: 'hidden',
                height: 30,
                width: 30,
                backgroundColor: 'white',
                marginRight:10
              }}
            /> </TouchableOpacity>
          </View>
  );
};

export default Mealbutton;
