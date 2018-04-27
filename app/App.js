// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import AppNavigation from './AppNavigation';

type Props = {
};

type State = {
};

export default class App extends Component<Props, State> {

    store: Store = createStore(reducers);

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Provider store={this.store}>
                <AppNavigation />
            </Provider>
        );
    }
}