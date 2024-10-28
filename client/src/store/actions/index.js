import {
    ERROR_GLOBAL,
    SUCCESS_GLOBAL,
    CLEAR_NOTIFICATION,
    AUTH_USER,
    SIGN_OUT,
    UPDATE_USER_PROFILE,
    GET_SITE_VARS
} from '../types';

// user

export const userAuthenticate = ( user ) => ({
    type: AUTH_USER,
    payload: user
})

export const userSignOut = () => ({
    type:SIGN_OUT
})

export const userUpdateProfile = (userdata) => ({
    type:UPDATE_USER_PROFILE,
    payload:userdata
})

/// NOTIFICATIONS

export const errorGlobal = (msg) => ({
    type:ERROR_GLOBAL,
    payload: msg
})

export const successGlobal = (msg) => ({
    type:SUCCESS_GLOBAL,
    payload: msg
})

export const clearNotification = () => {
    return (dispatch) => {
        dispatch({
            type:CLEAR_NOTIFICATION
        })
    }
} 



///////// SITE

export const siteGetVars = (vars) => ({
    type: GET_SITE_VARS,
    payload: vars
}) 