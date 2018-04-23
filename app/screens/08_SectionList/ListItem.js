// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';

type Props = {
    item: Item,
    onPress: Function
};

type State = {
};

export type Item = {
    id: number,
    value: number
};

export default class ListItem extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress} >

                <View style={styles.container}>
                    <Text style={styles.item} >
                        {this.props.item.value}
                    </Text>
                </View>

            </TouchableNativeFeedback>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
    item: {
        color: '#3dbff0',
        fontSize: 16
    }
});