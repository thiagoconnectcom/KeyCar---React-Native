import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity , Image, ScrollView } from 'react-native'

//components
import HeaderCar from '../../components/HeaderCar';
import ButtonBlue from '../../components/Buttons/buttonBlue';
import ButtonIncolor from '../../components/Buttons/buttonIncolor';

//imagens
import Cartao from '../../assets/img/figure-applepay.png';
import ImgBack from '../../assets/img/bg-card.png';
import Back from '../../assets/img/background.png';

export default class BookNow extends Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <HeaderCar />
                    <View style={styles.mt5}>
                        <Text style={styles.title}>Como vai ser sua experiência?</Text>
                        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.flexRow}>
                                <Image style={styles.img} source={ImgBack}/>
                                <View style={styles.main}>
                                    <Text style={styles.headertitle}>OPEN HOUR</Text>                            
                                    <Text style={styles.text}>Pegue agora e devolva quando quiser</Text>
                                    <Text style={styles.money}>R$ 9 por hora</Text>
                                    <Text style={styles.text}>+R$ 0,80 / km rodado</Text>
                                </View>   
                            </View>

                            <View style={[styles.flexRow, styles.ml]}>
                                <Image style={styles.img} source={Back}/>
                                <View style={styles.main}>
                                    <Text style={styles.headertitle}>OPEN HOUR</Text>                            
                                    <Text style={styles.text}>Pegue agora e devolva quando quiser</Text>
                                    <Text style={styles.money}>R$ 9 por hora</Text>
                                    <Text style={styles.text}>+R$ 0,80 / km rodado</Text>
                                </View>   
                            </View>

                            <View style={[styles.flexRow, styles.ml]}>
                                <Image style={styles.img} source={ImgBack}/>
                                <View style={styles.main}>
                                    <Text style={styles.headertitle}>OPEN HOUR</Text>                            
                                    <Text style={styles.text}>Pegue agora e devolva quando quiser</Text>
                                    <Text style={styles.money}>R$ 9 por hora</Text>
                                    <Text style={styles.text}>+R$ 0,80 / km rodado</Text>
                                </View>   
                            </View>

                        </ScrollView>
                    </View>
            

                    <View>
                        <Text style={styles.title}>Pagamento</Text>

                        <View style={styles.row}>
                            <View style={styles.lineCartao}>
                                <Image source={Cartao}/> 
                                <Text style={styles.formaDePagamento}>Apple Pay</Text> 
                            </View>
                            <TouchableOpacity><Text style={styles.trocar}>TROCAR</Text></TouchableOpacity>
                        </View>

                        <ButtonIncolor text="ADICIONAR CUPOM PROMOCIONAL"/>
                            <View style={{marginVertical:15}}></View>
                        <ButtonBlue navigation={this.props.navigation} text="RESERVAR AGORA"/>

                        <Text style={styles.description}>
                            Ao continuar você concorda com nossos termos de uso.
                            Uma cobrança no valor de R$ 20 será feita no cartão utilizado e será
                            descontado ao fim da viagem. Você terá 30 minutos de cortesia para 
                            utilizar o veículo. Desejamos uma boa viagem.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:16
    },
    description:{
        textAlign:"center",
        fontSize:12,
        color:"#666666",
        marginTop:16
    },
    title:{
        fontSize:12,
        color:"#666666",
        marginBottom:16
    },
    mt5:{
        marginTop:38
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderWidth:1,
        borderColor:"#00000029",
        padding:15,
        marginBottom:8
    },
    lineCartao:{
        flexDirection:"row",
    },
    formaDePagamento:{
        marginLeft:15
    },
    trocar:{
        color:"#FF3F51"
    },
    flexRow:{
        flexDirection:"row",
        width:300,
        marginBottom:26,
    },
    text:{
        color:"#666666",
        fontSize:12,
        width:"80%"
    },
    headertitle:{
        fontSize:17,
        color:"#000",
        marginBottom:8
    },
    money:{
        fontSize:17,
        color:"#000",
        fontWeight:"bold",
        marginBottom:4,
        marginTop:16
    },
    main:{
        flexDirection:"column",
        marginHorizontal:12,
        marginTop:24,
        marginBottom:16
    },
    img:{
        height:"100%"
    },
    ml:{
        marginLeft:10
    }
})
