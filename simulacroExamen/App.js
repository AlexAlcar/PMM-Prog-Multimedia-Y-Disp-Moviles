import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Espanya from './components/Espanya';
import Francia from './components/Francia';
import Portugal from './components/Portugal';
import Alemania from './components/Alemania';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default function App() {
 
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Espanya" component={Espanya} />
        <Drawer.Screen name="Francia" component={Francia} />
        <Drawer.Screen name="Portugal" component={Portugal} />
        <Drawer.Screen name="Alemania" component={Alemania} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
