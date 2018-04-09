// @flow
import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, ToastAndroid, Image } from 'react-native';
import { HeaderTitle } from '../00_Header/HeaderComponent'
import globalStyle from '../00_Global/GloablStyle'

import ListItem from './ListItem'

import type { User } from './ListItem'

type Props = {
};

type State = {
    users: Array<User>
};

export default class ListViewApp extends Component<Props, State> {

    static navigationOptions = ({ navigation }: any) => {
        let params = navigation.state.params;
        let image = require('../../Images/TabIcon/ic_more.png');
        return {
            headerTitle: (
                <HeaderTitle
                    title={'More'} />
            ),
            headerTintColor: '#3dbff0',
            tabBarLabel: 'More',
            tabBarIcon: (
                <Image
                    style={globalStyle.tabBarIcon}
                    resizeMode={'contain'}
                    source={image} />
            ),
        }
    }

    static tabBarOptions = () => {
        return {
            activeTintColor: '#000000',
            inactiveTintColor: '#ffff00'
        }
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.makeUsers(30);
    }

    makeUsers(size: number) {
        for (let i = 0; i < size; i++) {
            let user: User = {
                key: i,
                name: 'User' + (i + 1),
                description: 'makeUser..'
            };
            this.state.users.push(user);
        }
    }

    renderItem = ({ item }: any) => {
        return (
            <ListItem
                item={item}
                onPress={this.onPressRenderItem(item)} />
        );
    }

    onPressRenderItem = (item: User) => {
        return () => {
            ToastAndroid.show(item.name, ToastAndroid.SHORT);
        }
    }

    render() {
        return (
            <FlatList
                style={style.container}
                data={this.state.users}
                renderItem={this.renderItem}
            />
        );
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    tabBarIcon: {
        width: 24,
        height: 24,
    }
});

