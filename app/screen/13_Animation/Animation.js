// @flow
import React, { Component } from 'react';
import { Animated, StyleSheet, View, Button, TouchableOpacity, Text, ScrollView, Image, Easing } from 'react-native';

import RootStackNavigator from '../../App';
import { HeaderTitle } from '../00_Header/HeaderComponent';

import images from '../../Images/Images';

type Props = {
    navigation: RootStackNavigator
};

type State = {
    isOpacity: boolean,
    opacityAnimation: Animated,

    isTranslate: boolean,
    translateAnimation: Animated
};

export default class Animation extends Component<Props, State> {

    static navigationOptions = ({ navigation }: RootStackNavigator) => {
        let params = navigation.state.params;
        return {
            headerTitle: (
                <HeaderTitle
                    title={'Animation'} />
            ),
            headerTintColor: '#3dbff0'
        }
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            isOpacity: true,
            opacityAnimation: new Animated.Value(1),

            isTranslate: false,
            translateAnimation: new Animated.Value(0)
        };
    }

    startFadeAnimation = () => {
        let toValue = this.state.isOpacity ? 0 : 1;

        Animated.timing(this.state.opacityAnimation, {
            duration: 1000,
            toValue: toValue,
        }).start();

        this.setState((state: State) => {
            return {
                isOpacity: !state.isOpacity,
            }
        });
    }

    startTranslateAnimation = () => {
        let toValue = this.state.isTranslate ? 0 : 360;

        Animated.timing(this.state.translateAnimation, {
            duration: 1000,
            toValue: toValue
        }).start();

        this.setState((state) => {
            return {
                isTranslate: !state.isTranslate
            }
        });
    }

    render() {
        const {
            isOpacity,
            opacityAnimation,

            isTranslate,
            translateAnimation
        } = this.state;

        let image = images[1];
        let opcityButtonTitle = isOpacity ? 'FADE OUT' : 'FADE IN';
        let translateButtonTtitle = isTranslate ? 'Move Right' : 'Move Left';

        return (
            <ScrollView style={styles.container}>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={this.startFadeAnimation} >

                    <Text
                        style={styles.text}
                        backgroundColor={'#3dbff0'} >
                        {opcityButtonTitle}
                    </Text>

                </TouchableOpacity>

                <Animated.View
                    style={{ opacity: opacityAnimation }}>

                    <Image
                        style={styles.opacityView}
                        source={image} />
                </Animated.View>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={this.startTranslateAnimation} >

                    <Text
                        style={styles.text}
                        backgroundColor={'#3dbff0'} >
                        {translateButtonTtitle}
                    </Text>

                </TouchableOpacity>

                <View style={styles.translateView} >
                    <Animated.View style={[styles.translateCircle, {}]} />
                </View>

            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    button: {
        width: '100%',
        height: 48,
        backgroundColor: '#3dbff0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    opacityView: {
        width: '100%',
        height: 150,
    },
    translateView: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
    translateCircle: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        backgroundColor: '#3dbff0',
        marginLeft: 15,
        marginRight: 15,
    }
});