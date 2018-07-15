import {handleActions} from 'redux-actions';
import {searchRequest, searchSuccess, searchFailure} from '../actions/search';

export default handleActions(
   {
      [searchRequest]: state => ({
         ...state,
         isLoading: true
      }),
      [searchSuccess]: (state, action) => ({
         ...state,
         isLoading: false,
         result: action.payload
      }),
      [searchFailure]: (state, action) => ({
         ...state,
         isLoading: false,
         error: action.error
      })
   },
   {isLoading: false, result: [], error: null}
);
