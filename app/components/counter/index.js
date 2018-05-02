// @flow
import Counter from './Counter';
import { connect } from 'react-redux';
import actions from '../../actions';

function mapStateToProps(state) {
    return {
        reducers: {
            counterReducer: state.counterReducer
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            countUp: (count: number) => {
                dispatch(actions.countUp(count));
            },
            countDown: (count: number) => {
                dispatch(actions.countDown(count));
            },
            countReset: () => {
                dispatch(actions.countReset());
            },
            countRandom: () => {
                dispatch(actions.countRandom());
            }
        }
    };
}

const option = {
    withRef: true
}

export default connect(mapStateToProps, mapDispatchToProps, null, option)(Counter);