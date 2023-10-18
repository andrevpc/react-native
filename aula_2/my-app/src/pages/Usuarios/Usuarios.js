import { React, useContext } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Text, Pressable, View } from 'react-native-web';
import styles from './styles';
import { utilsContext } from '../../context';

export default function Usuarios(props) {
    const { data, setData } = useContext(utilsContext)
    console.log("data", data)

    const DATA = [
        {
            key: "0",
            title: 'Name'
        },
        {
            key: "1",
            title: 'Idade'
        },
        {
            key: "2",
            title: 'Sexo'
        },
        {
            key: "3",
            title: 'Recebe Notificação'
        },
    ]

    return (
        <View>
            <div style={styles.viewBox}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Text>{item.title}</Text>}
                    keyExtractor={item => item.key}
                />
            </div>
            <div style={styles.centerDiv}>
                <Pressable onPress={() => props.navigation.navigate('Calculadora')}>
                    <Text>Calculadora</Text>
                </Pressable>
            </div>
        </View>
    );
};