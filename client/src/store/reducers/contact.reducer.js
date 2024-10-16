import {
    SEND_CONTACT_REQUEST,
    SEND_CONTACT_SUCCESS,
    SEND_CONTACT_FAILURE
} from '../types';

const initialState = {
    loading: false,
    success: false,
    error: null
};


const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_CONTACT_REQUEST:
            return { ...state, loading: true, error: null };
        case SEND_CONTACT_SUCCESS:
            return { ...state, loading: false, success: true };
        case SEND_CONTACT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default contactReducer;