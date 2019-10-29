import React, { Component } from 'react'
import { Text, StyleSheet, View , Image} from 'react-native'

//imagens
import Volks from '../../assets/img/figure-brand-volkswagen.png'

export default class HeaderCar extends Component {
    render() {
        return (
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>GOLF 2.0</Text> 
                        <Text style={styles.placa}>
                            <Text style={styles.placa}> 
                                FRU 1280 
                            </Text> Rodizio toda sexta-feira</Text> 
                        </View>
                <View>
                    <Image source={Volks}/> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:24
    },
   title:{
       fontSize:20,
       color:"#000",
       marginBottom:14,
       fontWeight:"bold"
   },
   placa:{
       color:"#666666",
       fontSize:12
   },
})
