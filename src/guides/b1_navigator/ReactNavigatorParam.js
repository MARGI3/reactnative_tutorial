import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';

class HomeScreen extends Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home screen</Text>
                <Button
                    title={'Go to Detail'}
                    onPress={() => {
                        this.props.navigation.navigate('Details', {
                            id: 33,
                            name: "Magic",
                            age: 25
                        });
                    }}
                />
            </View>
        );
    }
}

//navigation.navigate push 方法可以通过 第二个可选参数 来传递参数到目标路由页面
//this.props.navigation.navigate('RouteName', {paramName: 'value'})

//在页面中读取参数可以通过 this.props.navigation.getParam
//作为 getParam 的取代方式 你也可以通过 this.props.navigation.state.params 如果对应的参数没有赋值 则去到的结果是 null
class DetailScreen extends Component {

    render() {

        const { navigation } = this.props;//es6解构赋值
        const itemId = navigation.getParam('id', 0);
        const itemName = navigation.getParam('name', "default name");
        const itemAge = navigation.getParam('age', 0);

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Detail screen</Text>
                <Text>itemId: {JSON.stringify(itemId)} </Text>
                <Text>itemName: {JSON.stringify(itemName)}</Text>
                <Text>itemAge: {JSON.stringify(itemAge)}</Text>
                <Button
                    title={'Go to Detail again'}
                    onPress={() => {
                        this.props.navigation.push('Details', {
                            id: Math.floor(Math.random() * 100),
                            name: "lala",
                            age: 26
                        })
                    }}
                />
                <Button
                    title={"Go to Home"}
                    onPress={() => this.props.navigation.navigate("Home")}/>
                <Button
                    title={"Go back"}
                    onPress={() => this.props.navigation.goBack()}/>
            </View>
        );
    }
}

const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Details: {
        screen: DetailScreen
    },
    initialRouteName: 'Home'
});

export default class App extends Component {
    render() {
        return <RootStack/>
    }
}