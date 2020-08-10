import React from 'react';
import Banneritem from './BannerItem';
import { Link } from 'react-router-dom';
import '../css/banner.css';

const Banner = () => {
    return(
        <div className="banner">
            <Banneritem />
            <Banneritem />
            <Banneritem />
            <Banneritem />
            <Banneritem />
            <Link to={'/'} className="banner__link">
                <i class="fa fa-arrow-right"></i>
            </Link>
        </div>
    )
}

export default Banner;