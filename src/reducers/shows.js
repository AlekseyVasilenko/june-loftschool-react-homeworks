import {handleActions} from 'redux-actions';
import {showRequest, showSuccess, showFailure} from '../actions/show';

export default handleActions(
   {
      [showRequest]: state => ({
         ...state,
         isLoading: true
      }),
      [showSuccess]: (state, action) => ({
         ...state,
         isLoading: false,
         entity: action.payload
      }),
      [showFailure]: (state, action) => ({
         ...state,
         isLoading: false,
         error: action.error
      })
   },
   {isLoading: false, entity: {}, error: null}
);
