import React,{useState} from 'react';
import {Alert, View, Text, StyleSheet, Button} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Moment from 'moment';
export const Item = (props) => {
    
    const simpleAlertFunction = item => () => {
        //function to make simple alert
        let completedText = item.status?'\nCompleted at :'+Moment(new Date(item.completedAt)).format('DD MMM YYYY') :''

        Alert.alert('Task: '+ item.name+
        '\nCreated at: '+ Moment(new Date(item.createdAt)).format('DD MMM YYYY') +
        completedText +
        '\nNote: to delete swipe right'
        );
      }
    
    return(
      <View style={(props.item.status) ? styles.containerDone : styles.container}>
        <Text style={(props.item.status) ? styles.textDone : styles.text}>{props.text}</Text>
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
      containerDone: {
        padding:10,
        backgroundColor: '#C0C0C0',
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
      },
      textDone: {
        flex: 1,
        textDecorationLine: "line-through",
        color: "gray"
      },
  })