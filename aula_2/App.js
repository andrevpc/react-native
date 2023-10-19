import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login/Login'
import Cadastro from './src/pages/Cadastro/Cadastro'
import Usuarios from './src/pages/Usuarios/Usuarios';
import Calculadora from './src/pages/Calculadora/Calculadora';
import Historico from './src/pages/Historico/Historico';
import { utilsContext } from './src/context';
import { calculadoraContext } from './src/context';
import { userContext } from './src/context';
import { useState } from 'react';

export default function App() {
  const [data, setData] = useState()
  const [hist, setHist] = useState([])
  const [users, setUsers] = useState([])
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <utilsContext.Provider value={{ data, setData }}>
        <calculadoraContext.Provider value={{ hist, setHist }}>
          <userContext.Provider value={{ users, setUsers }}>
            <Stack.Navigator>
              <Stack.Screen name="Login" options={{ headerShown: false, title: "Login" }} component={Login} />
              <Stack.Screen name="Cadastro" options={{ headerShown: false }} component={Cadastro} />
              <Stack.Screen name="Usuarios" options={{ headerShown: false }} component={Usuarios} />
              <Stack.Screen name="Calculadora" options={{ headerShown: false }} component={Calculadora} />
              <Stack.Screen name="Historico" options={{ headerShown: false }} component={Historico} />
            </Stack.Navigator>
          </userContext.Provider>
        </calculadoraContext.Provider>
      </utilsContext.Provider>
    </NavigationContainer>
  );
}