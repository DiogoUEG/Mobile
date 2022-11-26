import axios from "axios";
import { useState } from "react";

export default async function CEP(cep) {
    var url = 'https://viacep.com.br/ws/' + cep + '/json/'

    var results = []

    await axios.get(url)
        .then(function (response) {

            const data = response.data
            console.log(data)

        })
        .catch(function (error) {
            console.log(error)
        })

    return data

}

export async function Distancia(cep1, cep2) {

    var url = 'https://distancep.herokuapp.com/distance/' + cep1 + '/' + cep2 + '/'

    var data
    await axios.get(url)
        .then(function (response) {
            data = response.data
            

        })
        .catch(function (error) {
            console.log(error)
        })

        return data
}

export async function Endereco(endereco) {

    var url = 'https://us1.locationiq.com/v1/search?key=pk.d6ac4339e0f52d615307689e1058043a&q=' + endereco + '&format=json'

    var data
    await axios.get(url)
        .then(function (response) {
            data = response.data
            console.log(data)
        })
        .catch(function (error) {
            console.log(error)
        })
    return data

}

export async function EnderecoInverso(lat, lng) {

    var url = 'https://us1.locationiq.com/v1/reverse?key=pk.d6ac4339e0f52d615307689e1058043a&lat=' + lat + '&lon=' + lng + '&format=json'
    console.log(url)
    var data = []
    var results = []
    await axios.get(url)
        .then(function (response) {
            data = response.data
            //console.log(data)

        })
        .catch(function (error) {
            console.log(error)
        })
    return data

}