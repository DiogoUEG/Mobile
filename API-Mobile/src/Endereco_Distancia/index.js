import React, { useState, useEffect } from 'react';
import { Platform, Text, View, KeyboardAvoidingView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import styles from './style';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { Endereco } from '../../services/api';

export default function EnderecoDistancia() {
    const [errorMsg, setErrorMsg] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [distancia, setDistancia] = useState(null);
    const [endereco, setEndereco] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLatitude(location.coords.latitude);
            setLongitude(location.coords.longitude);
        })();
    }, []);


    async function Local() {
        var info = endereco.replace(/ /gi , "%20")
        info = info.replace(/,/gi , "%2C")
        var data = await Endereco(info)
        console.log(data[data.length-1].lat)
        console.log(data[data.length-1].lon)
        var dis = getDistanceFromLatLonInKm({ lat: data[data.length-1].lat, lng: data[data.length-1].lon }, { lat: latitude, lng: longitude })
        setDistancia(dis)
    }

    function getDistanceFromLatLonInKm(position1, position2) {
        var deg2rad = function (deg) { return deg * (Math.PI / 180); },
            R = 6371,
            dLat = deg2rad(position2.lat - position1.lat),
            dLng = deg2rad(position2.lng - position1.lng),
            a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                + Math.cos(deg2rad(position1.lat))
                * Math.cos(deg2rad(position1.lat))
                * Math.sin(dLng / 2) * Math.sin(dLng / 2),
            c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var resultado = (R * c * 1000).toFixed();
        return resultado
    }

    let text = '';
    if (errorMsg) {
        text = errorMsg;
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            {text !== ''
                ?
                <View>
                    <MaterialCommunityIcons
                        name={"alert-circle"}
                        size={24}
                        color="#bdbdbd"
                    />
                    <Text style={styles.warningAlert}>{text}</Text>
                </View>
                :
                <View />
            }
            {latitude === null && longitude === null
                ?
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons
                        name={"alert-circle"}
                        size={24}
                        color="#bdbdbd"
                    />
                    <Text style={styles.warningAlert}>Waiting..</Text>
                </View>
                :
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        keyboardType="text"
                        value={endereco}
                        onChangeText={setEndereco}
                        placeholder="Ex. Rua João Valentim"
                    />
                    <TouchableOpacity style={styles.Tasks}
                        onPress={() => Local()}>
                        <Text style={styles.DescriptionTask}>Calcular</Text>
                    </TouchableOpacity>
                    {distancia != null
                        ?
                        <View>
                            <Text>Distancia: {distancia}m</Text>
                        </View>
                        :
                        <View/>
                    }
                </View>
            }

        </KeyboardAvoidingView>
    );
}