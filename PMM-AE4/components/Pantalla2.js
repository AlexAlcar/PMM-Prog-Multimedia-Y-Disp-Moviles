import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Stack1 from './Stack1';
import Stack2 from './Stack2';
import Stack3 from './Stack3';
const Stack = createStackNavigator();

const Pantalla2 = () => {
    return (
        <NavigationContainer independent={true}>
            
            <Stack.Navigator options="false">
                <Stack.Screen name="Pantalla 2 (STACK)" component={Stack1} />
                <Stack.Screen name="Pantalla 2 (STACK_2)" component={Stack2} />
                <Stack.Screen name="Pantalla 2 (STACK_3)" component={Stack3} />
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
export default Pantalla2;