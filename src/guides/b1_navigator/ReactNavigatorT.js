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
                    onPress={() => this.props.navigation.navigate('Details')}/>
            </View>
        );
    }
}


// 如果当前处于 A 页面， navigation.navigate("A") 不会触发任何操作
// 如果需要新开一个 A 页面，则通过 navigation.push("A")  这是 回退栈内部会有两个 A 页面

//头部默认会展示 回退按钮
//navigation.goBack() 可以模拟回退操作，react native 通过监听物理返回按键，触发 goBack() 方法

//回退到 stack 中的指定页面 navigation.navigate('RouteName') 指定页面之上的 页面会自动出栈
//如果想回到 首页（第一个stack）可以通过 navigation.navigate('RouteName') 到首页的 RouteName
//也可以通过 navigation.popToTop() 直接回退到栈顶

//只要定义的 Component 在 router configuration 中定义了，那么 component 中的 prop.navigation 就是自动支持的
// router configuration 指 createStackNavigator 方法中 定义的 route
class DetailScreen extends Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Detail screen</Text>
                <Button
                    title={'Go to Detail again'}
                    onPress={() => this.props.navigation.push('Details')}/>
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

//每个js文件最多只能有一个default component
//被default 修饰的 component，作为js文件的 渲染 component
//这里定义的 App 模块 被default 修饰，所以在 index.js 中注册 当前js文件作为app入口
// App 模块的 render 函数就会被调用，进行渲染操作
export default class App extends Component {
    render() {
        return <RootStack/>
    }
}