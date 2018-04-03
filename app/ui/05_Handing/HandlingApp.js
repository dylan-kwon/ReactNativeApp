// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

type Props = {
};

type State = {
    pressCount: number,
    longPressCount: number
};

export default class HandlingApp extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            pressCount: 0,
            longPressCount: 0
        };
    }

    onPressButton() {
        return () => {
            this.setState((state) => {
                return {
                    pressCount: state.pressCount + 1
                }
            });
        }
    }

    onLongPressButton() {
        return () => {
            this.setState((state) => {
                return {
                    longPressCount: state.longPressCount + 1
                }
            })
        }
    }

    render() {
        return (
            <View style={style.container}>

                <View style={style.pressButtonContainer}>
                    <Button
                        style={style.pressButton}
                        title={"Press Me"}
                        onPress={this.onPressButton()}
                    />

                    <Text style={style.pressButtonClickCountText}>
                        {this.state.pressCount}
                    </Text>
                </View>

                <View style={style.longPressButtonContainer}>
                    <Button
                        style={style.longPressButton}
                        title={"LongPress Me"}
                        onPress={this.onLongPressButton()}
                    />

                    <Text style={style.longPressButtonClickCount}>
                        {this.state.longPressCount}
                    </Text>
                </View>

            </View>
        );
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    pressButtonContainer: {
        flexDirection: 'row'
    },
    pressButton: {
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    pressButtonClickCountText: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#2a2a2a'
    },
    longPressButtonContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    longPressButton: {
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    longPressButtonClickCount: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: "#2a2a2a"
    }
});

let object = {
    "cO": {
        "test": 'test'
    }
}