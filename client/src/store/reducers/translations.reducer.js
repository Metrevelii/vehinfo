import {
    GET_TRANSLATION_VARS,
    UPDATE_TRANSLATION_VARS
} from '../types';

let DEFAULT_TRANSLATION_STATE = {
    vars: {
        _id: '',
        text1ru: '',
        text1az: '',
        text2ru: '',
        text2az: '',
        text3ru: '',
        text3az: '',
        text4ru: '',
        text4az: '',
        text5ru: '',
        text5az: '',
        text6ru: '',
        text6az: '',
        text7ru: '',
        text7az: '',
        text8ru: '',
        text8az: '',
        text9ru: '',
        text9az: '',
        text10ru: '',
        text10az: '',
        text11ru: '',
        text11az: '',
        text12ru: '',
        text12az: '',
        text13ru: '',
        text13az: '',
        text14ru: '',
        text14az: '',
        text15ru: '',
        text15az: '',
        text16ru: '',
        text16az: '',
        text17ru: '',
        text17az: ''
    }
}

export default function translationReducer(state = DEFAULT_TRANSLATION_STATE, action) {
    switch (action.type) {
        case GET_TRANSLATION_VARS:
            return {...state, vars: action.payload}
        case UPDATE_TRANSLATION_VARS: 
            return {...state, vars: action.payload}
        default: return state
    }
}