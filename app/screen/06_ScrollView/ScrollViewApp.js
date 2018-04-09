// @flow
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, FlatList, Image } from 'react-native';
import { HeaderTitle } from '../00_Header/HeaderComponent'
import globalStyle from '../00_Global/GloablStyle'

type Props = {
};

type State = {
};

export default class ScrollViewApp extends Component<Props, State> {

    static navigationOptions = ({ navigation }: any) => {
        let params = navigation.state.params;
        return {
            headerTitle: (
                <HeaderTitle
                    title={'Home'} />
            ),
            headerTintColor: '#3dbff0',
            tabBarLabel: 'Home',
            tabBarIcon: (
                <Image
                    style={globalStyle.tabBarIcon}
                    resizeMode={'contain'}
                    source={require('../../Images/TabIcon/ic_home.png')} />
            ),
        }
    }

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={style.container}>

                <ScrollView
                    style={style.verticalScrollView}
                    horizontal={false}>

                    <View style={style.verticalScrollViewchild} />
                    <View style={style.verticalScrollViewchild} />
                    <View style={style.verticalScrollViewchild} />
                    <View style={style.verticalScrollViewchild} />
                    <View style={style.verticalScrollViewchild} />
                    <View style={style.verticalScrollViewchild} />
                    <View style={style.verticalScrollViewchild} />
                    <View style={style.verticalScrollViewchild} />
                    <View style={style.verticalScrollViewchild} />
                    <View style={style.verticalScrollViewchild} />
                    <View style={style.verticalScrollViewchild} />
                    <View style={style.verticalScrollViewchild} />
                    <View style={style.verticalScrollViewchild} />
                    <View style={style.verticalScrollViewchild} />
                    <View style={style.verticalScrollViewchild} />

                </ScrollView>


                <ScrollView
                    style={style.horizontalScrollView}
                    horizontal={true}>

                    <View style={style.horizontalScrollViewChild} />
                    <View style={style.horizontalScrollViewChild} />
                    <View style={style.horizontalScrollViewChild} />
                    <View style={style.horizontalScrollViewChild} />
                    <View style={style.horizontalScrollViewChild} />
                    <View style={style.horizontalScrollViewChild} />
                    <View style={style.horizontalScrollViewChild} />
                    <View style={style.horizontalScrollViewChild} />
                    <View style={style.horizontalScrollViewChild} />
                    <View style={style.horizontalScrollViewChild} />
                    <View style={style.horizontalScrollViewChild} />
                    <View style={style.horizontalScrollViewChild} />
                    <View style={style.horizontalScrollViewChild} />
                    <View style={style.horizontalScrollViewChild} />
                    <View style={style.horizontalScrollViewChild} />

                </ScrollView>

            </View>
        );
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    verticalScrollView: {
        flex: 1,
        flexDirection: "column",
    },
    horizontalScrollView: {
        flex: 1,
        flexDirection: 'row'
    },
    verticalScrollViewchild: {
        width: '100%',
        height: 50,
        marginBottom: 10,
        backgroundColor: '#37aff7'
    },
    horizontalScrollViewChild: {
        width: 50,
        height: '100%',
        marginRight: 10,
        backgroundColor: '#81d498'
    }
});