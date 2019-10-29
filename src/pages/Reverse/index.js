import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image ,ScrollView, TouchableOpacity} from 'react-native'
import Spinner from 'react-native-spinkit';

//imagens
import User from '../../assets/img/figure-vehicleowner-photo.png';
import Check from '../../assets/img/figure-check.png';

export default class Reverse extends Component {
    static navigationOptions = { header: null };

    constructor(props){
        super(props);
        this.state={
          loading:true
        }
    }

    async componentDidMount(){
         setTimeout(() => {
             this.setState({loading: false})
         }, 5000);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                    {this.state.loading == true ? (
                       <Text style={styles.title}> Enviando sua reserva </Text>
                      ):(
                        <Text style={styles.title}> Tudo okay </Text>
                      )
                    }
                    
                    {this.state.loading == true ? (
                        <Spinner 
                           size={53}
                           style={styles.spinner}  
                           type={'Circle'}
                           />
                        ):(
                            <Image source={Check}/>
                        )
                    }
                        
                    </View>
                    <View style={styles.perfil}>
                        <Image source={User} />
                        {this.state.loading == true ? (
                            <>
                            <Text style={styles.nameUser}>Paullo está analisando seu perfil</Text>
                            <Text style={styles.temp}>Isso pode demorar alguns minutos...</Text>
                            </>
                         ):(
                            <>
                            <Text style={styles.nameUser}>Paullo aceitou sua reserva</Text>
                            <Text style={styles.temp}>Agora é só ir pegar o carro ;)</Text>
                            </>
                        )
                        }
                        
                    </View>
                    <View style={styles.buttonFooter}>
                    {this.state.loading == true ? (
                        <TouchableOpacity>
                            <Text style={styles.textButton}>Cancelar</Text>
                        </TouchableOpacity>
                    ):(
                        <TouchableOpacity>
                            <Text style={styles.textButton}>Fechar</Text>
                        </TouchableOpacity>
                     )
                    }   
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
    header:{
        backgroundColor:"#FF3F51",
        height:395,
        alignItems:"center",
        position:"relative",
    },
    title:{
        color:"#fff",
        fontSize:17,
        fontWeight:"bold",
        letterSpacing:0.41,
        marginTop:67
    },
    perfil:{
        alignItems:"center",
        position:"relative",
        top:-70
    },
    nameUser:{
        fontSize:20,
        color:"#000",
        fontWeight:"bold",
        marginHorizontal:48,
        marginTop:24,
        textAlign:'center',
        marginBottom: 16
    },
    temp:{
        fontSize:12,
        color:"#666666"
    },
    buttonFooter:{
        alignItems:'center',
        marginBottom:80,
    },
    textButton:{
        color:"#FF3F51"
    },
    spinner:{
        color:"#fff",
        marginTop:56
    }
})
