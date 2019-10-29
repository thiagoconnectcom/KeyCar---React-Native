import React, { Component } from 'react'
import { Text, StyleSheet, View , Image, ScrollView,TouchableHighlight} from 'react-native'
import { SliderBox } from 'react-native-image-slider-box';

//components
import HeaderCar from '../../components/HeaderCar';

//imagens
import Icon1 from '../../assets/img/button-circle-opendoor.png'
import Icon2 from '../../assets/img/button-circle-closedoor.png'
import Icon3 from '../../assets/img/button-circle-engineon.png'
import Icon4 from '../../assets/img/button-circle-engineoff.png'
import ButtonMyCar from '../../assets/img/button-mycar.png';
import ButtonFinish from '../../assets/img/button-finishtravel.png';

export default class Cars extends Component {

    constructor(props) {
        super(props);
        this.state = {
          images: [
            'https://source.unsplash.com/1024x768/?nature',
            'https://source.unsplash.com/1024x768/?water',
            'https://source.unsplash.com/1024x768/?girl',
            'https://source.unsplash.com/1024x768/?tree'
          ]
        };
      }
    render() {
        return (
            <View style={styles.container}>
                <SliderBox images={this.state.images} />
                <ScrollView>
                    <View style={styles.wrap}>
                        <HeaderCar/>
                        <View style={[styles.row, styles.mt]}>
                            <View style={styles.left}>
                                <Text style={styles.duration}>01h49</Text>
                                <Text style={styles.description}>Tempo em viagem</Text>
                            </View>
                            <View style={styles.right}>
                                <Text style={styles.duration}>22km</Text>
                                <Text style={styles.description}>Distância percorrida</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.wrap25, styles.imgcenter]}>
                                <Image source={Icon1}/>
                                <Text style={styles.textCenter}>Destravar portas</Text>
                            </View>
                            <View style={[styles.wrap25, styles.imgcenter]}>
                                <Image source={Icon2}/>
                                <Text style={styles.textCenter}>Travar portas</Text>
                            </View>
                            <View style={[styles.wrap25, styles.imgcenter]}>
                                <Image source={Icon3}/>
                                <Text style={styles.textCenter}>Ligar motor</Text>
                            </View>
                            <View style={[styles.wrap25, styles.imgcenter]}>
                                <Image source={Icon4}/>
                                <Text style={styles.textCenter}>Desligar motor</Text>
                            </View>
                        </View>
                        <View style={[styles.row, styles.mt24,styles.wrapButton]}>
                            <View style={styles.imgcenter}>
                                <Image source={ButtonMyCar}/>
                                <Text style={styles.textCenter}>Localizar veículo</Text>
                            </View>
                            <View style={styles.imgcenter}>
                                <TouchableHighlight onPress={()=>{ this.props.navigation.navigate('Trip')}}>
                                    <Image source={ButtonFinish}/>
                                </TouchableHighlight>
                                <Text  style={styles.textCenter}>Finalizar viagem</Text>                                
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    wrap:{
      margin:16
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
   title:{
       fontSize:20,
       color:"#000",
       marginBottom:14
   },
   placa:{
       color:"#666666",
       fontSize:12
   },
   left:{
       width:"50%"
   },
   right:{
       width:"50%"
   },
   mt:{
       marginVertical:30,
   },
   duration:{
       fontSize:28,
       color:"#000",
       fontWeight:"bold",
       textAlign:"center"
   },
   description:{
        fontSize:15,
        color:"#666666",
        textAlign:"center" ,
        marginTop:16
   },
   wrap25:{
       width:"25%",
   },
   textCenter:{
       textAlign:"center",
       fontSize:15,
       color:"#000",
       marginTop:6,
       padding:5
   },
   imgcenter:{
        justifyContent: 'center',
        alignItems: 'center',
   },
   mt24:{
       marginTop:24,
   },
   wrapButton:{
       marginHorizontal: 20
   }
})
