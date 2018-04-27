// @flow
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    TouchableHighlight,
    Text,
    ToastAndroid,
    TouchableOpacity
} from 'react-native';

type Props = {
    title?: ?string,
    description?: ?string,
    positive?: ?string,
    negative?: ?string,
    onPressPositive?: ?Function,
    onPressNegative?: ?Function,
    onDismiss?: ?Function,
    onRequestClose?: ?Function,
    transparent?: ?boolean,
    visible?: ?boolean,
    animationType?: ?string,
    isCancelable?: ?boolean,
    dimAmount?: ?number
};

type State = {
    visible: ?boolean
};

export default class PopuppModal extends Component<Props, State> {

    static defaultProps = {
        visible: false,
        isCancelable: true,
        transparent: true,
        animationType: 'fade',
        positive: "확인",
        negative: "취소"
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            visible: this.props.visible
        };
    }

    componentWillReceiveProps(nextProps: Props) {
        this.setModalVisible(nextProps.visible);
    }

    onPressBackground = () => {
        if (!this.props.isCancelable) {
            return;
        }
        this.setModalVisible(false);
    }

    onPressPositive = () => {
        if (this.props.onPressPositive) {
            this.props.onPressPositive();
        }
        this.setModalVisible(false);
    }

    onPressNegative = () => {
        if (this.props.onPressNegative) {
            this.props.onPressNegative();
        }
        this.setModalVisible(false);
    }

    onRequestClose = () => {
        if (!this.props.isCancelable) {
            return;
        }
        if (this.props.onRequestClose) {
            return this.props.onRequestClose();
        }
        this.setModalVisible(false);
    }

    setModalVisible = (visible: ?boolean) => {
        if (visible === this.state.visible) {
            return;
        }
        if (!visible && this.props.onDismiss) {
            this.props.onDismiss();
        }
        this.setState((state) => {
            return {
                visible: visible
            }
        });
    }

    render() {
        let {
            dimAmount
        } = this.props;

        if (dimAmount === undefined || dimAmount === null) {
            dimAmount = 0.0;
        }
        return (
            <Modal
                visible={this.state.visible}
                transparent={this.props.transparent}
                animationType={this.props.animationType}
                onRequestClose={this.onRequestClose} >

                <View style={styles.container} >

                    <TouchableOpacity
                        activeOpacity={1.0}
                        style={[styles.background, {
                            backgroundColor: 'rgba(0, 0, 0, ' + dimAmount + ')'
                        }]}
                        onPress={this.onPressBackground} >
                        <View />

                    </TouchableOpacity>

                    <View style={styles.modal} >

                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>

                        <Text style={styles.description} >
                            {this.props.description}
                        </Text>

                        <View style={styles.buttonContainer} >

                            {this.props.positive &&
                                <TouchableOpacity
                                    style={styles.positiveButton}
                                    activeOpacity={0.7}
                                    onPress={this.onPressPositive} >

                                    <Text style={styles.positiveText}>
                                        {this.props.positive}
                                    </Text>

                                </TouchableOpacity>
                            }

                            {this.props.negative &&
                                <TouchableOpacity
                                    style={styles.negativeButton}
                                    activeOpacity={0.7}
                                    onPress={this.onPressNegative} >

                                    <Text style={styles.negativeText}>
                                        {this.props.negative}
                                    </Text>

                                </TouchableOpacity>
                            }

                        </View>

                    </View>

                </View>

            </Modal>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    modal: {
        width: '80%',
        flexDirection: 'column',
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 4
    },
    title: {
        color: '#423630',
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        color: '#2a2a2a',
        fontSize: 14,
        marginTop: 10
    },
    buttonContainer: {
        flexDirection: 'row-reverse',
        marginTop: 15
    },
    positiveButton: {
        padding: 10
    },
    negativeButton: {
        padding: 10,
        marginRight: 5
    },
    positiveText: {
        color: '#423630',
        fontSize: 14,
    },
    negativeText: {
        color: '#423630',
        fontSize: 14
    }
});