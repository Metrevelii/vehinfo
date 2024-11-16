import * as actions from './index';
import axios from "axios"
import { getAuthHeader } from '../../Components/utils/tools';


axios.defaults.headers.post['Content-Type'] = 'application/json';


export const updateSiteVars = (args) => {
    return async(dispatch)=>{
        try{
            const site = await axios.patch('/api/site',args, getAuthHeader());

            dispatch(actions.updateSiteVars(site.data))
            dispatch(actions.successGlobal('Done !!'))
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }

}

export const fetchTranslations = (language) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/api/translations/${language}`, getAuthHeader());
            dispatch(actions.setTranslations(response.data));
        } catch (error) {
            dispatch(actions.errorGlobal(error.response?.data?.message || 'Error fetching translations'));
        }
    };
};

 
export const updateTranslations = (language, translations) => {
    return async (dispatch) => {
        try {
            const response = await axios.patch(`/api/translations/${language}`, translations, getAuthHeader());
            dispatch(actions.setTranslations(response.data));
            dispatch(actions.successGlobal('Translations updated successfully!'));
        } catch (error) {
            dispatch(actions.errorGlobal(error.response?.data?.message || 'Error updating translations'));
        }
    };
};