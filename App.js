import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Item from './Components/Item';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      listItems: [],
    };
  }

  addItem = () => {
    if (this.state.item === '') {
      return;
    }

    this.setState({
      listItems: [...this.state.listItems, this.state.item],
      item: '',
    });
  };

  removeItem = (index) => {
    const arr = [...this.state.listItems];
    arr.splice(index, 1);
    this.setState({listItems: arr});
  };

  onChangeText = (value) => this.setState({item: value});

  // renderItem co tham so la 1 obj
  renderItem = ({item, index}) => {
    // obj{item: item, index: index} --> object destructuring
    return <Item title={item} removeItem={() => this.removeItem(index)}></Item>;
  };

  keyExtractor = (item, index) => {
    return index.toString();
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.newItemWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your work"
              onChangeText={this.onChangeText}
              value={this.state.item}
              onSubmitEditing={this.addItem}
            />
            <TouchableOpacity onPress={this.addItem}>
              <Icon name="plus-circle" size={20} color="#88B04B" />
            </TouchableOpacity>
          </View>
          {/* {this.state.listItems.map((item, index) => (
            <Item
              title={item}
              key={index}
              removeItem={() => this.removeItem(index)}
            />
          ))} */}
          <FlatList
            data={this.state.listItems}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },

  newItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: '#ddd',
  },

  textInput: {
    flexGrow: 1,
    fontSize: 18,
  },
});
