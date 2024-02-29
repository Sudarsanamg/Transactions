import React from 'react';
import Home from './Pages/Home';
import AddTransaction from './Pages/AddTransaction';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
      
        <Stack.Screen
          name="AddTransaction"
          component={AddTransaction}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
