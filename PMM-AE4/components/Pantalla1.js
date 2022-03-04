import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaModal from './PantallaModal';
import Home from './Home';
const Stack = createStackNavigator();

const Pantalla1 = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Group>
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Group>
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name="PantallaModal" component={PantallaModal} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Pantalla1;