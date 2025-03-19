import { StatusBar } from 'expo-status-bar';
import { Button, Image , StyleSheet ,Text ,View , ScrollView, } from 'react-native';

export default function App() {

    // Lógica do código
function alerta(){
  alert("MELHORES TORCIDAS ORGANIZADAS!!")
}
  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />


      <Text style={{marginBottom:"20", marginTop:60, fontSize:30}}>ORGANIZADA</Text>
      <Text style={{marginBottom:"10"}}>NOME: ORGANIZAÇÕES FIEIS</Text>
      <Text style={{marginBottom:"10"}}>RECONHECIMENTO: INTERNACIONAL</Text>
      <Text style={{marginBottom:"10"}}>TRADIÇÕES: DIVERSAS</Text>
      <Text style={{marginBottom:"10"}}>LINGUAGEM: ESTRANGEIRAS</Text>

      <Button title='NÃO ENTENDI?' onPress={alerta}></Button>



      <Image
            source={{
              uri:"https://otempo.scene7.com/is/image/sempreeditora/futebol%20internacional-barcelona-barcelona%20punido%20uefa-uefa-1727449085?qlt=90&ts=1727449170849&dpr=off"
            }}
      
            style={{
              marginBottom:"10",
              height:300,
              width:300,
            }}
            />

            <Image
            source={{
              uri:"https://pbs.twimg.com/media/FxtPTXZWwAE9Z4O?format=jpg&name=4096x4096"
            }}
      
            style={{
              marginBottom:"10",
              height:300,
              width:300,
            }}
            />

<Image
            source={{
              uri:"https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0804%2Fr579402_1296x729_16%2D9.jpg"
            }}
      
            style={{
              marginBottom:"10",
              height:300,
              width:300,
            }}
            />

<Image
            source={{
              uri:"https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2021/11/22/619ba96ddc2bc.jpeg"
            }}
      
            style={{
              marginBottom:"10",
              height:300,
              width:300,
            }}
            />

<Image
            source={{
              uri:"https://colunadofla.com/wp-content/uploads/2023/06/torcida-flamengo-x-fluminense-maracana-copa-do-brasil.jpg"
            }}
      
            style={{
              marginBottom:"10",
              height:300,
              width:300,
            }}
            />

<Image
            source={{
              uri:"https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2025/02/02/neymar-funkeiros-e-rappers-raulbaretta_photo-santos-fc-qxzfeo3kdvmq.jpg"
            }}
      
            style={{
              marginBottom:"10",
              height:300,
              width:300,
            }}
            />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
