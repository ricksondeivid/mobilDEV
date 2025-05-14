import { StyleSheet, View, StatusBar } from 'react-native';
import NomeNumero from './components/NomeNumero';
import Controle from './components/Controle';
import NumeroAleatorio from './components/NumeroAleatorio';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NomeNumero />
      <NumeroAleatorio />
      <NomeNumero />
      <Controle />
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
