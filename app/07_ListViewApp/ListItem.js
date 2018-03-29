// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';

type Props = {
    item: User,
    onPress: Function
};

type State = {
};

export type User = {
    key: number,
    name: string,
    description: string
}

export default class ListItem extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}>

                <View style={style.container}>

                    <Text style={style.key} >
                        {"id: " + this.props.item.key}
                    </Text>

                    <Text style={style.name} >
                        {"name: " + this.props.item.name}
                    </Text>

                    <Text style={style.description} >
                        {"desciption: " + this.props.item.description}
                    </Text>

                </View>
            </TouchableNativeFeedback>
        );
    }

}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        margin: 5,
        padding: 10
    },
    key: {
        color: '#2a2a2a',
        fontSize: 14,
    },
    name: {
        color: '#2a2a2a',
        fontSize: 14,
        marginTop: 5
    },
    description: {
        color: '#2a2a2a',
        fontSize: 14,
        marginTop: 5
    }
});