import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';

class HomeScreen extends Component {

    //每个页面组件可以有一个名为navigationOptions的静态属性，它是一个对象或一个返回包含各种配置选项的对象的函数

    //静态属性 所以 this.props 中的 this 是无法指向component实例的 因此没有props可用
    //所以没法动态的从 navigation 的 param 中动态的获取参数来设置 title
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home screen</Text>
                <Button
                    title={'Go to Detail'}
                    onPress={() => {
                        this.props.navigation.navigate('Details', {
                            title: "dynamic detail title"
                        });
                    }}
                />
            </View>
        );
    }
}

class DetailScreen extends Component {

    // 如果将 navigationOptions 变成一个方法，那么 React Navigation 将通过一个
    // 包含 {navigation, navigationOptions, screenProps}属性的对象来调用 navigationOptions
    // 如果要根据参数动态设置 title 那么我就可以通过 navigation.getParam 来获取参数了
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('title', 'default title'),
        };
    };

    // 我就可以通过 navigation.setParams() 来更新参数
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
                <Button
                    title={"Update the title"}
                    onPress={() => this.props.navigation.setParams({title: "updated"})}/>
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Details: {
            screen: DetailScreen
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends Component {
    render() {
        return <RootStack/>
    }
}