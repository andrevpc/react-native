import styles from './styles';
import { Button, View, Text, Pressable } from 'react-native-web';
import { useState, useContext,useEffect } from 'react';
import { create, all } from 'mathjs'
import { calculadoraContext } from '../../context';

export default function Calculadora(props) {
    const math = create(all,  {})
    const {hist, setHist} = useContext(calculadoraContext)

    const buttonsOperations = ["+", "-", "/", "*"]
    const buttonsNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    const [displayedText, setdisplayedText] = useState("")

    const solve = () => {
        setHist([...hist, displayedText + " = " + math.evaluate(displayedText)])
        setdisplayedText(math.evaluate(displayedText))
    }

    return (
        <View>
            <div style={styles.centerDiv}>
                <div style={styles.square}>
                    <Text style={styles.displayedText}>{displayedText}</Text>
                </div>
            </div>
            <div style={styles.buttonDiv}>
                {buttonsOperations.map((txt) =>
                    <Pressable style={styles.button} onPress={() => setdisplayedText(displayedText + txt)}>
                        <Text style={styles.text}>{txt}</Text>
                    </Pressable>
                )}
                <Pressable style={styles.button} onPress={() => solve()}>
                    <Text style={styles.text}>=</Text>
                </Pressable>
            </div>

            <div style={styles.centerDiv}>
                <div style={styles.numbers}>
                    {buttonsNumbers.map((txt) =>
                        <Pressable style={styles.button} onPress={() => setdisplayedText(displayedText + txt)}>
                            <Text style={styles.text}>{txt}</Text>
                        </Pressable>
                    )}
                </div>
            </div>

            <div style={styles.centerDiv}>
                <Pressable style={styles.button} onPress={() => setdisplayedText("")}>
                    <Text style={styles.text}>Limpar</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => props.navigation.navigate('Historico')}>
                    <Text style={styles.text}>Historico</Text>
                </Pressable>
            </div>
            <div style={styles.centerDiv}>
                <Pressable onPress={() => props.navigation.navigate('Usuarios')}>
                    <Text>Usuarios</Text>
                </Pressable>
            </div>
        </View>
    );
};