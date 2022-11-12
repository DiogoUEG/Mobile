import axios from "axios";
import { useState } from "react";

export default async function getCotacao() {

    var url = 'https://economia.awesomeapi.com.br/json/available'

    var results = []

    await axios.get(url)
        .then(function (response){

            const data = json.stringfy(response.data);

    })
    .catch(function (error){
        console.log(error)
    })
    return results

}

export function dado(){
    const data = '{"USD-BRL":"Dólar Americano/Real Brasileiro","USD-BRLT":"Dólar Americano/Real Brasileiro Turismo","CAD-BRL":"Dólar Canadense/Real Brasileiro"}';
    var list = []
    JSON.parse(data, (key, value) =>{
        console.log(key);
        list.push(key);
    })
    return(list)
}