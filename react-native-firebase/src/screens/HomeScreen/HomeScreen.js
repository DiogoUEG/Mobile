import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import db from '../../firebase/config';
import { collection, query, where, getDocs, orderBy, onSnapshot, serverTimestamp, addDoc } from "firebase/firestore";
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from '../LoginScreen/LoginScreen';

export default function HomeScreen(props) {
    const navigation = useNavigation();
    const [entityText, setEntityText] = useState('');
    const [entities, setEntities] = useState([]);
    const userID = props.extraData.id;
    const entityRef = query(collection(db, 'entities'), where("authorID", "==", userID), orderBy('createdAt', 'desc'));
    onSnapshot
    useEffect(() => {

        onSnapshot(entityRef,
            (querySnapshot) => {
                const newEntities = []
                querySnapshot.forEach(doc => {
                    const entity = doc.data()
                    entity.id = doc.id
                    newEntities.push(entity)
                });
                setEntities(newEntities)
            },
            error => {
                console.log(error)
            }
        )
    }, [])

    const singOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                navigation.navigate('Login');
            }
            )
            .catch((error) => {
                alert(error)
            })
    }

    const onAddButtonPress = () => {
        if (entityText && entityText.length > 0) {
            const timestamp = serverTimestamp();
            const data = {
                text: entityText,
                authorID: userID,
                createdAt: timestamp,
            };
            addDoc(collection(db, 'entities'), data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }

    const renderEntity = ({ item, index }) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {index}. {item.text}
                </Text>
            </View>
        )
    }

    return (
        <View>
            <View >
                <View style={styles.formContainerSingOut}>
                    <TouchableOpacity style={styles.button} onPress={singOut}>
                        <Text style={styles.buttonText}>SingOut</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>

                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Add new entity'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setEntityText(text)}
                        value={entityText}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                {entities && (
                    <View style={styles.listContainer}>
                        <FlatList
                            data={entities}
                            renderItem={renderEntity}
                            keyExtractor={(item) => item.id}
                            removeClippedSubviews={true}
                        />
                    </View>
                )}
            </View>
        </View>
    )
}
