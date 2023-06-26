import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, useAnimatedValue } from 'react-native';
import Logo from '../assets/logo.png'
import CustomInput from '../components/CustomInput';
import styles from '../styles/styles';
import app from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const auth = getAuth(app);
  const navigation = useNavigation()
 
  useEffect(() => {
    console.log(auth.currentUser)
    if (auth.currentUser) {
      navigation.navigate("Listagem")
    }
  }, [auth.currentUser])

  const setEmailInputValue = (value) => {
    setEmail(value)
  }

  const setSenhaInputValue = (value) => {
    setSenha(value)
  }

  const mudarDeTela = () => {
    navigation.navigate("Listagem")
  }

  const criarUsuario = () => {
    createUserWithEmailAndPassword(auth, email, senha)
    .then((dadosDoUsuario) => {
      console.log(dadosDoUsuario)
    }).catch((err) => {
      console.error(err)
    })
  }

  const loginUsuario = () => {
    signInWithEmailAndPassword(auth, email, senha)
    .then((dadosDoUsuario) => {
      console.log(dadosDoUsuario)
    }).catch((err) => {
      console.error(err)
    })
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

      <TouchableOpacity style={{ marginTop: 15 }} onPress={loginUsuario}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 15 }} onPress={mudarDeTela}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Mudar de tela</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}