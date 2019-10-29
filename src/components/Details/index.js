import React, { Component } from 'react'
import { Text, StyleSheet, View , Image, ScrollView, ImageBackground, TouchableOpacity} from 'react-native'

//imagens
import Walk from '../../assets/img/icon-circle-walk.png';
import Fuel from '../../assets/img/icon-circle-fuel.png';
import Gallery1 from '../../assets/img/gallery1.png';
import Doors from '../../assets/img/icon-circle-doors.png';
import Seat from '../../assets/img/icon-circle-seat.png';
import Cambio from '../../assets/img/icon-circle-gear-automatic.png';
import Photo from '../../assets/img/figure-client-photo-man.png';
import User from '../../assets/img/figure-vehicleowner-photo.png';
import Star from '../../assets/img/stars.png';
import Map from '../../assets/img/map.jpg';
import Car from '../../assets/img/figure-vehicle-cover.png';

//components
import ButtonBlue from '../Buttons/buttonBlue';

export default class Details extends Component {
    static navigationOptions = { header: null };
    
    render() {
        return (
            <>
            <View>
                <ImageBackground style={styles.map} source={Map}>
                    <Image style={styles.carOn} source={Car}/>
                </ImageBackground>
            </View>
            
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.rows}>
                        <View>
                            <Text style={styles.title}>GOLF 2.0</Text> 
                                <Text style={styles.placa}>
                                    <Text style={styles.placa}> 
                                        FRU 1280 
                                    </Text> Rodizio toda sexta-feira</Text> 
                                </View>
                            <Image source={Star}/>
                        <View>
                    </View>
                    </View>
                        <View style={styles.row}>
                            <View style={[styles.w50, styles.flexrow]}>
                                <Image source={Walk}/>
                                <View style={styles.cardIcon}>
                                    <Text>7 minutos</Text>
                                    <Text>a pé</Text>
                                </View>
                            </View>
                            <View style={[styles.w50, styles.flexrow]}>
                                <Image source={Fuel}/>
                                <View style={styles.cardIcon}>
                                    <Text>Flex</Text>
                                    <Text>45 Litros</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.button}>
                            <ButtonBlue text="QUERO ESTE CARRO"  />
                        </View>

                        <View style={styles.button}>
                            <Text style={styles.center}>Carro bem conservado, sem barulhos,
                                não fumantes são bem vindos, revisão e 
                                troca de óleo realizados em dia
                            </Text>
                        </View>

                        <View>
                            <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                                <Image style={styles.img} source={Gallery1}/>
                                <Image style={styles.img} source={Gallery1}/>
                                <Image style={styles.img} source={Gallery1}/>
                                <Image style={styles.img} source={Gallery1}/>
                            </ScrollView>
                        </View>

                        <View style={styles.line}>
                            <View style={styles.w33}>
                                <Image style={styles.logoIcons} source={Doors}/>
                                <Text>5 portas</Text>
                            </View>
                            <View style={styles.w33}>
                                <Image style={styles.logoIcons} source={Seat}/>
                                <Text>5 lugares</Text>
                            </View>
                            <View style={styles.w33}>
                                <Image style={styles.logoIcons} source={Cambio}/>
                                <Text>Automático</Text>
                            </View>
                        </View>

                        <View style={[styles.flexrow, styles.justifyContent]}>
                            <Text style={styles.label}>Ar condicionado</Text>
                            <Text style={styles.label}>Direção hidráulica</Text>
                            <Text style={styles.label}>Teto solar</Text>
                        </View>
                        <View style={[styles.flexrow, styles.justifyContent]}>
                            <Text style={styles.label}>Vidros elétricos</Text>
                            <Text style={styles.label}>Desembaçador traseiros</Text>
                        </View>
                        <View style={[styles.flexrow, styles.justifyContent]}>
                            <Text style={styles.label}>Banco em couro</Text>
                            <Text style={styles.label}>Desembaçador traseiros</Text>
                        </View>

                        <View>
                            <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                               <View style={styles.card}>
                                   <View style={styles.flexrow}>
                                        <Image source={Photo}/>
                                        <View style={styles.column}>
                                            <Text style={styles.name}>Grant Marshall</Text>
                                            <Text style={styles.tempo}>há 30 minutos</Text>
                                            <Text style={styles.description}>O carro está impecável, super confortável, 
                                                gostei bastante. Recomendo sem medo ;)
                                            </Text>
                                        </View>
                                   </View>
                               </View>
                               <View style={styles.card}>
                                   <View style={styles.flexrow}>
                                        <Image source={Photo}/>
                                        <View style={styles.column}>
                                            <Text style={styles.name}>Grant Marshall</Text>
                                            <Text style={styles.tempo}>há 30 minutos</Text>
                                            <Text style={styles.description}>O carro está impecável, super confortável, 
                                                gostei bastante. Recomendo sem medo ;)
                                            </Text>
                                        </View>
                                   </View>
                               </View>
                               <View style={styles.card}>
                                   <View style={styles.flexrow}>
                                        <Image source={Photo}/>
                                        <View style={styles.column}>
                                            <Text style={styles.name}>Grant Marshall</Text>
                                            <Text style={styles.tempo}>há 30 minutos</Text>
                                            <Text style={styles.description}>O carro está impecável, super confortável, 
                                                gostei bastante. Recomendo sem medo ;)
                                            </Text>
                                        </View>
                                   </View>
                               </View>
                            </ScrollView>
                        </View>

                        <View style={styles.centro}>
                            <Image style={styles.imgUser} source={User}/>
                            <Text style={styles.nameUser}>Paullo Norato</Text>
                            <Text style={styles.dataUser}>Membro desde abril de 2017</Text>
                        </View>
                </View>
            </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container:{
       flex:1,
        margin:16
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:30
    },
    w50:{
        width:"50%"
    },
    flexrow:{
        flexDirection:"row",
    },
    button:{
        marginBottom:32
    },
    center:{
        textAlign:"center",
        fontSize:13,
        color:"#000"
    },
    img:{
        marginHorizontal:4
    },
    line:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:32,
        marginHorizontal:30
    },
    logoIcons:{
        marginBottom:9,
    },
    w33:{
        alignItems:"center"
    },
    label:{
        backgroundColor:"#00000008",
        padding:5,
        borderRadius:20,       
        marginHorizontal:8
    },
    justifyContent:{
        justifyContent:"center",
        marginVertical:8,
    },
    column:{
        flexDirection:"column",
        marginLeft:16
    },
    card:{
        width:300,
        marginVertical:52
    },
    name:{
        fontSize:17,
        color:"#000",
        marginBottom:4
    },
    tempo:{
        color:"#666666",
        fontSize:12
    },
    description:{
        fontSize:12,
        marginTop:16,
        width:"40%"
    },
    centro:{
        alignItems:"center",
        marginBottom:55
    },
    imgUser:{
    },
    dataUser:{
       fontSize:12,
       color:"#666666"
    },
    nameUser:{
        fontSize:17,
        color:"#000",
        fontWeight:"bold"
    },
    cardIcon:{
        margin:9
    },
    rows:{
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
   map:{
       width:"100%",
       height:200
   },
   carOn:{
       position:"absolute",
       bottom:30,
       right:50,
   }
})
