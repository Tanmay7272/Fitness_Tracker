import React, { useState } from 'react';

import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const Meal = ({ text, onDelete, onEdit, isEditing, onSave }) => {

  const navigation = useNavigation();

  const [editedText, setEditedText] = useState(text); // Define editedText state



  const handleEdit = () => {

    onEdit();

  };



  const handleSave = () => {

    onSave(editedText);

  };



  return (

    <TouchableOpacity>

      <View

        style={{

          backgroundColor: '#ffffff',

          padding: 15,

          borderRadius: 7,

          flexDirection: 'row',

          alignItems: 'center',

          justifyContent: 'space-between',

          marginBottom: 20,

          marginLeft: 15,

          marginRight: 15,

          shadowColor: '#171d54',

          shadowOffset: {

            width: 0,

            height: 7,

          },

          shadowOpacity: 0.41,

          shadowRadius: 9.11,



          elevation: 0,

        }}

      >

        {isEditing ? (

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <TextInput

              style={{ fontSize: 17, maxWidth: '85%', color: '#0c5480' }}

              value={editedText}

              onChangeText={setEditedText}

            />

            <TouchableOpacity onPress={handleSave}>

              <Text style={{ color: 'blue' }}>Save</Text>

            </TouchableOpacity>

          </View>

        ) : (

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <Text style={{ fontSize: 17, maxWidth: '85%', color: '#0c635a' }}>

              {text}

            </Text>

            <TouchableOpacity onPress={handleEdit}>

              <Image

                source={require('../../assets/edit.png')}

                style={{

                  overflow: 'hidden',

                  height: 25,

                  width: 25,



                  backgroundColor: 'white',

                }}

              />

            </TouchableOpacity>

          </View>

        )}



        <TouchableOpacity onPress={onDelete} >

          <Image

            source={require('../../assets/trash.png')}

            style={{

              overflow: 'hidden',

              height: 30,

              width: 30,

              backgroundColor: 'white',

            }}

          />

        </TouchableOpacity>

      </View>

    </TouchableOpacity>

  );

};



export default Meal;