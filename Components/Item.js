import React, {Component} from 'react';
import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export default class Item extends React.Component{
    render(){
        return(
            <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}> 
                <Text style={{fontSize: 20, fontWeight: '100'}}>{this.props.title}</Text>
                <TouchableOpacity onPress={this.props.removeItem}>
                    <Icon name="minus-circle" size={20} color='red'/> 
                </TouchableOpacity>
            </View>
        );
    }
}