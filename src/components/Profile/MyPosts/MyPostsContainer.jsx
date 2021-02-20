import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';
import { deletePostActionCreator, addLikeActionCreator } from '../../redux/profileReducer';
import MyPosts from './MyPosts';
import Post from './Post/Post'
import { connect } from 'react-redux';



// const MyPostsContainer = (props) => {
//     // debugger;

//     function addPost() {
//         props.store.dispatch(addPostActionCreator());
//     }

//     const newPostText = (text) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text));
//     }
//     const deletePost = (id) => {
//         props.store.dispatch(deletePostActionCreator(id))
//     }

//     const addLike = (id) => {
//         props.store.dispatch(addLikeActionCreator(id))
//     }

//     return (
//         <MyPosts
//             addPost={addPost}
//             updateNewPostText={newPostText}
//             posts={props.store.getState().profilePage.posts}
//             deletePost={deletePost}
//             addLike={addLike}
//         />
//     )
// }

const mapStateToProps = (state) => {
    return ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        addPost: () => {
            dispatch(addPostActionCreator())
        },

        deletePost: (id) => {
            dispatch(deletePostActionCreator(id))
        },

        updateNewPostText: (text) => { 
            dispatch(updateNewPostTextActionCreator(text))
        },

        addLike: (id) => {
            dispatch(addLikeActionCreator(id))
        }
    })
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
// export let PostContainer = connect(null, mapDispatchToProps)(Post)

export default MyPostsContainer;
// export default PostContainer;