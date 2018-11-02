import React, {Component} from 'react';
import {View, ScrollView, PermissionsAndroid, Button, CameraRoll, Image} from 'react-native';

export default class CameraRollT extends Component {

    constructor() {
        super();
        this.state = {loaded: false , photos: 'empty'};
        //注意 非 arrow function 调用 this 时 bind方式
        this._loadLocalPhotos = this._loadLocalPhotos.bind(this);
    }

    _loadLocalPhotos() {
        CameraRoll.getPhotos({first: 20, assetType: 'Photos'})
            .then((result) => {
                this.setState({loaded: true, photos: result.edges});
            })
            .catch((error) => {
                console.error(error)
            });
    };

    //这种方式，不需要 bind this 操作
    // 将 arrow function 赋值给 _loadLocalPhoto2
    // _loadLocalPhotos2 = () => {
    //     CameraRoll.getPhotos({first: 20, assetType: 'Photos'})
    //         .then((result) => {
    //             this.setState({loaded: true, photos: result.edges});
    //         })
    //         .catch((error) => {
    //             console.error(error)
    //         });
    // };

    _generateItem() {
        return (this.state.photos.map((photo, index) => {
            return (
                <View style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
                   <Image key={index} source={{uri: photo.node.image.uri}} style={{width: 200, height: 400}}/>
                </View>
            );
        }));
    }


    render() {
        if (!this.state.loaded) {
            return (
                <View>
                    <View style={{margin: 20, padding: 20}} >
                        <Button title={"Permission"} onPress={requestStoragePermission}/>
                    </View>
                    <View style={{margin: 20, padding: 20}} >
                        <Button title={"load images"} onPress={this._loadLocalPhotos}/>
                    </View>
                </View>
            );
        }

        return (
            <View>
                <ScrollView>
                    {this._generateItem()}
                </ScrollView>
            </View>
        );

    }
}

async function requestStoragePermission() {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                'title': 'request external permission',
                'message': 'message request permission'
            });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("you can use the camera")
        } else {
            console.log("permission denied")
        }
    } catch (e) {
        console.warn(e)
    }
}
