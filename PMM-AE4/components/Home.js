import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Pantalla Home</Text>
            <Button onPress={() => navigation.navigate('PantallaModal')}
                title="Abrir Modal" />
        </View>

    )
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
export default Home;