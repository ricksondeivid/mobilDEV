import { StyleSheet, View, StatusBar } from 'react-native';
import NomeNumero from './components/NomeNumero';
import Controle from './components/Controle';
import NumeroAleatorio from './components/NumeroAleatorio';
import Pessoa from './components/Pessoa';
import GeradorNumeroAleatorio from './components/GeradorNumeroAleatorio';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Pessoa></Pessoa>
      <GeradorNumeroAleatorio></GeradorNumeroAleatorio>
      {/* <NomeNumero />
      <NumeroAleatorio />
      <NomeNumero />
      <Controle /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
