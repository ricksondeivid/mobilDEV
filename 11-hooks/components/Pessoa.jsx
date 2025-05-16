import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function Pessoa() {
  const [pessoa, setPessoa] = useState({});

  function revelar() {
    const novaPessoa = {
      nome: 'Rickson',
      idade: '24',
      imagem:
        'https://images.ctfassets.net/3mv54pzvptwz/7Jj4ryLGJazS8pDUlCK2Vg/07213977dcbbc3d402bac1e1a27c86af/54331642772_05fa9ffe6b_o_dentro.jpg',
    };
    setPessoa(novaPessoa);
  }

  function revelar2() {
    const novaPessoa = {
      nome: 'Santiago',
      idade: '22',
      imagem:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFKgMi82TxJAc6Cco7xkPNBO1uhCMrmq6XHQWlVuIHlIdX1ZLU_dA4sQBrXhzVNzrRE0dZdr6f0Ok5OLCUxEvHGA',
    };
    setPessoa(novaPessoa);
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Text variant="displaySmall">Componente Pessoa</Text>
          {pessoa.nome && <Text variant="displaySmall">Nome: {pessoa.nome}</Text>}
          {pessoa.idade && <Text variant="displaySmall">Idade: {pessoa.idade}</Text>}
          {pessoa.imagem && (
            <Card.Cover source={{ uri: pessoa.imagem }} />
          )}
        </Card.Content>
        <Card.Actions>
          <Button onPress={revelar}>Revelar</Button>
          <Button onPress={revelar2}>Revelar2</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
