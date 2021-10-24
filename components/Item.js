import React,{useState} from 'react';
import {Alert, View, Text, StyleSheet, Button} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export const Item = (props) => {
    
    const simpleAlertFunction = item => () => {
        //function to make simple alert
        Alert.alert('Task: '+ item.name+
        '\nCreated at: '+ item.createdAt +
        
        '\nNote: to delete swipe right'
        );
      }
    
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{props.text}</Text>
        <FontAwesomeIcon icon={faInfoCircle} 
            style={styles.infoIcon}
            onPress={simpleAlertFunction(props.item)}
        />
        
        
      </View>
    )
  }

  const styles = StyleSheet.create({
      container: {
          padding:10,
          backgroundColor: '#0c154d',
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          margin: 1,
          borderRadius: 20,

      },
      text: {
          flex:1,
          color: '#fff',
      },
      infoIcon:{
          color: '#daddf2'
      }
  })