import React from 'react'
import {View, Button} from 'react-native'

export default function Route ({navigation}) {
  return (
    <View style={{flex: 1, padding: 30}}>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />

      <View style={{height: 30}}></View>

      <Button
        title='Go to Profile'
        onPress={() => navigation.navigate('Profile')}
      />
      
      <View style={{height: 30}}></View>

      <Button
        title='Go to Initial'
        onPress={() => navigation.navigate('Initial')}
      />

      <View style={{height: 30}}></View>

      <Button
        title='Go to Edit Profile'
        onPress={() => navigation.navigate('EditProfile')}
      />
    </View>
  )
}
