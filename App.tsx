import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source = {(require('./assets/logo.png'))} style={{width: 100, height:100, resizeMode: 'contain', marginTop:60}}/>
      <Text style = {styles.titulo}>marketspace</Text>
      <Text style = {styles.subtitulo}>Seu espaço de compra e venda</Text>
      <Text style = {styles.comando}>Acesse sua conta</Text>
      <View>
      <TextInput placeholder='  E-mail' style={styles.input} placeholderTextColor = '#cccace'></TextInput>
      <TextInput placeholder='  Senha' style={styles.input} placeholderTextColor = '#cccace'></TextInput>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titulo:{
    fontSize: 34,
    fontWeight: 'bold'
  },
  subtitulo:{
    fontSize: 14,
    color: '#89871B',
  },
  comando:{
    marginTop: 90,
    fontWeight: 500,
    color: '#89871B',
    fontSize: 12.5,
  },
  input:{
    width: 250,
    height: 50,
    backgroundColor:'#f7f7f8',
    marginTop: 10,
    borderRadius: 8
  }
});
