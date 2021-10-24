import React,{useState} from 'react';
import {Alert, View, Text, StyleSheet, Button} from 'react-native';

export const Item = (props) => {
    const [id, setId] = useState()

    const twoOptionsAlertFunction = id => () => {
        //function to make two option alert
        Alert.alert(
           //This is title
          'Delete task',
            //This is body text
          'Are you sure you want to delete this task?',
          [
            {text: 'Yes', onPress: () => props.delete(id)},
            {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
          ],
          { cancelable: false }
          //on clicking out side, Alert will not dismiss
        );
      }
    //const delete = {() => props.delete(props.id)}
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{props.text}</Text>
        <Button title="Delete" 
            onPress={twoOptionsAlertFunction(props.id)}
            setId />
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
  })