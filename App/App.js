import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/Login'
import Listagem from './pages/Listagem';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Listagem' component={Listagem} />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}