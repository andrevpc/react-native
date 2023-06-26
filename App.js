import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Logo from './assets/logo.png'
import CustomInput from './components/CustomInput';
import styles from './styles/styles';

export default function App() {
  
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
 
  const setEmailInputValue = (value) => {
    setEmail(value)
  }

  const setSenhaInputValue = (value) => {
    setSenha(value)
  }

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={{
          width: 100,
          height: 100
        }}
      />

      <CustomInput
        placeholder='E-mail'
        value={email} 
        funcao={setEmailInputValue}
      />

      <CustomInput
        placeholder='Senha'
        value={senha}
        funcao={setSenhaInputValue}
        isPassword={true}
      />

      <TouchableOpacity style={{ marginTop: 15 }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


