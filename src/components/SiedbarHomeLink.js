import React from 'react';
import '../css/siedbarHomeLink.css'
import { Link } from 'react-router-dom';

const SiedbarHomeLink = ({ src, text }) => {
    return(
        <Link to={'/'} className="siedbarHomeLink">
            <img src={src} alt={text} className="siedbarHomeLink__img"/>
            {text}
        </Link>
    )
}

export default SiedbarHomeLink;