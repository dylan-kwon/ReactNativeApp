// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';

import RootStackNavigator from '../../App'

type Props = {
    navigation: RootStackNavigator
};

type State = {
    updateCount: number
};

export default class NavigationHome extends Component<Props, State> {

    static navigationOptions = ({ navigation }: RootStackNavigator) => {
        let params = navigation.state.params;
        return {
            title: params ? params.title : 'Home'
        }
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            updateCount: 0
        };
    }

    updateTitle = () => {
        let updateCount = this.state.updateCount += 1;
        let params = {
            title: 'updated' + '(' + updateCount + ')'
        }
        this.props.navigation.setParams(params);
    }

    moveCleaningList = () => {
        let params = {
            id: 0,
            title: 'ABCD'
        };
        this.props.navigation.navigate('CleaningList', params);
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.rowContainer}>

                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.7}
                        onPress={this.updateTitle}>

                        <Text style={styles.text}>
                            {'update Title'}
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.7}
                        onPress={this.moveCleaningList}>

                        <Text style={styles.text}>
                            {'CleaningList'}
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.7}>

                        <Text style={styles.text}>
                            {'None'}
                        </Text>

                    </TouchableOpacity>

                </View>

            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    rowContainer: {
        width: '100%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        width: '31.5%',
        height: '100%',
        backgroundColor: '#3dbff0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});