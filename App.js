import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Route from './src/pages/route';
import Home from './src/pages/home';
import Profile from './src/pages/profile';
<<<<<<< HEAD
=======
import EditProfile from './src/pages/edit_profile';
>>>>>>> Pedro

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <StatusBar backgroundColor='#34C47C' barStyle='light-content' />

      <Stack.Navigator initialRouteName='Route'>
<<<<<<< HEAD

        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Route' component={Route} />
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        
=======

        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Route' component={Route} />
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} />

>>>>>>> Pedro
      </Stack.Navigator>

    </NavigationContainer>
  )
}
