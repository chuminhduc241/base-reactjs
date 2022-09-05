import React from 'react'
import './style.scss'

import thumb from '~/assets/images/product.jpg'

const Product = () => {
  return (
    <div className='az-product-item'>
        <div className='az-overflow'>
            <span className='az-sale-label'>-24%</span>
            <a href='/' className='nt-img d-block'>
                <img src={thumb} alt='' />
            </a>
            <a href='/' className='az-box-product-des'>
                <h3 className='az-title-post nowrap-2 text-left'>Camera WIFI ngoài trời IMOU IPC-S21FP 2MP</h3>
                <div className='az-price text-left'>
                    <ins>925,000đ</ins>
                    <del>1,215,000đ</del>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Product