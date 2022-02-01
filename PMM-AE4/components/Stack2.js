import * as React from 'react'; 
import { StyleSheet, Text, View, Button } from 'react-native'; 

const Stack2 = (props) => { 
    return ( 
    <View style={styles.layout}> 
    <Text style={styles.title}>Pantalla 2/3 (STACK)</Text> 
    <Text>Esta es la SEGUNDA página de la navegación con Stack</Text> 
    <Button title="IR A LA PANTALLA STACK 3 (REGISTRARSE)" onPress={() => props.navigation.navigate('Pantalla 2 (STACK_3)')} /> 
    <Button title="IR ATRÁS" onPress={() => props.navigation.navigate('Pantalla 2 (STACK)')} /> 
    </View> 
    ); 
}; 
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
export default Stack2;