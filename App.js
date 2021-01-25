import React, {Component} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Item from './Components/Item';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      item: '',
      listItems: [],
    }
  }

  addItem = () => {
    var arr = [...this.state.listItems];
    arr.push(this.state.item);
    this.setState({listItems: arr});
    this.setState({item: ''});
  }

  removeItem = (index) => {
    var arr = [...this.state.listItems];
    arr.splice(index, 1);
    this.setState({listItems: arr});
  }

  render(){
    return(
      <View style={{margin: 50}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, paddingBottom: 20, borderBottomColor: '#ddd'}}>
          <TextInput style={{flexGrow: 1, fontSize: 18}} placeholder="Enter your work" onChangeText={(value) => this.setState({item: value})}
        value={this.state.item} onSubmitEditing={this.addItem}/>
          <TouchableOpacity onPress={this.addItem}>
            <Icon name="plus-circle" size={20} color='#88B04B'/>
          </TouchableOpacity>
        </View>
        {
          this.state.listItems.map((item, index) => <Item title={item} key={index} removeItem={() => this.removeItem(index)}/>)
        }
      </View>
    );
  }
}