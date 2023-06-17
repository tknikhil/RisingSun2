import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'

const DrawerScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:'#00AFF0'}}>
    {<HomeScreen/>}
    </View>
  )
}

export default DrawerScreen