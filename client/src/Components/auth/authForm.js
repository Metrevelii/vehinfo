import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { userRegister, userSignIn } from '../../store/actions/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ButtonComponent from '../Shared/button';


const AuthForm = (props) => {
    const notifications = useSelector(state => state.notifications);
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const handleSubmit = async (values) => {
        if(props.formType){
            dispatch(userRegister(values))
        } else {
           dispatch(userSignIn(values))
        }
    };
    const navigate = useNavigate();

    useEffect(() => {
        if (notifications && notifications.success && users.auth) {
            navigate('/dashboard');
        } else {
            setLoading(false);
        }
    }, [notifications, users.auth, navigate]);
    
    const initialValues = props.initialValues || { email: '', password: '' };

    return (
        <>
            {loading ? 
            
                <div>Loading</div>
                :

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {( isSubmitting ) => (
                    <Form className="flex flex-col space-y-4 w-[80%] lg:w-auto xl:w-auto 2xl:w-auto">
                        <div className="flex flex-col w-full lg:w-[250px] xl:w-[250px] 2xl:w-[250px] h-[60px] mb-[1.5rem]">
                            <label htmlFor="email" className="font-interRegular font-[16px] mb-[0.5rem] text-primary-black">Enter your email</label>
                            <Field 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Email" 
                                className="border p-2 bg-[#d4dce7] text-[#000]"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div className="flex flex-col w-full lg:w-[250px] xl:w-[250px] 2xl:w-[250px] h-[60px]" style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="password" className="font-interRegular font-[16px] mb-[0.5rem] text-primary-black">Enter your password</label>
                            <Field 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="Password" 
                                className="border p-2 bg-[#d4dce7] text-[#000]"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        </div>
                        <ButtonComponent className="w-[100%] md:w-[220px] lg:w-[220px] xl:w-[220px] 2xl:w-[220px] h-[48px] rounded-[12px] font-interMedium text-[16px]" title={props.formType ? 'Register' : 'Login'} />
                    </Form>
                )}
            </Formik>
            }
        </>
    );
}

export default AuthForm;