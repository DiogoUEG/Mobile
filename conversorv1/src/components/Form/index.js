import React, {useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { Result } from "./Result";
import services from "../../../services/Api";
import getCotacao from "../../../services/Api";
import { Cotacao } from "../../../services/Api";
import {Picker} from '@react-native-picker/picker';

export default function Form() {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [real, setReal] = useState(null);
    const [cotacao, setCotacao] = useState(null);
    const [moeda, setMoeda] = useState([]);
    const [resultado, setResultado] = useState(null);
    const [msg, setMsg] = useState(null);
    const [data, setData] = useState([]);
    function validar() {

        if (real != null) {
            converter()
            setReal(null)
        } else {
            setMsg("Informe o valor a ser convertido. ")
            setResultado(null)
        }
    }

    function converter() {
        var digito = real.replace(/,/i , '.')
        setResultado(( digito * cotacao))
        return (resultado);
    }

    async function cotacaoM() {

        const moeda = await Cotacao()
        setMoeda(moeda)
    }

    const renderCotacaoList = () => {
        return moeda.map( (produto, index) => {
            return <Picker.Item key={index} label={produto} value={produto} />
        })
    }

    const get = async (itemValue) => {
        setSelectedLanguage(itemValue)
        var dado = await getCotacao(itemValue)
        setData([])
        setData(dado)
        setCotacao(dado[0])
        setMsg(dado[1])
        setResultado(0)
    }

    useEffect(() => {
        cotacaoM();
    }, []);


    return (
        <View style={styles.formContext}>

            <View style={styles.form}>

                <Picker
                    style={styles.input}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        get(itemValue) }>
                    {renderCotacaoList()}
                </Picker>

                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={real}
                    onChangeText={setReal}
                    placeholder="Ex. 6,00"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { validar() }}
                >
                    <Text style={styles.textButton} >Converter</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.container}>
            <Text>{msg}</Text>
            <Text>{cotacao}</Text>
            </View>
            <Result msg={msg} valor={resultado} />

        </View>
    );
}

