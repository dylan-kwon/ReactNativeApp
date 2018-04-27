// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import RootStackNavigator, { screenTag } from '../../AppNavigation'
import CleaningList from '../09_Networking/NetworkingApp'
import { HeaderTitle, HeaderLeft, HeaderRight } from '../../components/header'

type Props = {
    navigation: RootStackNavigator,
    reducers?: Object
};

type State = {
    updateCount: number
};

export default class NavigationHome extends Component<Props, State> {

    static navigationOptions = ({ navigation }: RootStackNavigator) => {
        let params = navigation.state.params;

        let headerTitle = params ?
            'Home' + '(' + params.updateCount + ')' :
            'Home';

        return {
            headerStyle: {
                backgroundColor: '#ffffff'
            },
            headerTitle: (
                <HeaderTitle
                    title={headerTitle}
                    onPress={() => {
                        ToastAndroid.show('onClickHeaderTitle', ToastAndroid.SHORT);
                    }} />
            ),
            headerLeft: (
                <HeaderLeft
                    title={'LB'}
                    onPress={() => {
                        ToastAndroid.show('onClickHeaderLeft', ToastAndroid.SHORT);
                    }} />
            ),
            headerRight: (
                <HeaderRight
                    title={'RB'}
                    onPress={() => {
                        ToastAndroid.show('onClickHeaderRight', ToastAndroid.SHORT);
                    }} />
            )
        }
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            updateCount: 0
        };
    }

    updateTitle = () => {
        let params = {
            updateCount: this.state.updateCount += 1
        }
        this.props.navigation.setParams(params);
    }

    moveCleaningList = () => {
        let params = {
            id: 0,
            title: 'ABCD'
        };
        this.props.navigation.navigate(screenTag.CLEANING_LIST, params);
    }

    moveTabScreen = () => {
        this.props.navigation.navigate(screenTag.TAB_NAVIGATOR);
    }

    moveDrawerNavigation = () => {
        this.props.navigation.navigate(screenTag.DRAWER_NAVIGATOR);
    }

    moveAnimation = () => {
        this.props.navigation.navigate(screenTag.ANIMATION);
    }

    moveViewPager = () => {
        this.props.navigation.navigate(screenTag.VIEWPAGER);
    }

    moveKakao = () => {
        this.props.navigation.navigate(screenTag.KAKAO);
    }

    moveRedux = () => {
        this.props.navigation.navigate(screenTag.REDUX);
    }

    render() {
        const {
            reducers
        } = this.props

        if (!reducers) {
            return;
        }

        return (
            <View style={styles.container}>

                <View style={styles.rowContainer}>

                    <TouchableOpacity
                        style={styles.buttonLeft}
                        activeOpacity={0.7}
                        onPress={this.updateTitle}>

                        <Text style={styles.text}>
                            {'update Title'}
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonCenter}
                        activeOpacity={0.7}
                        onPress={this.moveCleaningList}>

                        <Text style={styles.text}>
                            {'CleaningList'}
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonRight}
                        activeOpacity={0.7}
                        onPress={this.moveTabScreen}>

                        <Text style={styles.text}>
                            {'Tab'}
                        </Text>

                    </TouchableOpacity>

                </View>

                <View style={styles.rowContainer}>

                    <TouchableOpacity
                        style={styles.buttonLeft}
                        activeOpacity={0.7}
                        onPress={this.moveDrawerNavigation}>

                        <Text style={styles.text}>
                            {'Drawer'}
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonCenter}
                        activeOpacity={0.7}
                        onPress={this.moveAnimation}>

                        <Text style={styles.text}>
                            {'Animation'}
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonRight}
                        activeOpacity={0.7}
                        onPress={this.moveViewPager} >

                        <Text style={styles.text}>
                            {'ViewPager'}
                        </Text>

                    </TouchableOpacity>

                </View>

                <View style={styles.rowContainer}>

                    <TouchableOpacity
                        style={styles.buttonLeft}
                        activeOpacity={0.7}
                        onPress={this.moveKakao}>

                        <Text style={styles.text}>
                            {'Kakao'}
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonCenter}
                        activeOpacity={0.7}
                        onPress={this.moveRedux} >

                        <Text style={styles.text}>
                            {'Redux'}
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonRight}
                        activeOpacity={0.7} >

                        <Text style={styles.text}>
                            {reducers.count}
                        </Text>

                    </TouchableOpacity>

                </View>

            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    rowContainer: {
        width: '100%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    buttonLeft: {
        flex: 1,
        height: '100%',
        backgroundColor: '#3dbff0',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 2.5
    },
    buttonCenter: {
        flex: 1,
        height: '100%',
        backgroundColor: '#3dbff0',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2.5,
        marginRight: 2.5
    },
    buttonRight: {
        flex: 1,
        height: '100%',
        backgroundColor: '#3dbff0',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2.5,
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});