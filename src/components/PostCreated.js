import React from 'react';
import '../css/postCreated.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const PostCreated = () => {
    return (
        <div className="postCreated">
            <form className="postCreated__form">
                <Avatar className="postCreated__avatar"/>
                <input type="text" placeholder="O czym myślisz, Jan?" />
            </form>
            <hr />
            <div className="postCreated__GroupBtn">
                <Link to={'/'} className="postCreated__btn">
                    <span className="postCreated__icon postCreated__video"></span> Transmisja wideo na żywo
                </Link>
                <Link to={'/'} className="postCreated__btn">
                    <span className="postCreated__icon postCreated__image"></span> Zdjęcie/film
                </Link>
            </div>
        </div>
    )
}

export default PostCreated;
