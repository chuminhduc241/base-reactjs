import React from 'react';
import Product from '~/components/Product';
import Advertise from './components/Advertise';
import './style.scss';
const HomeScene = () => {
    return (
        <>
            <Advertise />
            <div className="row az-home-row-product az-section">
                <div className="col c-12">
                    <div className="row az-title ">
                        <div className="col c-12">
                            <h2>Dành riêng cho bạn</h2>
                        </div>
                    </div>
                    <div className="col c-12 az-content px-md-0">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeScene;
