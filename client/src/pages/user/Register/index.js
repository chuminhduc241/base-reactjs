import { Button } from 'antd';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import InputField from '~/components/InputField';
import '~/pages/user/Login/Login.scss';
const Register = (props) => {
    const user = {
        name: '',
        email: '',
        password: '',
        comfirmpassword: '',
    };
    const SignupSchema = Yup.object().shape({
        name: Yup.string().required('Họ và tên không được để trống'),
        email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),
        password: Yup.string().required('Mật khẩu không được để trống'),
        comfirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp')
            .required('Nhập lại mật khẩu không được để trống'),
    });

    const handleRegister = async (values) => {
        try {
            console.log(values);

            props.history.push('/login');
        } catch (err) {}
    };

    return (
        <div className="login">
            <Formik initialValues={user} validationSchema={SignupSchema} onSubmit={(values) => handleRegister(values)}>
                {(formikProps) => {
                    return (
                        <Form>
                            <h2>SIGN UP</h2>

                            <FastField name="email" component={InputField} label="Email" />
                            <FastField name="password" component={InputField} label="Mật khẩu" type="password" />
                            <FastField
                                name="comfirmpassword"
                                component={InputField}
                                label="Nhập lại mật khẩu"
                                type="password"
                            />
                            <FastField name="name" component={InputField} label="Họ và tên" />
                            <Button type="primary" htmlType="submit">
                                Đăng ký
                            </Button>
                            <div className="connect-link">
                                Bạn đã có tài khoản đăng nhập ngay <Link to="/login">tại đây</Link>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default Register;
