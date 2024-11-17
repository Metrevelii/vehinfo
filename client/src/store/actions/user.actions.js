import * as actions from './index';
import axios from 'axios';

import { getAuthHeader, removeTokenCookie, getTokenCookie } from '../../Components/utils/tools';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const userRegister = (values) => {
    return async(dispatch)=>{
        try{
            const user = await axios.post(`/api/auth/register`,{
                email:values.email, 
                password:values.password,
                firstname: values.firstname,
                lastname: values.lastname
            });
            dispatch(actions.userAuthenticate({data: user.data.user,auth: true}))
            dispatch(actions.successGlobal('Welcome !! check you mail to verify account.'))
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}

export const userSignIn = (values) => {
    return async(dispatch)=>{
        try{
            const user = await axios.post(`/api/auth/signin`,{
                email:values.email, 
                password:values.password
            });
            dispatch(actions.userAuthenticate({data: user.data.user,auth: true}))
            dispatch(actions.successGlobal('You logged in.'))
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))

        }
    }
}

export const userIsAuth = () => {
    return async(dispatch)=>{
        try{
            const site = await axios.get('/api/site');
            dispatch(actions.siteGetVars(site.data));

            const translation = await axios.get('/api/translations');
            dispatch(actions.translationGetVars(translation.data));


            if(!getTokenCookie()){
                throw new Error();
            }

            const user = await axios.get(`/api/auth/isauth`, getAuthHeader());
 

            dispatch(actions.userAuthenticate({data: user.data,auth: true}))
        } catch(error){
            dispatch(actions.userAuthenticate({data:{},auth:false}));
        }
    }
}

export const userSignOut = () => {
    return async(dispatch)=> {
        removeTokenCookie();
        dispatch(actions.userSignOut());
        dispatch(actions.clearNotification());
        dispatch(actions.successGlobal('You have been logged out.'))
    }
}

export const userUpdateProfile = (data) => {
    return async(dispatch, getState )=>{
        try{
            const profile =await axios.patch(`/api/users/profile`,{
                data:data
            }, getAuthHeader());

            const userData ={
                ...getState().users.data,
                firstname: profile.data.firstname,
                lastname:  profile.data.lastname,
            }
            
            dispatch(actions.userUpdateProfile(userData))
            dispatch(actions.successGlobal('Profile updated !!'))
        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
} 

export const userRequestPasswordReset = (email) => {
    return async(dispatch) => {
        try {
       
            await axios.post('/api/users/password-reset-request', { email });

        
            dispatch(actions.successGlobal('Password reset email sent. Please check your inbox.'));
        } catch (error) {
       
            dispatch(actions.errorGlobal(error.response.data.message || 'Something went wrong.'));
        }
    }
}

export const resetPassword = ({ token, password }) => {
    return async (dispatch) => {
        try {
            // Sending password reset request to the backend
            await axios.post(`/api/users/password-reset`, {
                token,
                password
            });

            // Dispatching success notification
            dispatch(actions.successGlobal('Your password has been successfully reset.'));
            return { success: true };  // Return success status
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred while resetting your password.";
            dispatch(actions.errorGlobal(errorMessage));  // Dispatching error message
            return { success: false, error: errorMessage };  // Return error status
        }
    };
};