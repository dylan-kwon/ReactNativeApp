// @flow

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type StyleAppProps = {}

export default class StyleApp extends Component<StyleAppProps> {

    mState: Object;

    constructor(props: StyleAppProps) {
        super(props);
        this.mState = {}
    }

    render() {
        return (
            <View style={style.container}>

                <Text style={style.black}>
                    black
                </Text>

                <Text style={[style.black, style.bold]}>
                    black-bold
                </Text>

                <Text style={style.blue}>
                    blue-bold
                </Text>

                <Text style={[style.blue, style.bold]}>
                    blue-bold
                </Text>

                <Text style={style.red}>
                    red
                </Text>

                <Text style={style.red}>
                    red-
                    <Text style={[style.red, style.bold]}>
                        bold
                    </Text>
                </Text>

            </View>
        );
    }

}

const style = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    black: {
        color: 'black',
        fontSize: 15
    },
    blue: {
        color: 'blue',
        fontSize: 15,
    },
    red: {
        color: 'red',
        fontSize: 15
    },
    bold: {
        fontWeight: 'bold'
    },
});