// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RootStackNavigation from '../../App';
import { HeaderTitle } from '../../components/header';
import Counter from '../../components/counter'
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../reducers/';

type Props = {
    store: Store,
    navigation: RootStackNavigation
};

type State = {
};

export default class Redux extends Component<Props, State> {

    static defaultProps = {
        store: createStore(reducers)
    }

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
    };

    render() {
        return (
            <Provider store={this.props.store} >
                <View style={styles.container}>

                    <Text style={styles.title} >
                        {'React Native & Redux Eexample'}
                    </Text>

                    <Counter style={styles.counter} />

                </View>
            </Provider>
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
        marginTop: 30
    }
});