const ADD_LIKE = 'ADD-LIKE';
const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// в state приходит profilePage
let initialState = {
            posts: [
                {
                    id: 1,
                    image: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg',
                    message: 'wow, react is beautiful',
                    likesCount: 13,
                },
    
                {
                    id: 2,
                    image: 'https://static.dw.com/image/5011737_404.jpg',
                    message: 'Havent see you for a long time',
                    likesCount: 25
                },
                {
                    id: 3,
                    image: 'https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg',
                    message: 'Thank you, this social network is grate',
                    likesCount: 11
                },
            ],
            newPostText: '',
}
// let stateCopy;

export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.reduce(acc => {
                    return acc + 1;
                }, 1),
                image: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg',
                message: state.newPostText,
                likesCount: Math.floor(Math.random() * Math.floor(20)),
            }
            let stateCopy = { ...state }
            if (state.newPostText !== '') {
                stateCopy.posts = [...state.posts]
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = '';
            }
            // stateCopy = state
            return stateCopy;
        }
        case DELETE_POST: {
            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            stateCopy.posts = stateCopy.posts.filter(post => {
                return post.id !== action.id;
            })
            // stateCopy = state
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            // stateCopy = state
            return stateCopy;
        }
        case ADD_LIKE: {
            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            stateCopy.posts = stateCopy.posts.map(post => {
                if (post.id === action.id) {
                    post.likesCount++;
                    return post;
                }
                return post;
            })
            // stateCopy = state
            return stateCopy;
        }
        default:
            // stateCopy = state
            return state;
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const deletePostActionCreator = (id) => ({type: DELETE_POST, id: id,})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,
        newText: text,})

export const addLikeActionCreator = (id) => ({
        type: ADD_LIKE,
        id: id,
})

// export default profileReducer;