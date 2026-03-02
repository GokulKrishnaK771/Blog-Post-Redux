import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import React from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectPostById } from '../../features/posts/postsSlice';


let PostsExcerpt = ({ postId }) => {

    const post = useSelector(state => selectPostById(state, postId))
    
    return (
        <article>
            <h3>{post.title}</h3>
            <p className='excerpt'>{post.body.substring(0, 70)}...</p>
            <p className='postsCredit'>
                <Link to={`post/${post.id}`}>View Post</Link>
                &nbsp;
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

export default PostsExcerpt