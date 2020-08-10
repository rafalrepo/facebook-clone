import React from 'react';
import '../css/siedbarHomeCenter.css';
import Banner from './Banner';
import PostCreated from './PostCreated';

const SiedbarHomeCenter = () => {
    return(
        <div className="siedbarHomeCenter">
            <Banner />
            <PostCreated />
        </div>
    );
}

export default SiedbarHomeCenter;