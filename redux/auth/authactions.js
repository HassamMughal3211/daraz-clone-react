import { auth, firestore, serverTimestamp } from './../../firebase/firebase';
import { REMOVE_USER, SET_USER } from './authconstants';

export var setUser = (user) => async (dispatch) => {
    try {

        dispatch({
            type: SET_USER,
            payload: {
                user
            }
        })

    } catch (error) {
        console.log(error)
    }
}
export var removeUser = () => ({
    type: REMOVE_USER

});

export var signup = ({ email, password, fullname,phoneNumber,address }) => async (dispatch) => {
    try {
        var { user: { uid } } = await auth.createUserWithEmailAndPassword(email, password);

        var userInfo = {
            fullname,
            email,
            phoneNumber,
            address,
            createdAt: serverTimestamp()
        }
        await firestore.collection("users").doc(uid).set(userInfo);

        var userDataForState = {
            fullname,
            email,
            uid,
            phoneNumber,
            address
        }
        dispatch(setUser(userDataForState));
    } catch (error) {
        console.log(error)
    }
}

export var signin = ({ email, password }) => async (dispatch) => {
    try {
        var { user: { uid } } = await auth.signInWithEmailAndPassword(email, password);

        var userData = await firestore.collection("users").doc(uid).get();
        var { fullname, email: userEmail,address, phoneNumber } = userData.data();

        var userDataForState = {
            fullname,
            userEmail,
            uid,
            address, 
            phoneNumber
        }
        dispatch(setUser(userDataForState));

    } catch (error) {
        console.log(error)

    }
}
export var signout = async (dispatch) => {
    try {
        await auth.signOut();

        dispatch(removeUser());
        
    } catch (error) {
        console.log(error)

    }
}