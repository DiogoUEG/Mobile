import axios from "axios";
import { useState } from "react";

export default async function getCotacao(moeda) {
    var url = 'https://economia.awesomeapi.com.br/json/last/'+ moeda

    var results = []

    await axios.get(url)
        .then(function (response){

            const data = response.data
            const sigla = moeda.replace(/-/i , '')
            const ask = data[sigla].ask
            const name = data[sigla].name
            /*console.log("Cotacao")
            console.log(ask)
            console.log(name)*/

            results = [ask, name]
            //console.log(results)

    })
    .catch(function (error){
        console.log(error)
    })

    return results

}

export async function Cotacao() {

    var url = 'https://economia.awesomeapi.com.br/json/available'

    var data = []
    var results = []
    await axios.get(url)
        .then(function (response){
            data = JSON.stringify(response.data)
            JSON.parse(data, (key , value) =>{
                if (key == ''){

                }else{
                results.push(key)
                }
            })

    })
    .catch(function (error){
        console.log(error)
    })
    return results

}