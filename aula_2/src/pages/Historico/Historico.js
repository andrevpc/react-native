import styles from './styles';
import { Button, View, Text, Pressable } from 'react-native-web';
import { useState, useContext,useEffect } from 'react';
import { calculadoraContext } from '../../context';

export default function Historico(props) {
    const {hist, setHist} = useContext(calculadoraContext)
    return (
        <View>
            <h1>Historico: </h1>
            {hist.map((op) => 
                <h2>{op}</h2>
            )}
            <div style={styles.centerDiv}>
                <Pressable onPress={() => props.navigation.navigate('Calculadora')}>
                    <Text>Calculadora</Text>
                </Pressable>
            </div>
        </View>
    );
};