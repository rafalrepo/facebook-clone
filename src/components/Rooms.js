import React from 'react';
import '../css/rooms.css';
import { Avatar } from '@material-ui/core';

const Rooms = () => {
    return(
        <div className="rooms">
            <div className="rooms__header">
                <span className="postCreated__icon postCreated__room"></span>
                <h3>Pokoje</h3>
                <p>Utwórz</p>
            </div>
            <div className="rooms__content">
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <a class="rooms__more" href="/"><i className="fa fa-arrow-right"></i></a>
            </div>
        </div>
    )
}

export default Rooms;