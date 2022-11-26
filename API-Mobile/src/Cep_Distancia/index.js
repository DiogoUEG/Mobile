import React, { useState, useEffect } from 'react';
import { Platform, Text, View, KeyboardAvoidingView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from './style';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { Distancia } from '../../services/api';
import { EnderecoInverso } from '../../services/api';

export default function CepDistancia() {
    const [errorMsg, setErrorMsg] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [cep1, setCep1] = useState(null);
    const [cep2, setCep2] = useState(null);
    const [distancia, setDistancia] = useState(null);
    const navigation = useNavigation();

    async function DistanciaCeps() {
        var data = await Distancia(cep1, cep2)
        if(data == undefined){
            setDistancia(null)
        }else{
            setDistancia(data.distance)
        }
        
    }


    async function local() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        var data = await EnderecoInverso(location.coords.latitude, location.coords.longitude)
        var postcode = data.address.postcode.replace(/-/i, '')
        setCep1(postcode)
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
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={cep1}
                    onChangeText={setCep1}
                    placeholder="Ex. 00000000"
                />
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={cep2}
                    onChangeText={setCep2}
                    placeholder="Ex. 00000000"
                />
                <TouchableOpacity style={styles.Tasks}
                    onPress={() => local()}>
                    <Text style={styles.DescriptionTask}>Usar Ponto Atual</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Tasks}
                    onPress={() => DistanciaCeps()}>
                    <Text style={styles.DescriptionTask}>Calcular</Text>
                </TouchableOpacity>
            </View>
            {distancia !== null
                ?
                <View>
                    <Text>Distancia: {distancia}m</Text>
                </View>
                :
                <View/>
            }
        </KeyboardAvoidingView>
    );
}