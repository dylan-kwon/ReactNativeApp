// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import RootStackNavigation from '../../App';
import { HeaderTitle } from '../../components/header';

type Props = {
    navigation: RootStackNavigation
};

type State = {
};

export default class Redux extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = ({ navigation }: RootStackNavigation) => {
        let params = navigation.state.params;
        return {
            headerTitle: (
                <HeaderTitle
                    title={'Redux'} />
            ),
            headerTintColor: '#3dbff0'
        }
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});