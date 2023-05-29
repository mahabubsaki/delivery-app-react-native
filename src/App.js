import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
const Stack = createNativeStackNavigator();
import { Provider } from 'react-redux';
import { store } from './store';


export default function App() {

  return (

    <NavigationContainer>
      <Provider store={store}>

        <Stack.Navigator>
          <Stack.Screen options={{ headerTitleAlign: 'center' }} name='Home' component={HomeScreen} />
          <Stack.Screen options={{ headerTitleAlign: 'center' }} name='SingleRestaurant' component={RestaurantScreen} />
        </Stack.Navigator>

      </Provider>
    </NavigationContainer>


  );
}

