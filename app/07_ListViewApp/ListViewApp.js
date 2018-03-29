// @flow
import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, ToastAndroid } from 'react-native';
import ListItem from './ListItem'
import type {User} from './ListItem'

type Props = {
};

type State = {
    users: Array<User>
};

export default class ListViewApp extends Component<Props, State> {

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

    onPressRenderItem = (item:User) => {
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
    }
});

