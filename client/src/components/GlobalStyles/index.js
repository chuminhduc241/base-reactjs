import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser, loginSuccess } from '~/redux/authSlice';
import { UserServices } from '~/services/user-service';
import './GlobalStyles.scss';


function GlobalStyles({ children }) {
    const dispatch = useDispatch();
    const token = localStorage.getItem('accesstoken');
    const userServices = new UserServices();
    useEffect(() => {
        if (token) {
            dispatch(loginSuccess());
            const getInfor = async () => {
                const res = await userServices.getInfo();
                dispatch(getUser({ user: res, isAdmin: res.role === 1 ? true : false }));
            };
            getInfor();
        }
    }, [token, dispatch]);
    return <div>{children}</div>;
}

export default GlobalStyles;
