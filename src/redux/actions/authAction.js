import { auth } from "@/firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const signUp = (email, password) => async(dispatch) => {
    let userCredentials = await createUserWithEmailAndPassword(auth,email,password);
    dispatch({type: "SIGN_UP_SUCCESS", payload: userCredentials.user})
}

export const login = (email, password) => async (dispatch) => {
    let userCredentials = await signInWithEmailAndPassword(auth,email,password);
    dispatch({type: "LOGIN_SUCCESS", payload: userCredentials.user})
}

export const logout = () => async (dispatch) => {
    await signOut(auth)
    dispatch({type: "LOGOUT_SUCCESS"})
}