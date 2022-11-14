import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Tittle';
import Form from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
        <Title/>
        <Form/>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE9E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});