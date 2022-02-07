import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Paises = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.layout}>
            <Button title='España' onPress={() => navigation.navigate('Espanya')}></Button>
            &nbsp;
            <Button title='Francia' onPress={() => navigation.navigate('Francia')}></Button>
            &nbsp;
            <Button title='Portugal' onPress={() => navigation.navigate('Portugal')}></Button>
            &nbsp;
            <Button title='Alemania' onPress={() => navigation.navigate('Alemania')}></Button>

        </View>


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
export default Paises;