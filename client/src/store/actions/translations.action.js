import * as actions from './index';
import axios from 'axios';
import { getAuthHeader } from '../../Components/utils/tools';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const updateTranslationVars = (args) => {
  return async(dispatch) => {
    try {
      const translation = await axios.patch('/api/translations',args, getAuthHeader());
      console.log('Fetched translation data:', translation.data); 
      dispatch(actions.updateTranslationVars(translation.data))
      dispatch(actions.successGlobal('Done !'));
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message))
    }
  }
}
 


     