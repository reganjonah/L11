import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Register';
import Confirmation from './Confirmation';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Confirmation" component={Confirmation} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
