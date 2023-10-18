import { React, useState, useContext } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Button, View, Text, Image, Pressable } from 'react-native-web';
import styles from './styles';
import { userContext } from '../../context';

export default function Cadastro(props) {
  const [name, setName] = useState('');
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const {users, setUsers} = useContext(userContext)

  const onClick = () => {
    
  }

  return (
    <View>
      <div style={styles.centerDiv}>
        <Image
          style={styles.img}
          source={require('./../../../assets/user.png')} />
      </div>

      <Text style={styles.text}>Nome: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
      />

      <Text style={styles.text}>Idade: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setIdade}
        value={idade}
        keyboardType="numeric"
      />

      <Text style={styles.text}>Sexo: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setSexo}
        value={sexo}
      />

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

      <Text style={styles.text}>Confirmar senha: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setConfirmarSenha}
        value={confirmarSenha}
        secureTextEntry={true}
      />

      <Button
        title="Cadastrar">
        <Text>Cadastrar</Text>
      </Button>
      <div style={styles.centerDiv}>
        <Pressable onPress={() => props.navigation.navigate('Login')}>
          <Text>Cancelar</Text>
        </Pressable>
      </div>
    </View>
  );
};