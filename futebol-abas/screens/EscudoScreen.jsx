import React from 'react'
 import { View, Text, Image, StyleSheet } from 'react-native'
 
 const time = {
   nome: "São Paulo",
   escudo: "data:image/png;base64,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",
 }
 
 export default function EscudoScreen() {
   return (
     <View style={styles.container}>
       <Text style={styles.nome}>{time.nome}</Text>
       <Image source={{ uri: time.escudo }} style={styles.escudo} />
     </View>
   )
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'red',
     padding: 20
   },
   nome: {
     fontSize: 28,
     fontWeight: 'bold',
     marginBottom: 20,
     color: 'white'
   },
   escudo: {
     width: 300,
     height: 300,
     resizeMode: 'contain'
   }
 })