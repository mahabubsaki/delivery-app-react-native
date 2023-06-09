import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
const Stack = createNativeStackNavigator();
import { Provider, useDispatch } from 'react-redux';
import { store } from './src/store';
import BasketScreen from './src/screens/BasketScreen';
import OrderPrepareScreen from './src/screens/OrderPrepareScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';


export default function App() {


  return (

    <NavigationContainer>
      <Provider store={store}>

        <Stack.Navigator>
          <Stack.Screen options={{ headerTitleAlign: 'center' }} name='Home' component={HomeScreen} />
          <Stack.Screen options={{ headerTitleAlign: 'center' }} name='SingleRestaurant' component={RestaurantScreen} />
          <Stack.Screen name='Basket' component={BasketScreen} options={{ presentation: 'modal', headerShown: false }} />
          <Stack.Screen name='OrderPrepare' component={OrderPrepareScreen} options={{ presentation: 'fullScreenModal', headerShown: false }} />
          <Stack.Screen name='Delivery' component={DeliveryScreen} options={{ headerShown: false }} />
        </Stack.Navigator>

      </Provider>
    </NavigationContainer>


  );
}

