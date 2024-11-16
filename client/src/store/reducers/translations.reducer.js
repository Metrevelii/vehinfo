import { SET_TRANSLATIONS } from '../types';

const initialState = {
    translations: {
        header: {},
        home: {},
        advantages: {},
        footer: {}
    }
};

export default function translationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TRANSLATIONS:
            return { ...state, translations: action.payload };
        default:
            return state;
    }
}