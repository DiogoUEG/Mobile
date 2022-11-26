import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { Result } from "./Result";
import services from "../../../services/Api";
import getCotacao from "../../../services/Api";
import { Cotacao } from "../../../services/Api";
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';


export default function Form() {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [real, setReal] = useState(null);
    const [cotacao, setCotacao] = useState(null);
    const [moeda, setMoeda] = useState([]);
    const [resultado, setResultado] = useState(null);
    const [msg, setMsg] = useState(null);
    const [verificado, setVerificado] = useState(true);

    function validar() {

        if (real != null) {
            setVerificado(true)
            converter()
            setReal(null)
        } else {
            setMsg("Informe o valor a ser convertido. ")
            setResultado(null)
        }
    }

    function converter() {
        var digito = real.replace(/,/i, '.')
        setResultado((digito * cotacao))
        return (resultado);
    }

    function inverter() {
        var digito = selectedLanguage.split('-')
        var aux = [digito[1], digito[0]].join('-')
        var verificador = false
        moeda.map((produto, index) => {
            if (produto == aux) {
                get(aux)
                verificador = true
            }
        })
        setVerificado(verificador)
    }

    async function cotacaoM() {
        const moeda = await Cotacao()
        setMoeda(moeda)
    }

    const renderCotacaoList = () => {
        return moeda.map((produto, index) => {
            return <Picker.Item key={index} label={produto} value={produto} />
        })
    }

    const get = async (itemValue) => {
        setSelectedLanguage(itemValue)
        var dado = await getCotacao(itemValue)
        setVerificado(true)
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
                        get(itemValue)}>
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
                    style={styles.buttonconverter}
                    onPress={() => { inverter() }}
                >
                    <AntDesign name="retweet" size={24} color="#bdbdbd" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { validar() }}
                >
                    <Text style={styles.textButton} >Converter</Text>
                </TouchableOpacity>
            </View>
            {verificado === false
                ?
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons
                        name={"alert-circle"}
                        size={24}
                        color="#000000"
                    />
                    <Text style={styles.warningAlert}>Não esta disponivel essa conversão</Text>

                </View>
                :
                <View style={styles.container}>
                    <Text>{msg}</Text>
                    <Text>{cotacao}</Text>
                    <Result msg={msg} valor={resultado} />
                </View>
            }


        </View>
    );
}

