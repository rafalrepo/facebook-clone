import React from 'react';
import '../css/siedbarHomeCenter.css';
import Banner from './Banner';
import PostCreated from './PostCreated';
import Rooms from './Rooms';
import Posted from './Posted';

const SiedbarHomeCenter = () => {

    return(
        <div className="siedbarHomeCenter">
            <Banner />
            <PostCreated />
            <Rooms />
            <Posted />
        </div>
    );
}

export default SiedbarHomeCenter;