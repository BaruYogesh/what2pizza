import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Name from './Screens/Name.js';
import JoinCreateRoom from './Screens/JoinCreateRoom.js';
import JoinRoom from './Screens/JoinRoom.js';
import ToppingsSelect from './Screens/ToppingsSelect.js';
import Room from './Screens/Room.js';
import Order from './Screens/Order.js';
import Confirm from './Screens/Confirm.js';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="JoinCreateRoom" component={JoinCreateRoom} />
        <Stack.Screen name="JoinRoom" component={JoinRoom} />
        <Stack.Screen name="ToppingsSelect" component={ToppingsSelect} />
        <Stack.Screen name="Room" component={Room} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Confirm" component={Confirm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
