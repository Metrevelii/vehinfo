
import cookie from 'react-cookies';

export const errorHelper = (formik,value) => ({
    error: formik.errors[value] && formik.touched[value] ? true : false,
    helperText: formik.errors[value] && formik.touched[value] ? formik.errors[value]:null
});

export const getTokenCookie = () => cookie.load('x-access-token');
export const removeTokenCookie = () => cookie.remove('x-access-token', {path:'/'});
export const getAuthHeader = () => {
    return { headers: { 'Authorization':`Bearer ${getTokenCookie()}`}}
}