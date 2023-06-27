import { Text, View } from 'react-native'
import axios from 'axios'

import styles from '../styles/styles';
import { useEffect, useState } from 'react';


export default function Listagem() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const getTransactions = async() => {
      try {
        const response = await axios.get('http://localhost:3000/transactions')
        if(response.status === 200) {
          setTransactions(response.data)
          console.log(transactions)
        }
      } catch (err) {
        console.log(err)
      }
    }
    getTransactions()
  }, [])


  return (
    <View style={styles.container}>
      <Text>Listagem</Text>
      { transactions.map((transactions, index) => {
        return (
          <View key={index}>
            <Text>{ transactions.reference }</Text>
            <Text>{ transactions.amount }</Text>
            <Text>{ transactions.date }</Text>
          </View>
        )
      }) }
    </View>
  );
}