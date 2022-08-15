// importante para transformar string em number 'parseFloat'

import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button} from 'react-native'


export default () => {

  const [ bill, setBill] = useState('')
  const [ tip, setTip] = useState()
  const [ pct, setPct] = useState(10)

  

  const calcular = () => {

    let nBill = parseFloat(bill);

    if ( nBill ) {

      setTip ((pct/100) * nBill)
      

    } else {
      alert('preencha o campo')
    }
    
  }

  return(
    <View style={{flex:1, alignItems:'center'}} >

      <Text style={styles.titulo}>Calculadora de Gorjeta</Text>

      
      <TextInput  style={styles.inputbill}
      placeholder="Quanto deu a conta?"
      placeholderTextColor={'black'}
      keyboardType='numeric'
      value={bill}
      onChangeText={n => setBill (n)}
      />

      <View style={{flexDirection:'row', margin:20}}>
        <Button  title="5%" onPress={() => setPct(5) }/>
        <Button  title="10%" onPress={() => setPct(10) }/>
        <Button  title="15%" onPress={() => setPct(15) }/>
        <Button  title="20%" onPress={() => setPct(20) }/>
      </View>

      <Button 
      title={`Calcular ${pct}%`}
      onPress={calcular}
      />

      { tip > 0 &&

      <View style={styles.conteinerinf}>

      <Text style={{ fontSize:20, fontWeight:'bold', marginTop:20}}> Valor da Conta </Text>
      <Text> R$ {bill} </Text>

      <Text style={{ fontSize:20, fontWeight:'bold', marginTop:20}}> Valor da Gorjeta </Text>
      <Text> R$ { tip.toFixed(2) } (10%) </Text>

      <Text style={{ fontSize:20, fontWeight:'bold', marginTop:20}}> Valor Total </Text>
      <Text> R$ {(parseFloat (bill) + tip).toFixed(2) } </Text>

    </View>


      }

      
      

    </View>
  )
}

const styles = StyleSheet.create({

  titulo:{
    fontSize: 28,
    marginTop: 10,  
    fontWeight:'bold'  
  },

  inputbill:{
    backgroundColor:'#eee',
    width:'90%',
    borderRadius:25,
    paddingLeft: 20,
    marginTop: 20,

  },
  conteinerinf:{
    backgroundColor:'#eee',
    width:'90%',
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
  }



})

