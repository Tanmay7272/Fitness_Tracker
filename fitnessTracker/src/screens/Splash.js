import { View, Text , Image, StyleSheet } from 'react-native'

import React, {useEffect} from 'react'

 

 

const Splash = ({navigation}) => {

  //timer to route on next screen

  useEffect(() => {

    const timer = setTimeout(() => {

      navigation.navigate('Banner');

    }, 2000);

 

    return () => clearTimeout(timer);

  }, [navigation]);

  return (

    <View style = {styles.container}>

      {/* brandlogosection */}

      <View  style = {{flex:30}} >

      <Image source={require('../../assets/FITNESSLOGO.png')}  style = {styles.logo}/>

      </View>

      {/* <View style = {{flex:60}}>

      <Text style = {styles.brandname}>FITNESS-TRACKER</Text>

      </View> */}

      {/* poweredby section */}

      <View style = {styles.powered}>

        <Text style = {styles.poweredtext}>Powered By</Text>

        <Image source={require('../../assets/bugendafinal.png')}  style = {styles.bylogo}/>

       

      </View>

    </View>

  )

}

 

export default Splash

 

const styles = StyleSheet.create({

  container : {

    backgroundColor: 'white',

    flex:1,

        justifyContent:'center',

        alignItems:'center'

  },

 

  brandname : {

    fontSize: 30,

    fontFamily:'EduSABeginner-SemiBold',

    fontWeight: 'bold',

    color: 'black',

    marginTop:'85%',

    alignItems:'center',

    justifyContent:'center',

  },

 

  logo: {

    height: 200,

    width:200,

    marginTop: '50%',

    borderRadius:70

  },

  powered:{

 

    justifyContent:'center',

    alignItems:'center',

    marginBottom:25

  },

  poweredtext:{

    justifyContent:'center',

    alignItems:"center",

    fontWeight:'bold',

    color:'black'

  },

  by:{

    width:'300',

    height: 100,

    justifyContent:'center',

    alignItems:'center',

  },

  bylogo:{

    width:250,

  }

})