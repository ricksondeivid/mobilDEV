import React from 'react'
 import { View, Text, FlatList, StyleSheet } from 'react-native'
 
 const titulos = [
   {
     nome: "Campeonato Brasileiro",
     anos: [1977, 1986, 1991, 2006, 2007 ,2008]
   },
   {
     nome: "Copa Libertadores da América",
     anos: [1992, 1993, 2005]
   },
   {
     nome: "Copa do Brasil",
     anos: [2023]
   },
   {
     nome: "Mundial de Clubes",
     anos: [1992, 1993, 2005]
   },
 ]
 
 export default function TitulosScreen() {
   return (
     <View style={styles.container}>
       <FlatList
         data={titulos}
         keyExtractor={(item, index) => index.toString()}
         renderItem={({ item }) => (
           <View style={styles.card}>
             <Text style={styles.nome}>{item.nome}</Text>
             <Text style={styles.anos}>Anos: {item.anos.join(', ')}</Text>
           </View>
         )}
       />
     </View>
   )
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'black',
     padding: 10
   },
   card: {
     backgroundColor: 'red',
     padding: 35,
     marginBottom: 12,
     borderRadius: 10,
     elevation: 2,
     alignItems: 'center'
   },
   nome: {
     fontSize: 18,
     fontWeight: 'bold',
     marginBottom: 5
   },
   anos: {
     fontSize: 16,
     color: 'white'
   }
 })