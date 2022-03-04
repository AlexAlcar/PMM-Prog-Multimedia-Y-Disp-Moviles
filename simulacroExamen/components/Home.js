import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Paises from './Paises';
import Espanya from './Espanya';
import Francia from './Francia';
import Portugal from './Portugal';
import Alemania from './Alemania';

const Stack = createStackNavigator();
const Home = () => {

    return (
        <NavigationContainer independent={true}>
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Paises" component={Paises} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Espanya"  component={Espanya} />
                <Stack.Screen name="Francia" component={Francia} />
                <Stack.Screen name="Portugal" component={Portugal} />
                <Stack.Screen name="Alemania" component={Alemania} />
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>   
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
    },
    title: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default Home;

