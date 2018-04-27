import { connect } from 'react-redux'
import NavigationHome from './NavigationHome'

function mapStateToProps(state) {
    return {
        reducers: {
            count: state.counterReducer
        }
    };
}

export default connect(mapStateToProps)(NavigationHome)