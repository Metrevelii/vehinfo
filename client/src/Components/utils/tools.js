import cookie from 'react-cookies';
import { toast } from 'react-toastify';


export const errorHelper = (formik,value) => ({
    error: formik.errors[value] && formik.touched[value] ? true : false,
    helperText: formik.errors[value] && formik.touched[value] ? formik.errors[value]:null
});

export const showToast = (type, msg) => {

    switch(type){
        case 'SUCCESS':
            toast.success(msg,{
                position: "bottom-left"
            })
        break;
        case 'ERROR':
            toast.error(msg,{
                position: "bottom-left"
            })
        break;
        default:
            return false
    }

}

export const getTokenCookie = () => cookie.load('x-access-token');
export const removeTokenCookie = () => cookie.remove('x-access-token', {path:'/'});
export const getAuthHeader = () => {
    return { headers: { 'Authorization':`Bearer ${getTokenCookie()}`}}
}