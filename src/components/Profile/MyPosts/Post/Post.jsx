import React from 'react';
import p from './Post.module.css';
// import { deletePostActionCreator, addLikeActionCreator } from '../../../redux/profileReducer';

const Post = (props) => {
    // debugger
    const deleteButtonRef = React.createRef();
    const likeButtonRef = React.createRef();

    const deletePost = () => {
        props.deletePost(props.id);
    }
    
    const addLike = () => {
        props.addLike(props.id);
    }

    return (
        <div className={p.item}>
            <img src={props.image} alt="user-img" width='30' height='30'/>
            <p className={p.post}>{props.message}</p>
            <button ref={likeButtonRef} onClick={addLike} className={p.likes}>{props.likesCount}</button>
            <button ref={deleteButtonRef} onClick={deletePost} className={p.deleteButton}>delete post</button>
        </div>

    )
}

export default Post;