// @flow
import Counter from './Counter';
import { connect } from 'react-redux';
import actions from '../../actions';

function mapStateToProps(state) {
    return {
        reducers: {
            count: state.counterReducer
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
            }
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);