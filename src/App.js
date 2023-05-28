import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerTitleAlign: 'center' }} name='Home' component={HomeScreen} />
        <Stack.Screen options={{ headerTitleAlign: 'center' }} name='SingleRestaurant' component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

