import React, { useState, useEffect } from 'react';
import { Platform, Text, View, KeyboardAvoidingView, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import styles from './style';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { EnderecoInverso } from '../../services/api';

export default function LocalAtual() {
    const [errorMsg, setErrorMsg] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [info, setInfo] = useState(null);
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

    async function local() {
        var data = await EnderecoInverso(latitude, longitude)
        if(data == undefined){
            setInfo(null)
        }else{
            setInfo(data)
        }
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
                <>
                {info !== null
                    ?
                    <View>
                        <Text>logradouro: {info.address.road}</Text>
                        <Text>Bairro: {info.address.residential}</Text>
                        <Text>Cidade: {info.address.city}</Text>
                        <Text>Estado: {info.address.state}</Text>
                        <Text>País: {info.address.country}</Text>
                        <Text>CEP: {info.address.postcode}</Text>
                    </View>
                    :
                    <View/>
                }
                <View style={styles.container}>
                    <TouchableOpacity style={styles.Tasks}
                        onPress={() => local()}>
                        <Text style={styles.DescriptionTask}>Pesquisar</Text>
                    </TouchableOpacity>
                </View>
                </>
            }

        </KeyboardAvoidingView>
    );
}