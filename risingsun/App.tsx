import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './screen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import DrawerScreen from './screen/DrawerScreen';
import ProductsScreen from './screen/ProductsScreen';
import CustomersScreen from './screen/CustomersScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Customers" component={CustomersScreen} />
        
        {/* <Stack.Screen name='CustRegistration' component={CustRegisteration} />
        <Stack.Screen name='PersonalDetail' component={PersonalDetail} />
        <Stack.Screen name='Address' component={Address} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
const styles=StyleSheet.create({
  root:{
    flex:1
  }
});