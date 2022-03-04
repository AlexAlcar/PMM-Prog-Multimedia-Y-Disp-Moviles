import { useState, useEffect} from 'react';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-web';

const Pantalla4 = () => {
    const [respuesta, setRespuesta]=useState({
        genero:null,
        nombre:null,
        apellido:null,
        email:null,
        pais:null,
        ciudad:null,
        tlf:null,
        edad:null,
        thumb:null,
    });
    const[showApi1, setShowApi1]=useState(false);


    const getData1 = async () => {
        fetch('https://randomuser.me/api/').then(response => {
            if (response.ok) {
                return response.json();
            } throw new Error('La petición ha fallado');
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {
            console.log(jsonResponse.results[0]);
            setRespuesta({
                genero:jsonResponse.results[0].gender,
                nombre:jsonResponse.results[0].name.first,
                apellido:jsonResponse.results[0].name.last,
                email:jsonResponse.results[0].email,
                pais:jsonResponse.results[0].location.country,
                ciudad:jsonResponse.results[0].location.city,
                tlf:jsonResponse.results[0].phone,
                edad:jsonResponse.results[0].registered.age,
                thumb:jsonResponse.results[0].picture.medium,
            })
            
        });
        setShowApi1(true);
    }

    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Consulta a la API pública RandomUser</Text>
            <Text>Esta API genera datos aleatorios de personas ficticias:</Text>
            &nbsp;
            <Button title='Consultar API' onPress={getData1}></Button>
            &nbsp;
            {
                showApi1? 
                <>
                <Image style= {{ height:100, width: 100 }} source={{uri:respuesta.thumb}}/>
                <Text> Género: {respuesta.genero}</Text>
                <Text> Nombre: {respuesta.nombre}</Text>
                <Text> Apellido: {respuesta.apellido}</Text>
                <Text> Email: {respuesta.email}</Text>
                <Text> Pais: {respuesta.pais}</Text>
                <Text> Ciudad: {respuesta.ciudad}</Text>
                <Text> Teléfono: {respuesta.tlf}</Text>
                <Text> Edad: {respuesta.edad}</Text>                
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
export default Pantalla4;