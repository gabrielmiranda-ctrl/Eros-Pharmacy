import React from 'react'
import {View, Text, Button} from 'react-native'

export default function Route ({navigation}) {
  return (
    <View>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      <Button
        title='Go to Profile'
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}
