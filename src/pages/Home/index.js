import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import Map from '../../components/Map';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Map/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
