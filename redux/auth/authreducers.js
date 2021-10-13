import { REMOVE_USER, SET_USER } from './authconstants';
var intialState = null;
var authReducer = (state = intialState , action) => {
    var { type, payload } = action;
    switch (type) {
        case SET_USER:
            return payload.user;
        case REMOVE_USER:
            return null;
        default:
            return state;
    }

};

export default authReducer; 