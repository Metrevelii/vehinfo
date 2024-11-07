import axios from 'axios';
import { getAuthHeader } from '../../Components/utils/tools';


import {
    SEND_CONTACT_REQUEST,
    SEND_CONTACT_SUCCESS,
    SEND_CONTACT_FAILURE,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_FAILURE,
    DELETE_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS,
    DELETE_CONTACT_FAILURE
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

export const fetchContacts = () => async (dispatch) => {
    dispatch({ type: FETCH_CONTACTS_REQUEST });
    
    try {
        const response = await axios.get('/api/contact/all');
        dispatch({ type: FETCH_CONTACTS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_CONTACTS_FAILURE, payload: error.message });
    }
};

export const deleteContact = (contactId) => async (dispatch) => {
    dispatch({ type: DELETE_CONTACT_REQUEST });
    
    try {
        await axios.delete(`/api/contact/${contactId}`, getAuthHeader());
        dispatch({ type: DELETE_CONTACT_SUCCESS, payload: contactId });
    } catch (error) {
        dispatch({ type: DELETE_CONTACT_FAILURE, payload: error.message });
    }
};