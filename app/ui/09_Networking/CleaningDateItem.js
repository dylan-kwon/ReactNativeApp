// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import type { Cleaning } from './CleainngItem'

type Props = {
    cleaningDate: CleaningDate
};

type State = {
};

export type CleaningDate = {
    date: string,
    date_str: string,
    cleanings: Cleaning[]
}

export default class CleaningDateItem extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.date}>
                    {this.props.cleaningDate.date_str}
                </Text>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        height: 42,
        backgroundColor: '#3dbff0',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5
    },
    date: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});