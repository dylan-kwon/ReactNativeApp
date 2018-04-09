// @flow
import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { HeaderTitle } from '../00_Header/HeaderComponent'
import globalStyle from '../00_Global/GloablStyle'

type Props = {}

export default class LayoutApp extends Component<Props> {

    static navigationOptions = ({ navigation }: any) => {
        let params = navigation.state.params;
        return {
            headerTitle: (
                <HeaderTitle
                    title={'Mail'} />
            ),
            headerTintColor: '#3dbff0',
            tabBarLabel: 'Mail',
            tabBarIcon: (
                <Image
                    style={globalStyle.tabBarIcon}
                    resizeMode={'contain'}
                    source={require('../../Images/TabIcon/ic_mail.png')} />
            ),
            drawerLabel: 'Mail',
            drawerIcon: ({ tintColor }: any) => (
                <Image
                    style={[globalStyle.drawerIcon, {tintColor: tintColor}]}
                    resizeMode={'contain'}
                    source={require('../../Images/DrawerIcon/ic_mail.png')} />
            )
        }
    }

    constructor(props: Props) {
        super(props);
        // this.state = {};
    }

    render() {
        return (
            <View style={style.container}>

                <View style={style.fixedChild50} />
                <View style={style.fixedChild100} />
                <View style={style.fixedChild150} />

                <View style={style.childContainer}>

                    <View style={style.flexChild1} />
                    <View style={style.flexChild2} />
                    <View style={style.flexChild3} />

                </View>

            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    childContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    fixedChild50: {
        width: 50,
        height: 50,
        backgroundColor: '#8ce9ff',
    },
    fixedChild100: {
        width: 100,
        height: 100,
        backgroundColor: '#9affd2',
    },
    fixedChild150: {
        width: 150,
        height: 150,
        backgroundColor: '#ffb994'
    },
    flexChild1: {
        flex: 1,
        backgroundColor: '#d6c1ff'
    },
    flexChild2: {
        flex: 2,
        backgroundColor: '#b791ff'
    },
    flexChild3: {
        flex: 3,
        backgroundColor: '#bd7bff'
    }
});