import React from 'react';
import TelaLogin from './src/components/TelaLogin';
import { NavigationContainer } from '@react-navigation/native';
import { CreateStacknavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
    console.log(TelaLogin);
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "TelaLogin">
                <Stack.Screen name="TelaLogin" component = {TelaLogin} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}