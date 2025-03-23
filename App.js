import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente'
import SegundoComponente from './componentes/SegundoComponente';
import TerceiroComponente from './componentes/TerceiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <PrimeiroComponente />
      <SegundoComponente />
      <TerceiroComponente />
      <JavascriptComponente />

      <Perfil
        nome="Rickson"
        idade={24}
        email="rickson@gmail.com"
      />

      <Perfil
        nome="Cecilia"
        idade={30}
        email="cecilia@gmail.com"
      />

      <Perfil
        nome="Santiago"
        idade={40}
        email="santiago@gmail.com"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
