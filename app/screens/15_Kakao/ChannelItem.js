// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, TouchableHighlight } from 'react-native';

type Props = {
    channel: Channel,
    onPress?: ?Function
};

type State = {
};

export type Channel = {
    id: number,
    name: string,
    preview: string,
    dateTime: string,
    profileImage: string,
    undefinedCount: number,
}

export default class ChannelItem extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        let {
            name,
            preview,
            dateTime,
            profileImage,
            undefinedCount
        } = this.props.channel;

        if (profileImage) {
            profileImage = { uri: profileImage };
        } else {
            profileImage = require('../../res/Images/DrawerIcon/ic_profile.jpg');
        }

        return (
            <TouchableHighlight
                underlayColor={'#efeff4'}
                onPress={this.props.onPress} >

                <View style={styles.container}>

                    <Image
                        style={styles.profileImage}
                        source={profileImage}
                        resizeMode={'cover'} />

                    <View style={styles.contents} >

                        <View style={styles.header} >

                            <Text style={styles.name}>
                                {name}
                            </Text>

                            <View style={styles.flexDummy} />

                            <Text style={styles.dateTime} >
                                {dateTime}
                            </Text>

                        </View>

                        <View style={styles.infomation}>

                            <Text style={styles.undefinedCount} >
                                {undefinedCount}
                            </Text>

                            <Text
                                style={styles.preview}
                                numberOfLines={2} >
                                {preview}
                            </Text>

                        </View>

                    </View>

                </View>

            </TouchableHighlight>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 85,
        flexDirection: 'row'

    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: 12,
        alignSelf: 'center'
    },
    contents: {
        flex: 1,
        height: '100%',
        marginLeft: 12,
        marginRight: 12,
        flexDirection: 'column'
    },
    header: {
        flexDirection: 'row',
        marginTop: 15
    },
    name: {
        color: '#2a2a2a',
        fontSize: 15,
        fontWeight: 'bold'
    },
    dateTime: {
        color: '#9b9b9b',
        fontSize: 14
    },
    infomation: {
        flex: 1,
        flexDirection: 'row-reverse',
        marginTop: 3
    },
    preview: {
        flex: 1,
        color: '#9b9b9b',
        fontSize: 14,
        lineHeight: 21,
        marginRight: 20
    },
    undefinedCount: {
        width: 22,
        height: 22,
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 'bold',
        borderRadius: 12,
        backgroundColor: '#FF5B49',
        alignSelf: 'flex-end',
        marginBottom: 15
    },
    flexDummy: {
        flex: 1
    }
});