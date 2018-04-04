// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'

type Props = {}

export default class LayoutApp extends Component<Props> {

    constructor(props: Props) {
        super(props);
        // this.state = {};
    }

    render() {
        return (
            <View style={style.container}>

                <View style={style.fixedChild50}/>
                <View style={style.fixedChild100}/>
                <View style={style.fixedChild150}/>

                <View style={style.childContainer}>

                    <View style={style.flexChild1}/>
                    <View style={style.flexChild2}/>
                    <View style={style.flexChild3}/>

                </View>

            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    childContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    fixedChild50: {
        width: 50,
        height: 50,
        backgroundColor: '#8ce9ff'
    },
    fixedChild100: {
        width: 100,
        height: 100,
        backgroundColor: '#9affd2'
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