import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import Carrito from '../Screens/Carrito';

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}            
            />

            <Stack.Screen name="Carrito" component={Carrito}
            />

        </Stack.Navigator>
    )
}