// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import images from '../../Images/Images'

type Props = {
    index: number,
    cleaning: Cleaning,
    onPressItem?: ?Function
};

type State = {
};

export type Cleaning = {
    id: number,
    date: string,
    date_str: string,
    manager_status: number,
    manager_status_str: number,
    start_time: string,
    unit: Unit
}

export type Unit = {
    id: number,
    title: string
}

export default class CleaningItem extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        let {
            index,
            cleaning,
            onPressItem
        } = this.props

        let image = images[index % images.length]
        let unit = cleaning.unit;

        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onPressItem}>

                <View style={styles.container}>

                    <Image
                        style={styles.image}
                        source={image}
                        resizeMode={'cover'} />

                    <View style={styles.content} >

                        <Text style={styles.title} >
                            {unit.title}
                        </Text>

                        <Text style={styles.date}>
                            {cleaning.date_str}
                        </Text>

                        <Text style={styles.status}>
                            {cleaning.manager_status_str}
                        </Text>

                    </View>

                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        height: 150,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    content: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    title: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18
    },
    date: {
        color: '#ffffff',
        fontSize: 14,
        marginTop: 10
    },
    status: {
        color: '#ffffff',
        fontSize: 14,
        marginTop: 5
    }
});