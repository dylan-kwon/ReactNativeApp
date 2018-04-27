// @flow
import React, { Component } from 'react';
import { StyleSheet, View, ViewPagerAndroid, ToastAndroid } from 'react-native';

import RootStackNavigation from '../../AppNavigation';
import { HeaderTitle } from '../../components/header';

type Props = {
    navigation: RootStackNavigation
};

type State = {
};

export default class ViewPager extends Component<Props, State> {

    static navigationOptions = ({ navigation }: RootStackNavigation) => {
        let params = navigation.state.params;
        return {
            headerTitle: (
                <HeaderTitle title={'ViewPager'} />
            ),
            headerTintColor: '#3dbff0'
        }
    }

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    onPageSelected = (a: any) => {
        for (let key in a) {
            console.log('key = ' + key);
            console.log('value = ' + a[key]);
        }
    }

    render() {
        return (
            <ViewPagerAndroid
                style={styles.container}
                onPageSelected={this.onPageSelected}>

                <View
                    style={styles.pageItem1}
                    key={'1'} />

                <View
                    style={styles.pageItem2}
                    key={'2'} />

                <View
                    style={styles.pageItem3}
                    key={'3'} />

            </ViewPagerAndroid>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    pageItem1: {
        flex: 1,
        width: '100%',
        backgroundColor: '#3dbff0'
    },
    pageItem2: {
        flex: 1,
        width: '100%',
        backgroundColor: '#acd04a'
    },
    pageItem3: {
        flex: 1,
        width: '100%',
        backgroundColor: '#2a2a2a'
    }
});