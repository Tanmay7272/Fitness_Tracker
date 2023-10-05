import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';  // Import your Home component
import Login from './src/Login';
import Carousel from './src/Carousel';
import Register from './src/Register';
import AgeGroup1 from './src/screens/AgeGroup1';
import AgeGroup2 from './src/screens/AgeGroup2';
import Banner from './src/Banner';
import WorkoutVideos from './src/screens/WorkoutVideos'; 
import Meals from './src/screens/Meals'; 
import Form from './src/screens/Form';
import DetailsScreen from './src/Workout/DetailsScreen';
import GuideScreen from './src/Workout/GuideScreen';
import Splash from './src/screens/Splash';
// import Mealbutton from './src/screens/Mealbutton';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}  // Add your Home component here
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AgeGroup1" component={AgeGroup1} />
        <Stack.Screen name="AgeGroup2" component={AgeGroup2} />
        <Stack.Screen name="Banner" component={Banner} options={{ headerShown: false }}/>
        <Stack.Screen name="WorkoutVideos" component={WorkoutVideos} />
        <Stack.Screen name="Meals" component={Meals} /> 
        <Stack.Screen name="Carousel" component={Carousel} /> 
        <Stack.Screen name="Form" component={Form} /> 
        <Stack.Screen name="GuideScreen" component={GuideScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
