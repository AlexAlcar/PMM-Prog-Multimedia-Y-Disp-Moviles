import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Espanya = () => {
    const [resPais, setResPais] = useState({
        nombre: null,
        continente: null,
        capital: null,
        moneda: null,
        superficie: null,
        idioma: null,
        habitantes: null,
        bandera: null,
    });
    const [resTiempo, setResTiempo]=useState({
        prevision:null,
        temperatura:null,
        temp_max:null,
        temp_min:null,
        vel_viento:null,
        humedad:null,
    });

    const getData = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/name/spain');
            if (response.ok) {
                const jsonResponse = await response.json();
                setResPais({
                    nombre: jsonResponse[0].name.common,
                    continente: jsonResponse[0].continents[0],
                    capital: jsonResponse[0].capital[0],
                    moneda: jsonResponse[0].currencies.EUR.name,
                    superficie: jsonResponse[0].area,
                    idioma: jsonResponse[0].languages,
                    habitantes: jsonResponse[0].population,
                    bandera: jsonResponse[0].flag
                })
                return jsonResponse;
            } throw new Error('La petición ha fallado');
        } catch (error) { console.log(error); }
    }

    const getWeather = async () => {
        try {
            const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=spain,esp&units=metric&lang=es&APPID=f2b990c09e6f73102863cfe63a569f43');
            if (response.ok) {
                const jsonResponse = await response.json();
                setResTiempo({
                    prevision: jsonResponse.weather[0].description,
                    temperatura: jsonResponse.main.temp,
                    temp_max: jsonResponse.main.temp_max,
                    temp_min: jsonResponse.main.temp_min,
                    vel_viento: jsonResponse.wind.speed,
                    humedad: jsonResponse.main.humidity,
                })
                return jsonResponse;
            } throw new Error('La petición ha fallado');
        } catch (error) { console.log(error); }
    }

    useEffect(() => {
        getData();
        getWeather();
    }, [])

    return (
        <View>
            <Text style={styles.title}>España</Text>
            <List.Section>
                <List.Accordion
                    title="Información sobre el país"
                    left={props => <List.Icon {...props} icon="compass-outline" />}>
                    <List.Item title={"Nombre: " + resPais.nombre}></List.Item>
                    <List.Item title={"Continente: " + resPais.continente} />
                    <List.Item title={"Capital: " + resPais.capital} />
                </List.Accordion>

                <List.Accordion
                    title="Información del tiempo"
                    left={props => <List.Icon {...props} icon="weather-lightning-rainy" />}>
                    <List.Item title={"Tiempo meteorológico: " + resTiempo.prevision} />

                </List.Accordion>
            </List.Section>
        </View>

    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'top',
        padding: 8,
    },
    separator: {
        fontWeight: 'bold',

    },
    title: {
        margin: 24,
        fontSize: 20,
        textAlign: 'top',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default Espanya;