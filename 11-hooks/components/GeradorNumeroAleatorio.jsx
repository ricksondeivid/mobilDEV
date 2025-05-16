import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function GeradorNumeroAleatorio() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);

  function gerar() {
    const numero = Math.floor(Math.random() * 101);
    setNumeroAleatorio(numero);
  }

  function resetar() {
    setNumeroAleatorio(0);
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Text variant="displaySmall">Gerador de Números:</Text>
          <Text variant="displaySmall">{numeroAleatorio}</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={gerar}>Atualizar</Button>
          <Button onPress={resetar}>Resetar</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
