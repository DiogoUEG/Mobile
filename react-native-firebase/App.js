import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, documentId, getDoc } from "firebase/firestore";
import { Text, View } from 'react-native';
import db from './src/firebase/config';

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (usuario) => {
      if (usuario) {
        await getDoc(doc(db, 'users', usuario.uid))
          .then((document) => {
            const userData = document.data()
            setUser(userData)
            console.log(userData)
            setLoading(false)
            
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });

  }, []);

  if (loading) {
    return (
      <></>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
          
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>

    </NavigationContainer>
  );
}
