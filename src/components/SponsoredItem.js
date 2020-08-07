import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sponsoredItem.css';

const SponsoredItem = ({ sponsor }) => {

    return(
        <div className="sponsor">
            <Link to={'/'} className="sponsor__item">
                <h4>{sponsor.title}</h4>
                <p>{sponsor.link}</p>
                <img src={sponsor.img} alt={sponsor.title} />
            </Link>
            <button className="sponsor__more" onClick={(e) => console.log('123')}><i className="fa fa-ellipsis-h"></i></button>
        </div>
    )
}

export default SponsoredItem;