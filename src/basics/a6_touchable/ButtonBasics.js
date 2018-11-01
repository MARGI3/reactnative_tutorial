import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';


export default class ButtonBasics extends Component {

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button title={"Press me"} onPress={this._onPressButton}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={"Press me"} onPress={this._onPressButton} color={"#841584"}/>
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button title={"this looks great!"} onPress={this._onPressButton}/>
                    <Button title={"ok"} onPress={this._onPressButton} color={"#841584"}/>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center'
    },
    buttonContainer: {
      margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
