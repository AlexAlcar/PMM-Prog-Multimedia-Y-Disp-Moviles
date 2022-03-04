import * as React from 'react'; 
import { StyleSheet, Text, View, Button } from 'react-native'; 

const Stack3 = (props) => { 
    return ( 
    <View style={styles.layout}> 
    <Text style={styles.title}>Pantalla 3/3 (STACK)</Text> 
    <Button title="VOLVER AL INICIO" onPress={() => props.navigation.navigate('Pantalla 2 (STACK)')} /> 
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
export default Stack3;