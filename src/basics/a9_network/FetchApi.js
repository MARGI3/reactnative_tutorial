import React, {Component} from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchApi extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true, dataSource: 'init'}
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                this.setState({isLoading: false, dataSource: jsonResponse});
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View>
                <Text>{this.state.dataSource.title}</Text>
                <Text>{this.state.dataSource.description}</Text>
                <View>
                    <FlatList

                        style={styles.container}

                        renderItem={({item, index}) => {
                            return <Text style={styles.item}> {index} - {item.title} - {item.releaseYear} </Text>
                        }}

                        data={this.state.dataSource.movies}

                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        padding: 20,
        marginTop: 20,
    },
    item: {
        justifyContent: 'center',
        padding: 10
    }

});