import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalcError from '../screens/CalcError';
import CalcHome from '../screens/CalcHome';
import CalcResult from '../screens/CalcResult';
const Navigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={CalcHome}  options={{
          
          headerStyle: {
            backgroundColor: '#434343',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      <Stack.Screen name="Result" component={CalcResult}options={{
          
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      <Stack.Screen name="Warning" component={CalcError}options={{
          
          headerStyle: {
            backgroundColor: 'rgb(138, 0, 0)',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigator