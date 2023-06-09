import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <Image source={(require('./assets/logo.png'))} style={{ width: 100, height: 100, resizeMode: 'contain', marginTop: 10 }} />
      <Text style={styles.titulo}>marketspace</Text>
      <Text style={styles.subtitulo}>Seu espaço de compra e venda</Text>
      <Text style={styles.comando}>Acesse sua conta</Text>
      <View>
        <TextInput placeholder='  E-mail' style={styles.input} placeholderTextColor='#cccace' />
        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder='  Senha'
            style={styles.passwordInput}
            secureTextEntry={!passwordVisible}
            placeholderTextColor='#cccace'
          />
          <TouchableOpacity style={styles.eyeIconContainer} onPress={togglePasswordVisibility}>
            <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color='#888' />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.join}>Entrar</TouchableOpacity>
      </View>
      </View>
      <View style={styles.background2}>
          <Text style={{fontSize:14, color:'#a8a6aa', fontWeight:600}}>
            Ainda não tem acesso?
          </Text>
          <TouchableOpacity style={styles.bgText}>Criar uma conta</TouchableOpacity>

          </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  container2:{
    backgroundColor: '#D9D8DA',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
 
  },
  titulo: {
    fontSize: 34,
    fontWeight: 'bold'
  },
  subtitulo: {
    fontSize: 14,
    color: '#89871B',
  },
  comando: {
    marginTop: 90,
    fontWeight: '500',
    color: '#89871B',
    fontSize: 12.5,
  },
  input: {
    width: 250,
    height: 50,
    backgroundColor: '#f7f7f8',
    marginTop: 10,
    borderRadius: 8
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#f7f7f8',
    borderRadius: 8,
    paddingRight: 40, 
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  join: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#647AC6',
    borderRadius: 8,
    color: 'white',
    marginTop: 17,
    marginBottom: 60
    
  },
  background2:{
    marginTop:50,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    
    
  },
  bgText:{
    width:250,
    height:40,
    marginTop:15,
    display:'flex',
    textAlign:'center',
    backgroundColor:'#d9d8da',
    alignItems:'center',
    justifyContent:'center',
    color:'#534a57',
    borderRadius:5,
    fontFamily:'Arial',
    fontWeight:'bold',
    fontSize:13,

  }
});

