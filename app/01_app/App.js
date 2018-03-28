// @flow
import React, {Component} from 'react';
import {Text, View} from 'react-native';


type BlinkProps = {
    text: string,
}

class Blink extends Component<BlinkProps> {

    mState: Object;

    constructor(props) {
        super(props);

        this.mState = {
            isTextVisibility: true
        };

        setInterval(() => {
            this.updateTextVisibility();
        }, 1000);
    }

    updateTextVisibility() {
        this.mState.isTextVisibility = !this.mState.isTextVisibility;
        this.setState(this.mState);
    }

    render() {
        let display = this.mState.isTextVisibility ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

export default class BlinkApp extends Component<null> {
    render() {
        return (
            <View style={{alignItems: 'center'}}>

                <Blink text={'I love to blink'}/>

                <Blink text={'Yes blinking is so great'}/>

                <Blink text={'Why did they ever take this out of HTML'}/>

            </View>
        );
    }
}
