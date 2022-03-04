import React from 'react'; 
import { Button, StyleSheet, Text, View } from 'react-native'; 

function PantallaModal({ navigation }) { 
    return ( 
    <View style={styles.layout}> 
    <Text style={styles.title}>Pantalla Modal</Text> 
    <Text>¡Esta es la pantalla Modal para probar la navegación!</Text>
    <Button onPress={() => navigation.goBack()} title="Volver" /> 
    </View> 
    ); 
} 
const styles = StyleSheet.create({ 
    layout: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    title: { 
        fontSize: 32, 
        marginBottom: 16, 
    }, 
}); 
export default PantallaModal;