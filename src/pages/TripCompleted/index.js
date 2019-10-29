import React, { Component } from 'react'
import { Text, StyleSheet, View , ScrollView, Image} from 'react-native'

//imagens
import Star from '../../assets/img/baseline-star-24px.png';
import Description from '../../assets/img/mensagem.png';
import Cartao from '../../assets/img/figure-applepay.png';

//components
import ButtonBlue from '../../components/Buttons/buttonBlue';

export default class TripCompleted extends Component {
    static navigationOptions = { header: null };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}> Viagem finalizada </Text>
                    <View style={styles.wrap}>
                        <Text style={styles.total}> Total da sua viagem </Text>
                        <Text style={styles.money}> R$ 148,30</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.cartao}>
                            <Image source={Cartao}/>
                            <Text style={styles.formadepagamento}>Visa 6482</Text>
                        </View>
                    </View>
                    
                    <View style={styles.main}>
                        <Text style={styles.experience}>Como foi sua experiência?</Text>
                        <View style={styles.row}>
                            <Image source={Star}/>
                            <Image source={Star}/>
                            <Image source={Star}/>
                            <Image source={Star}/>
                            <Image source={Star}/>
                        </View>   
                    </View>
                    
                    <View style={styles.wrapButton}>
                        <Image style={styles.description} source={Description}/>
                        <ButtonBlue  text="ENVIAR FEEDBACK"/>
                    </View>
                </View>
            </ScrollView>  
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        textAlign:"center",
        fontSize:17,
        color:"#000",
        fontWeight:"bold",
        marginVertical:15
    },
    wrap:{
        backgroundColor:"#FF3F51"
    },
    total:{
        color:"#fff",
        textAlign:"center",
        marginTop:32,
        fontSize:15
    },
    money:{
        color:"#fff",
        textAlign:"center",
        marginTop:16,
        fontSize:34,
        fontWeight:"bold",
        marginBottom:56
    },
    row:{
        flexDirection:"row",
        marginHorizontal:16
    },
    cartao:{
        position:"relative",
        top:-25,
        backgroundColor:"#fff",
        width:"100%",
        padding:15,
        flexDirection:"row",
        borderRadius:4
    },
    wrapButton:{
        marginHorizontal:16,
        marginBottom:80
    },
    main:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:50
    },
    experience:{
        fontSize:17,
        color:"#000",
        marginBottom:24,
    },
    description:{
        marginBottom:80
    },
    formadepagamento:{
        marginLeft:15
    }
})
