import {
  SEND_CONTACT_REQUEST,
  SEND_CONTACT_SUCCESS,
  SEND_CONTACT_FAILURE,
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
} from "../types";

const initialState = {
  loading: false,
  success: false,
  error: null,
  contacts: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_CONTACT_REQUEST:
      return { ...state, loading: true, error: null };
    case SEND_CONTACT_SUCCESS:
      return { ...state, loading: false, success: true };
    case SEND_CONTACT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_CONTACTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_CONTACTS_SUCCESS:
      return { ...state, loading: false, contacts: action.payload };
    case FETCH_CONTACTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default contactReducer;
