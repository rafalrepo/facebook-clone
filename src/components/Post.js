import React from 'react';
import '../css/post.css';
import { Avatar } from '@material-ui/core';

const Post = ({ post }) => {

    let likeCount = 0;

    const like = post.emotikon.map(e => 
        likeCount += parseInt(e.count)
    )

    const commentsCount = post.comments.length;

    return(
        <article className="post">
            <div className="post__header">
                <Avatar className="post__avatar"/>
                <div className="post__name">
                    <h5>{post.title}</h5>
                    <p>{post.timestamp}</p>
                </div>
                <button><i class="fa fa-ellipsis-h"></i></button>
            </div>
            <div className="post__text">
                {post.content}
            </div>
            <div className="post__groupEmot">
                <div className="post__emotikon">
                    {post.emotikon.map((e, i) => 
                       <img src={e.img} key={i} class="post__emotikonImg"/>
                    )} 
                    {likeCount}
                </div>   
                <div className="post__comments">
                   {commentsCount} Komentarzy
                </div>   
            </div>
            <hr />
            <div className="post__btn">
                <button><span className="postCreated__icon post__like"></span>Lubię to!</button>        
                <button><span className="postCreated__icon post__comment"></span>Komentarz</button>        
                <button><span className="postCreated__icon post__share"></span>Udostępnij</button>  
                <button><Avatar className="post__avatarSmall"/> <i class="fa fa-sort-down"></i></button>
            </div>
        </article>
    )
}

export default Post;