import React, { useState } from 'react';
import { TextInput, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const AddTransaction = ({navigation,route}) => {
  console.log(route.params);
  const { Pamt, updatePamt ,Damt,updateDamt,Array,setArray } = route.params;

  const [selected, setSelected] = useState('option2');
  const [type, setType] = useState('option2');
  const [description, setDescription] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [Num, setNum] = useState('');

  function handleClick(option) {
    setSelected(option);
  }

  function handleType(option) {
    setType(option);
  }

  function handleDescription(props) {
    setDescription(props);
  }

  function Add() {
    
    if (selected === 'option1' && type === 'option1') {
      const parsedNum = parseInt(Num);
      if (!isNaN(parsedNum)) {
        let val=Pamt;
       
        updatePamt(val+ parsedNum); // Update Pamt using the updatePamt function
        let data={
          type:'cash',
          transaction:'credit',
          amt:parsedNum,
          date:currentDateTime.toLocaleString(),
          desc:description,
        }
        setArray([data,...Array]);
        setNum('')
        setDescription('')
        navigation.navigate('Home')
      }
    }
    if (selected === 'option2' && type === 'option1') {
      const parsedNum = parseInt(Num);
      if (!isNaN(parsedNum)) {
        let val=Pamt;
      
        let data={
          type:'cash',
          transaction:'debit',
          amt:parsedNum,
          date:currentDateTime.toLocaleString(),
          desc:description,
          
        }
        setArray([data,...Array]);
        updatePamt(val-parsedNum); // Update Pamt using the updatePamt function
        setNum('')
        setDescription('')
        navigation.navigate('Home')
      }
    }
    if(selected === 'option1' && type === 'option2'){
      const parsedNum = parseInt(Num);
      if (!isNaN(parsedNum)) {
        let val=Damt;
       
        updateDamt(val+ parsedNum); // Update Pamt using the updatePamt function
        let data={
          type:'digital',
          transaction:'credit',
          amt:parsedNum,
          date:currentDateTime.toLocaleString(),
          desc:description,
        }
        setArray([data,...Array]);
        setNum('')
        setDescription('')
        navigation.navigate('Home')
      }
    }
    if(selected === 'option2' && type === 'option2'){
      const parsedNum = parseInt(Num);
      if (!isNaN(parsedNum)) {
        let val=Damt;
        updateDamt(val-parsedNum); // Update Pamt using the updatePamt function
        let data={
          type:'digital',
          transaction:'debit',
          amt:parsedNum,
          date:currentDateTime.toLocaleString(),
          desc:description,
        }
        setArray([data,...Array]);
        setNum('')
        setDescription('')
        navigation.navigate('Home')
      }
    }
  }
  

  function handleChange(value) {
    setNum(value);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black', padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
        <TouchableOpacity style={selected === 'option1' ? { backgroundColor: 'purple', padding: 10 } : { padding: 10 }} onPress={() => handleClick('option1')}><Text>Income</Text></TouchableOpacity>
        <TouchableOpacity style={selected === 'option2' ? { backgroundColor: 'purple', padding: 10 } : { padding: 10 }} onPress={() => handleClick('option2')}><Text>Expense</Text></TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, padding: 10 }}>
        <TouchableOpacity style={type === 'option1' ? { backgroundColor: 'purple', padding: 10 } : { padding: 10 }} onPress={() => handleType('option1')}><Text>Physical</Text></TouchableOpacity>
        <TouchableOpacity style={type === 'option2' ? { backgroundColor: 'purple', padding: 10 } : { padding: 10 }} onPress={() => handleType('option2')}><Text>Digital</Text></TouchableOpacity>
      </View>

      <TextInput
        style={{ color: 'white', marginTop: 20, paddingHorizontal: 10, height: 50, borderColor: 'purple', borderWidth: 2, borderRadius: 8 }}
        placeholderTextColor="lightgray"
        placeholder="Enter The Amount"
        onChangeText={handleChange}
        keyboardType='numeric'
        value={Num}
      />

      <TextInput
        style={{ color: 'white', marginTop: 20, paddingHorizontal: 10, height: 50, borderColor: 'purple', borderWidth: 2, borderRadius: 8 }}
        placeholderTextColor="lightgray"
        placeholder="Description"
        onChangeText={handleDescription}
        value={description}
      />

      <View style={{ flexDirection: 'row-reverse' }}>
        <TouchableOpacity style={{ marginTop: 10, backgroundColor: 'purple', height: 40, width: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }} onPress={Add}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 50, backgroundColor: 'purple', height: 30 }}>
        <Text style={{ fontSize: 18 }}>{currentDateTime.toLocaleString()}</Text>
      </View>
    </SafeAreaView>
  );
}

export default AddTransaction;
