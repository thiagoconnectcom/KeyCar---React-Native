import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class buttonBlue extends Component {
    render() {
        return (
        
            <TouchableOpacity  style={styles.button}>
                <Text style={styles.textButton}> {this.props.text} </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#007AFF",
        borderRadius:5
    },
    textButton:{
        color:"#fff",
        fontSize:15,
        textAlign:"center",
        paddingVertical:15,
        
    }
})
