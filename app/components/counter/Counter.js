// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import actions from '../../actions';

function mapStateToProps(state) {
    return {
        count: state.counterReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        countUp: (num) => {
            dispatch(actions.countUp(num));
        },
        countDown: (num) => {
            dispatch(actions.countDown(num));
        }
    };
}

type Props = {
    style?: Object,
    count?: number,
    countUp?: Function,
    countDown?: Function
};

type State = {
};

class Counter extends Component<Props, State> {

    static defaultProps = {
        count: 0
    }

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            countUp,
            countDown
        } = this.props;

        if (!countUp || !countDown) {
            return;
        }

        return (
            <View style={[styles.container, this.props.style]}>

                <TouchableOpacity
                    style={styles.plusButton}
                    activeOpacity={0.7}
                    onPress={() => countUp(1)} >

                    <Text style={styles.font} >
                        {'+1'}
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.plusButton, styles.buttonMarginLeft]}
                    activeOpacity={0.7}
                    onPress={() => countUp(2)} >

                    <Text style={styles.font} >
                        {'+2'}
                    </Text>

                </TouchableOpacity>

                <Text style={[styles.count, styles.font]} >
                    {this.props.count}
                </Text>

                <TouchableOpacity
                    style={[styles.minusButton, styles.buttonMarginRight]}
                    activeOpacity={0.7}
                    onPress={() => countDown(1)} >

                    <Text style={styles.font} >
                        {'-1'}
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.minusButton}
                    activeOpacity={0.7}
                    onPress={() => countDown(2)} >

                    <Text style={styles.font} >
                        {'-2'}
                    </Text>

                </TouchableOpacity>

            </View>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    count: {
        width: 48,
        height: 48,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    plusButton: {
        width: 48,
        height: 48,
        backgroundColor: 'cyan',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    minusButton: {
        width: 48,
        height: 48,
        backgroundColor: 'pink',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    font: {
        color: "#2a2a2a",
        fontSize: 20,
    },
    buttonMarginLeft: {
        marginLeft: 10
    },
    buttonMarginRight: {
        marginRight: 10
    }
});