// @flow
/**
 * 테스트 커밋
 */
import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {};

type State = {
    text: string,
};

export default class TextInputApp extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    onChangeText() {
        return (changedText: string) => {
            this.setState(() => {
                return {
                    text: changedText
                };
            });
        }
    }

    render() {
        return (
            <View style={style.container}>

                <Text style/>

                <TextInput
                    style={style.textInput}
                    placeholder={"Type here to translate!"}
                    onChangeText={this.onChangeText()}
                />

                <Text style={style.text}>
                    {this.state.text.split(' ').map(value => value && '🍕').join(' ')}
                </Text>

            </View>
        );
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
    },
    textInput: {
        height: 40,
    },
    text: {
        padding: 10,
        fontSize: 42
    }
});