import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { Result } from "./Result";
import services from "../../../services/Api";
import getCotacao from "../../../services/Api";
import { dado } from "../../../services/Api";

export default function Form() {

    const [real, setReal] = useState(null);
    const [cotacao, setCotacao] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [msg, setMsg] = useState(null);
    const dados = dado();
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

        const data = await getCotacao()

        setCotacao(data[0])
        setMsg(data[1])

        console.log("Conversao")
        console.log(cotacao)
        console.log(msg)

        return setResultado((real / cotacao).toFixed(2))
    }

    return (
        <View style={styles.formContext}>

            <View style={styles.form}>

                <Text style={styles.formLabel}>Real</Text>
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
                    <Text style={styles.textButton} onPress={() => console.log(dados)}>Converter para US$</Text>
                </TouchableOpacity>
            </View>

            <Result msg={msg} valor={resultado} />

        </View>
    );
}

