// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import type { Item } from './ListItem'

type Props = {
    section: SectionItem,
    sectionMargin: number,
    onPress: Function
};

type State = {
};

export type SectionItem = {
    title: string,
    data: Array<Item>
};

export default class ListSection extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress} >

                <View style={[styles.container, { marginTop: this.props.sectionMargin }]}>
                    <Text style={styles.title}>
                        {this.props.section.title}
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
        backgroundColor: '#3dbff0'
    },
    title: {
        color: '#ffffff',
        fontSize: 21,
        fontWeight: 'bold'
    }
});