import React from 'react';
import { Button, SafeAreaView, StyleSheet, View,TouchableOpacity,Text, ScrollView } from 'react-native';
import Titlebar from '../Components/Titlebar/Titlebar';
import Balance from '../Components/Balance/Balance';



export default function Home({navigation}) { 

  const [Pamt, setPamt] = React.useState(0);
  const [Damt, setDamt] = React.useState(0);
  const [Array, setArray] = React.useState([]);

  const updatePamt = (newValue) => {
    setPamt(newValue);
  };

  const updateArray = (newValue) => {
    setArray(newValue);
  }

  const updateDamt = (newValue) => {
    setDamt(newValue);
  }  

  return (
    <SafeAreaView style={styles.container}>
      <Titlebar  />
      <Balance Pamt={Pamt}  Damt={Damt} />
      
      <ScrollView style={{padding:5,marginTop:4,overflow:'scroll'}}>
      {Array.map(item=>(

        <View style={item.transaction==='credit'?{backgroundColor:'green',marginBottom:5,borderRadius:4,padding:2}:{backgroundColor:'red',marginBottom:5,borderRadius:4,padding:2}}>
          <Text>{item.type}  &#8377;{item.amt}</Text>
          <Text>{item.date}</Text>
          <Text>{item.desc}</Text>
        </View> 
      ))}
      </ScrollView>
      <TouchableOpacity 
      style={styles.buttonContainer} 
      onPress={() =>  navigation.navigate('AddTransaction', {Pamt: Pamt,updatePamt:updatePamt,Damt:Damt,updateDamt:updateDamt,Array:Array,setArray:updateArray})}
>
  <Text style={styles.button}>+</Text>
</TouchableOpacity>

     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
  buttonContainer: {
    position: 'absolute',
    bottom:40, 
    right: 20, 
  },
  button: 
  {
    height:60,
    width:60,
    borderRadius:15,
    backgroundColor:'purple',
    paddingLeft:25,
    paddingTop:18
   
  },
  
});
