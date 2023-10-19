import { React, useContext } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Text, Pressable, View } from 'react-native-web';
import styles from './styles';
import { utilsContext } from '../../context';
import { userContext } from '../../context';

export default function Usuarios(props) {
    const { data, setData } = useContext(utilsContext)
    const { users, setUsers } = useContext(userContext)

    return (
        <View>
            <Text>Email: </Text>
            <div style={styles.viewBox}>
                <FlatList
                    data={users}
                    renderItem={({ item }) => <Text>{item.email}</Text>}
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