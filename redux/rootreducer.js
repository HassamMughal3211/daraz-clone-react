import { combineReducers} from 'redux'
import authReducer from './auth/authreducers'

var rootReducer = combineReducers({
    auth : authReducer
})
export default rootReducer;