import React from 'react';
import p from './Profile.module.css';
import MyInfo from './MyInfo/MyInfo'
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    // debugger;
    return (
        <div className={p.profile}>
            <MyInfo />
            <MyPostsContainer
                // newPostText={props.newPostText}
                // posts={props.posts}
                // dispatch={props.dispatch}
                // store={props.store}
            />
        </div>
    )
}

export default Profile;