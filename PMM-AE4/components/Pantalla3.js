import {React, useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-web';

const Pantalla3 = () => {
    const [respuesta, setRespuesta]=useState({
        altura:null,
        numero:null,
        nombre:null,
        peso:null,
        exp:null,
    });


    const getData = async () => {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then(response => {
            if (response.ok) {
                return response.json();
            } throw new Error('La petición ha fallado');
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {
            setRespuesta({
                altura:jsonResponse.height,
                numero:jsonResponse.order,
                nombre:jsonResponse.name,
                peso:jsonResponse.weight,
                exp:jsonResponse.base_experience
            })
            console.log(jsonResponse.weight);
        });
    }
    useEffect(() =>{ 
        getData(); 
    },[])
    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Consulta a la API pública PokeApi</Text>
            {
                respuesta? 
                <>
                <Text> Nombre: {respuesta.nombre}</Text>
                <Text> Número: {respuesta.numero}</Text>
                <Text> Altura: {respuesta.altura}</Text>
                <Text> Peso: {respuesta.peso}</Text>
                <Text> Experiencia Base: {respuesta.exp}</Text>
                </>:null
            }
        </View>
    )
}
const styles = StyleSheet.create({
    layout:
    {
        flex: 1,
        justifyContent: 'center',
        padding: 8
    },
    title: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default Pantalla3;