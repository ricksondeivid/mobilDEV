import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import UsuarioScreen from '../screens/UsuarioScreen'
import HomeScreen from '../screens/HomeScreen'


const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>

        <Stack.Screen 
        name='HomeScreen' 
        component={HomeScreen} 
        options={{
            title: "Lista de Usuários"
            
        }} 
        />

        <Stack.Screen 
        name='UsuarioScreen' 
        component={UsuarioScreen}
        options={{
            title: "Lista de Usuário "
        }} 
        
        />

    </Stack.Navigator>
  )
}

