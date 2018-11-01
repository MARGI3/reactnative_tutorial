import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput} from 'react-native';

export default class Translator extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        //string split -> array
        //array map -> array
        //array join -> string
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="type here to translate"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && 'tttt').join(' ')}
                </Text>
            </View>
        );
    }

}