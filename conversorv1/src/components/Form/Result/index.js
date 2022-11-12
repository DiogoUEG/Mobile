import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

export function Result(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.formLabel}>{props.msg}</Text>
        <Text style={styles.formValor}>{props.valor}</Text>
    </View>
  );
}