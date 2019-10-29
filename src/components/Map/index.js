import React, { Component } from 'react'
import { View, ImageBackground, Image, StyleSheet,TouchableHighlight } from 'react-native'

//imagens
import Mapa from "../../assets/img/map.jpg";
import Car from '../../assets/img/figure-vehicle-cover.png';

//components
import Details from '../../components/Details';

export default class Map extends Component {
    static navigationOptions = { header: null };

    constructor(props){
        super(props);
        this.state={
            details: false
        }
    }

    NextDetails = () => {
        this.setState({details: true})
    }

    render() {
        return (
            <>
            {this.state.details == false ? (
                <View style={styles.container}>
                    <ImageBackground style={styles.img} source={Mapa}>    
                        <TouchableHighlight style={styles.carOn} onPress={this.NextDetails}>
                            <Image  source={Car}/> 
                        </TouchableHighlight>
                    </ImageBackground>
                </View>
            ):(
                <Details/>
            )}
           
            </>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    img:{
        width:"100%",
        height:"100%"
    },
    carOn:{
        position:"absolute",
        bottom:50,
        right:100,
        zIndex:3
    }
})