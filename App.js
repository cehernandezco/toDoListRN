import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';

import {Item} from './components/Item'
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmptyList from './components/EmptyList';

export default function App() {

  const [ data, setData ] = useState([])
  const [ validInput, setValidInput ] = useState(false)
  const [ input, setInput ] = useState()
  const [ appInit, setAppInit ] = useState(true)

  useEffect( () => {
    if(appInit ){
      getData()
      setAppInit(false)
    }else{
      storeData()
    }
  }, [data])

  const onTextChange = (value) => {
    setInput(value)
    if(value.length >= 3){
      setValidInput(true)
    }else{
      setValidInput(false)
    }
  }

  const onSubmit = (event) => {
    const id = new Date().getTime().toString()
    const item = { id: id, name: input}
    setData( [...data, item])
    setInput(null)
    setValidInput(false)
    
  }

  const onDelete = (id) => {
    let items = [...data]
    let newData = items.filter( (item) => {
      if( item.id !== id){
        return item
      }
    })
    setData(newData)
    
  }

  const storeData = async() => {
    const stringified = JSON.stringify( data )
    try{
      await AsyncStorage.setItem( "listData" , stringified )
    }    
    catch(error){
      console.log(error)
    }  
  }

  const getData = async () => {
    try {
      const stringified = await AsyncStorage.getItem("listData")
      console.log( stringified )
      setData( (stringified !== null) ? JSON.parse(stringified) : [] )
    } catch (error) {
      console.log( error )
    }
  }

  

  const Renderer = ({item}) => ( <Item text={item.name} delete={onDelete} id={item.id} /> )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ToDo List</Text>
      </View>
      <FlatList data={data} 
      keyExtractor={ (item) => item.id } renderItem={Renderer}
      ListEmptyComponent={() => <EmptyList/>} />
      <View style={styles.footer}>
        <TextInput 
          style={styles.input} 
          placeholder="Add Task...min 3 characters"
          onChangeText={onTextChange}
          value={input}/>
        <TouchableOpacity 
          style={(validInput)? styles.button : styles.buttonDisabled}
          disabled = {(validInput) ? false : true }
          onPress={onSubmit}>
          <Text style={ (validInput)? styles.buttonText : styles.buttonTextDisabled}>Add to list</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#daddf2',
    marginTop: Constants.statusBarHeight
  },
  header: {
    display: 'flex',
    flexDirection: 'row'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    margin:10,
  },
  title:{
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold',
    color: '#0c154d',
  },
  input:{
    backgroundColor: '#d6ebff',
    fontSize: 20,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    padding: 5,
    flex: 1,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#0c154d',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 50,
  },
  buttonText: {
    color: '#FFF',
    padding: 10,

  },
  buttonTextDisabled: {
    color: '#000',
    padding: 10,
    

  },
  buttonDisabled: {
    backgroundColor: '#C0C0C0',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 50,
  },
});
