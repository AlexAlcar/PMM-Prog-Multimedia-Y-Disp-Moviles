import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Francia = () => {
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
            const response = await fetch('https://restcountries.com/v3.1/name/france');
            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                setResPais({
                    nombre: jsonResponse[0].name.common,
                    continente: jsonResponse[0].continents[0],
                    capital: jsonResponse[0].capital[0],
                    moneda: jsonResponse[0].currencies.EUR.name,
                    superficie: jsonResponse[0].area,
                    idioma: jsonResponse[0].languages.fra,
                    habitantes: jsonResponse[0].population,
                    bandera: jsonResponse[0].flag
                })
                return jsonResponse;
            } throw new Error('La petición ha fallado');
        } catch (error) { console.log(error); }
    }

    const getWeather = async () => {
        try {
            const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=france,esp&units=metric&lang=es&APPID=f2b990c09e6f73102863cfe63a569f43');
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
            <Text style={styles.title}>Francia</Text>
            <List.Section>
                <List.Accordion
                    title="Información sobre el país"
                    left={props => <List.Icon {...props} icon="compass-outline" />}>
                    <List.Item title={"Moneda: " + resPais.moneda}></List.Item>
                    <List.Item title={"Superficie: " + resPais.superficie} />
                    <List.Item title={"Idioma: " + resPais.idioma} />
                    
                </List.Accordion>

                <List.Accordion
                    title="Información del tiempo"
                    left={props => <List.Icon {...props} icon="weather-lightning-rainy" />}>
                    <List.Item title={"Temperatura Máxima: " + resTiempo.temp_max} />
                    <List.Item title={"Temperatura Mínima: " + resTiempo.temp_min} />
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
export default Francia;