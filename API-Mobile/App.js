import React from "react";
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import EnderecoDistancia from "./src/Endereco_Distancia";
import CepDistancia from "./src/Cep_Distancia";
import LocalAtual from "./src/Local_ atual";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Local Atual">

        <Tab.Screen
          name="Endereço"
          component={EnderecoDistancia}
          options={{
            headerTintColor: "#F92E6A"
          }}
        />

        <Tab.Screen
          name="CEP"
          component={CepDistancia}
          options={{
            headerTintColor: "#F92E6A"
          }}
        />

        <Tab.Screen
          name="Local Atual"
          component={LocalAtual}
          options={{
            headerTintColor: "#F92E6A"
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
