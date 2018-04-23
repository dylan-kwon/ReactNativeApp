// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

type Props = {
    title: string,
    onPress?: ?Function
};

type State = {
};

export default class HeaderTitle extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Text style={styles.headerTitle}
                onPress={this.props.onPress} >
                {this.props.title}
            </Text>
        );
    }

}

const styles = StyleSheet.create({
    headerTitle: {
        color: '#3dbff0',
        fontSize: 18,
        fontWeight: 'bold'
    },
});