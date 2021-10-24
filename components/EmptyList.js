import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

export default function EmptyList() {
    return (
        <View style={styles.container}> 
            <Image source={ require('../assets/mirage-list-is-empty.png') } style={styles.emptyImage} />
            <Text style={styles.emptyText}>Add an Item</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        paddingTop: 20,
        display:'flex',
        flex: 1,
        alignItems:'center',
        justifyContent: 'space-around',

    },
    emptyImage:{
        width: 350,
        height:200,
    },
    emptyText:{
        color:"#fff",

        marginTop: 30,
        fontSize: 30,
    },
})
