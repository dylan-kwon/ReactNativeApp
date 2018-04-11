// @flow
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

import DrawerNavigation from '../12_DrawerNavigator/DrawerNavigator';

import {HeaderTitle} from '../00_Header/HeaderComponent';
import globalStyles from '../00_Global/GloablStyle';

type Props = {
    naviagtaion: DrawerNavigation
};

type State = {
    text: string,
};

export default class TextInputApp extends Component<Props, State> {

    static navigationOptions = ({navigation}: DrawerNavigation) => {
        let params = navigation.state.params;
        let image = require('../../Images/DrawerIcon/ic_home.png')
        return {
            headerTitle: (
                <HeaderTitle title={'Home'}/>
            ),
            headerTintColor: '#3dbff0',
            drawerLabel: 'Home',
            drawerIcon: ({tintColor}: any) => (
                <Image
                    style={[globalStyles.tabBarIcon, {tintColor: tintColor}]}
                    source={image}/>
            )
        }
    }

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
                    placeholder={'Type here to translate!'}
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
        height: 40
    },
    text: {
        padding: 10,
        fontSize: 42
    }
});