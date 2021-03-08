import React from 'react'
import {StatusBar} from 'react-native'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Route from './src/pages/route'
import Home from './src/pages/home'
import Initial from './src/pages/initial'
import Profile from './src/pages/profile'
import EditProfile from './src/pages/edit_profile'
import AddProfile from './src/pages/add_profile'
import PatientsList from './src/pages/patients_list'

const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#34C47C' barStyle='light-content' />

      <Stack.Navigator initialRouteName='Route'>
        <Stack.Screen
          name='Initial'
          component={Initial}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name='Route' component={Route} />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='EditProfile'
          component={EditProfile}
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name='AddProfile'
          component={AddProfile}
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name='PatientsList'
          component={PatientsList}
          options={{headerShown: false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
