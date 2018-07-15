import {handleActions} from 'redux-actions';
import {showRequest, showSuccess, showFailure} from 'actions/show';

export default handleActions(
    {
        [showRequest]: state => ({
            ...state,
            isFetching: true
        }),
        [showSuccess]: (state, action) => ({
            ...state,
            isFetching: false,
            entity: action.payload
        }),
        [showFailure]: state => ({
            ...state,
            isFetching: false
        })
    },
    {entity: {}, isFetching: false}
);