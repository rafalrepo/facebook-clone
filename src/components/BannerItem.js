import React from 'react';
import '../css/bannerItem.css';
import Avatar from '@material-ui/core/avatar';
import img from '../img/default.png';

const Banneritem = () => {
    return(
        <article className="bannerItem">
            <img src={img} className="bannerItem__img"/>
            <Avatar className="bannerItem__avatar"/>
            <h3>test</h3>
        </article>
    )
}

export default Banneritem;