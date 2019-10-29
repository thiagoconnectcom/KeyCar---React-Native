import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class buttonIncolor extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}> {this.props.text} </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#FF3F51",
        borderRadius:5
    },
    textButton:{
        color:"#FF3F51",
        fontSize:15,
        textAlign:"center",
        paddingVertical:15
    }
})
