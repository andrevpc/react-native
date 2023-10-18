
import { React, useState, useContext } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Button, View, Text, Pressable } from 'react-native-web';
import styles from './styles';
import { utilsContext } from '../../context';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const {data, setData} = useContext(utilsContext);

  function irUsuarios() {
    setData({...data, login: email})
    props.navigation.navigate('Usuarios')
  }

  return (
    <View>
      <Text style={styles.text}>Email: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />

      <Text style={styles.text}>Senha: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setSenha}
        value={senha}
        secureTextEntry={true}
      />
      <Button onPress={() => irUsuarios()}
        title="Login">
        <Text>Login</Text>
      </Button>
      <div style={styles.centerDiv}>
        <Pressable onPress={() => props.navigation.navigate('Cadastro')}>
          <Text>Cadastrar</Text>
        </Pressable>
      </div>
    </View>
  );
}