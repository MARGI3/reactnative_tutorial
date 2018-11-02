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
                    onPress={() => this.props.navigation.navigate('Details')} />
            </View>
        );
    }
}

class DetailScreen extends Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Detail screen</Text>
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

//每个js文件最多只能有一个default component
//被default 修饰的 component，作为js文件的 渲染 component
//这里定义的 App 模块 被default 修饰，所以在 index.js 中注册 当前js文件作为app入口
// App 模块的 render 函数就会被调用，进行渲染操作
export default class App extends Component {
    render() {
        return <RootStack/>
    }
}