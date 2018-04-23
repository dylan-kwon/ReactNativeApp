// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Button, ToastAndroid } from 'react-native';

type Props = {
    title: string,
    color?: ?string,
    onPress?: ?Function
};

type State = {
};

export default class HeaderRight extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        let {
            title,
            color,
            onPress
        } = this.props;

        if (!color) {
            color = '#3dbff0';
        }

        return (
            <View style={styles.headerRight} >
                <Button
                    title={title}
                    color={color}
                    onPress={onPress} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    headerRight: {
        marginRight: 10
    }
});