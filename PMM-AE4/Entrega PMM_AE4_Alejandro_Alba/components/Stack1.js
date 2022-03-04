import * as React from 'react'; 
import { StyleSheet, Text, View, Button } from 'react-native'; 

const Stack1 = (props) => { 
    return ( 
    <View style={styles.layout}> 
    <Text style={styles.title}>Pantalla 1/3 (STACK)</Text> 
    <Text>Esta es la primera página de la navegación con Stack</Text> 
    <Button title="Ir a la Pantalla Stack 2 (LOGIN)" onPress={() => props.navigation.navigate('Pantalla 2 (STACK_2)')} /> 
    
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
export default Stack1;