// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
};

type State = {
};

export default class ListViewApp extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={style.container}>
            </View>
        );
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});