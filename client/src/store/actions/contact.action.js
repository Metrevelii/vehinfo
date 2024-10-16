import axios from 'axios';
import {
    SEND_CONTACT_REQUEST,
    SEND_CONTACT_SUCCESS,
    SEND_CONTACT_FAILURE
} from '../types';

export const sendContact = (contactData) => async (dispatch) => {
    dispatch({ type: SEND_CONTACT_REQUEST });
    
    try {
        const response = await axios.post('/api/contact', contactData, );
        dispatch({ type: SEND_CONTACT_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: SEND_CONTACT_FAILURE, payload: error.message });
    }
};