import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

export const AddInput = (props) => {
    

    return (
        <View style={styles.container}>      
            <Text 
                placeholder="Add Task... min 3 characters" 
                style={styles.input} 
                onChangeText={props.onTextChange}
                value={props.input}/>
            
          
            <TouchableOpacity 
                style={(props.validInput)? styles.submitButton : styles.submitButtonDisabled}
                disabled = {(props.validInput) ? false : true }
                onPress={props.onSubmit}>
                <Text style={ (props.validInput)? styles.buttonText : styles.buttonTextDisabled}>Add to list</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                alert('button clicked')
                }}
            >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: Constants.statusBarHeight,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    header: {
      display: 'flex',
      flexDirection: 'row'
    },
    input:{
      backgroundColor: '#fff',
      fontSize: 20,
      borderColor: '#DDDDDD',
      borderWidth: 1,
      padding: 10,
      flex: 1,
      marginBottom: 20,
      borderRadius: 10,
    },
    submitButton: {
      backgroundColor: '#F5F5F5',
      borderColor: '#DDDDDD',
      borderWidth: 1,
      borderRadius: 50,
      marginBottom: 20,
    },
    buttonText: {
      color: '#FFF',
      padding: 10,
  
    },
    buttonTextDisabled: {
      color: '#000',
      padding: 10,
  
    },
    submitButtonDisabled: {
      backgroundColor: '#C0C0C0',
      borderColor: '#DDDDDD',
      borderWidth: 1,
    },
  })
  
