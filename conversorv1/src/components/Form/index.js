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

    function validar() {

        if (real != null) {
            converter()
            setReal(null)
        } else {
            setMsg("Informe o valor a ser convertido. ")
            setResultado(null)
        }
    }

    async function converter() {

        const data = await getCotacao(selectedLanguage)
        setCotacao(data[0])
        setMsg(data[1])

        console.log("Conversao")
        console.log(cotacao)
        console.log(msg)

        return setResultado((real / cotacao).toFixed(2))
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
                        setSelectedLanguage(itemValue)}>
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
                    <Text style={styles.textButton} >Converter para US$</Text>
                </TouchableOpacity>
            </View>

            <Result msg={msg} valor={resultado} />

        </View>
    );
}

