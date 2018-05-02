// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ToastAndroid } from 'react-native';
import RootStackNavigation from '../../AppNavigation';
import { HeaderTitle } from '../../components/header';
import Counter from '../../components/counter'

type Props = {
    navigation: RootStackNavigation
};

type State = {
};

export default class Redux extends Component<Props, State> {

    static navigationOptions = ({ navigation }: RootStackNavigation) => {
        let params = navigation.state.params;
        return {
            headerTitle: (
                <HeaderTitle
                    title={'Redux'} />
            ),
            headerTintColor: '#3dbff0'
        }
    };

    counter: Counter;

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    counterRef = (ref: any) => {
        this.counter = ref.getWrappedInstance();
    }

    onPressButton = () => {
        let counterProps = this.counter.props;
        const {
            reducers
        } = counterProps;
        ToastAndroid.show('count: ' + reducers.counterReducer, ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title} >
                    {'React Native & Redux Eexample'}
                </Text>

                <Counter
                    style={styles.counter}
                    ref={this.counterRef} />

                <Button style={styles.showCount}
                    title={'click'}
                    onPress={this.onPressButton} />

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#2a2a2a',
        fontSize: 16,
    },
    counter: {
        marginTop: 30,
        marginBottom: 30
    },
    showCount: {
        width: 150,
        height: 50,
        fontSize: 14
    }
});