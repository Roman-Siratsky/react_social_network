import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
    // debugger;
    const textAreaRef = React.createRef();

    const addPost = () => {
        props.addPost();
        
    }
    const newPostText = () => {
        const text = textAreaRef.current.value;
        props.updateNewPostText(text);
    }

    const ourPosts =
        props.posts.map(post =>
            <Post
            deletePost={props.deletePost}
            addLike={props.addLike}
            // dispatch={props.dispatch}
            id={post.id}
            message={post.message}
            likesCount={post.likesCount}
            image={post.image} />
        )

    return (
        <div className={p.item}>
            my posts
            <div className={p.container}>
                <textarea onChange={newPostText} ref={textAreaRef} className={p.textarea} rows='2' value={props.newPostText}></textarea>
                <button onClick={addPost} type='button' className={p.postButton}>Add Post</button>
            </div>
            {ourPosts}
        </div>
    )
}

export default MyPosts;