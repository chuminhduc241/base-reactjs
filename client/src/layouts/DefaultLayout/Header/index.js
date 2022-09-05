import {
    faBars,
    faCartShopping,
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { message } from 'antd';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import { BoxIcon, NewIcon, RefundIcon, Sale, TopIcon } from '~/components/Icons';
import Menu from '~/components/Popper/Menu';
import config from '~/config';
import { logOut } from '~/redux/authSlice';
import styles from './Header.module.scss';
import Search from './Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    to: '/feedback',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const { isLogged } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    // Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
        if (menuItem.type === 'logout') dispatch(logOut());
        switch (menuItem.type) {
            case 'logout':
                // Handle change language
                dispatch(logOut());
                message.success('Đăng xuất thành công');
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Lịch sử đơn hàng',
            to: '/history',
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            separate: true,
            type: 'logout',
        },
    ];
    const categories = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'LAPTOP',
            children: {
                title: 'LAPTOP',
                data: [
                    {
                        title: 'DELL',
                    },
                    {
                        title: 'ASUS',
                    },
                    {
                        title: 'MACBOOK',
                    },
                    {
                        title: 'HP',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Lịch sử đơn hàng',
            to: '/history',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('header__top')}>
                <div className={cx('header__top-inner')}>
                    <span className={cx('text')}>0904924255</span>
                    <span className={cx('text')}>miễn phí vận chuyển cho đơn hàng từ 300k</span>
                </div>
            </div>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {isLogged ? (
                        <Menu items={userMenu} onChange={handleMenuChange}>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                <span>Tài khoản</span>
                            </button>
                        </Menu>
                    ) : (
                        <Tippy delay={[0, 50]} content="Đăng nhập" placement="bottom">
                            <Link to="/login">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                    <span>Tài khoản</span>
                                </button>
                            </Link>
                        </Tippy>
                    )}{' '}
                    <Tippy delay={[0, 50]} content="Message" placement="bottom">
                        <button className={cx('action-btn')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faCartShopping} />
                            <span>Giỏ hàng</span>
                        </button>
                    </Tippy>
                </div>
            </div>
            <div className={cx('header__bottom')}>
                <div className={cx('header__bottom-inner')}>
                    <Menu items={categories} onChange={handleMenuChange}>
                        <div className={cx('category')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faBars} />
                            <span>DANH MỤC SẢN PHẨM</span>
                        </div>
                    </Menu>
                    <ul className={cx('list-menu')}>
                        <li>
                            <Link to="/" className={cx('item')}>
                                <TopIcon />
                                <span>sản phẩm được quan tâm</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className={cx('item')}>
                                <Sale />
                                <span>Khuyến mãi</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className={cx('item')}>
                                <BoxIcon />
                                <span>Giao hàng nhanh 24h</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className={cx('item')}>
                                <RefundIcon />
                                <span>7 ngày đổi trả</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className={cx('item')}>
                                <NewIcon />
                                <span>Tin công nghệ</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
