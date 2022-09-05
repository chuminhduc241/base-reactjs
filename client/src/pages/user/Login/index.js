import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import { FastField, Form, Formik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import InputField from '~/components/InputField';
import { loginSuccess } from '~/redux/authSlice';
import { AuthServices } from '~/services/auth-service';
import './Login.scss';
import RadioField from '~/components/InputField/RadioField';
const Login = (props) => {
    const dispatch = useDispatch();

    const [isForgotPassword, setIsForgetPassword] = useState(false);
    const authServices = new AuthServices();
    const user = {
        email: '',
        password: '',
        gender:"1"
    };
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),
        password: Yup.string().required('Mật khẩu không được để trống'),
    });

    const handleRegister = async (values) => {
        try {
            console.log(values);
            const result = await authServices.login(values);
            localStorage.setItem('accesstoken', result.accesstoken);

            dispatch(loginSuccess());
            message.success('Đăng nhập thành công');
            props.history.push('/');
        } catch (err) {
            message.success('Đăng nhập thất bại');
        }
    };
    const genders =[
    {
        name: "nam",
        value:"1"
    },
    {
        name: "nu",
        value:"2"
    }
    ]
    const handelradio = ()=>{
        console.log("vào")
    }
    return (
        <div className="login">
            <Formik initialValues={user} validationSchema={SignupSchema} onSubmit={(values) => handleRegister(values)}>
                {(formikProps) => {
                    return (
                        <Form>
                            <h2>Đăng nhập</h2>
                            <FastField
                                name="email"
                                component={InputField}
                                label="Tên tài khoản hoặc địa chỉ email"
                                icon={<UserOutlined className="site-form-item-icon" />}
                            />

                            <FastField
                                name="password"
                                icon={<LockOutlined className="site-form-item-icon" />}
                                component={InputField}
                                label="Mật khẩu"
                                type="password"
                            />
                            <FastField
                                name="gender"
                                component={RadioField}
                                option = {genders}
                                handleChange = {handelradio}
                            />
                            <Button size="large" type="primary" htmlType="submit">
                                Đăng nhập
                            </Button>
                            <p>
                                Bạn chưa có tài khoản đăng ký <Link to="/register">tại đây</Link>
                            </p>
                            <div class="forgot-password">Quên mật khẩu</div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default Login;
