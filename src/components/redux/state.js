import profileReducer from './profileReducer';
import messageReducer from './messageReducer';

// let callSubscriber = () => {
//     console.log('yeah');
// }

const ADD_LIKE = 'ADD-LIKE';
const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let store = {
    _state: {
        profilePage: {
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
        },

        messagesPage: {
            dialogs: [
                { name: 'Julia', id: 1 },
                { name: 'Roma', id: 2 },
                { name: 'Molly', id: 3 },
                { name: 'Businka', id: 4 },
                { name: 'JavaScript', id: 5 },
                { name: 'React', id: 6 },
                { name: 'Redux', id: 7 }
            ],

            messages: [
                { message: 'Hi', id: 1 },
                { message: 'Julia', id: 2 },
                { message: 'How are you?', id: 3 },
                { message: 'yeeeah', id: 4 },
                { message: 'wow', id: 5 },
                { message: 'lets take a look', id: 6 },
                { message: 'in a second', id: 7 }
            ],
            newMessageBody: '',
        },
    },

    sendMesagge() {
        const newMessage = {
            message: this._state.messagesPage.newMessageBody,
            id: this._state.messagesPage.messages(acc => {
                return acc + 1;
            })
        }
        if (this._state.messagesPage.newMessageBody !== '') {
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageBody = '';
            this._callSubscriber(this._state);
        }
    },

    updateNewMessageBody(text) {
        this._state.messagesPage.newMessageBody = text;
        this._callSubscriber(this._state);
    },
    _callSubscriber() {
        console.log('yeah');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    get state() {
        return this._state;
    },

    addPost () {
        let newPost = {
            id: this._state.profilePage.posts.reduce(acc => {
                return acc + 1;
            }, 1),
            image: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg',
            message: this._state.profilePage.newPostText,
            likesCount: Math.floor(Math.random() * Math.floor(20)),
        }
        if (this._state.profilePage.newPostText !== '') {
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    deletePost(id) {
        this._state.profilePage.posts =  this._state.profilePage.posts.filter(post => {
            return post.id !== id;
        })
        this._callSubscriber(this._state);
    },

    addLike(id) {
        this._state.profilePage.posts = this._state.profilePage.posts.map(post => {
            if (post.id === id) {
                post.likesCount++;
                return post;
            } 
            return post;
        })
        this._callSubscriber(this._state);
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);

        this._callSubscriber(this.state);
    }
}




// export const addPostActionCreator = () => ({ type: ADD_POST })

// export const deletePostActionCreator = (id) => ({type: DELETE_POST, id: id,})

// export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,
//         newText: text,})

// export const addLikeActionCreator = (id) => ({
//         type: ADD_LIKE,
//         id: id,
// })
    
// export const sendMessageActionCreator = () => {
//     return {
//         type: SEND_MESSAGE,
//     }
// }
// export const updateNewMessageBodyActionCreator = (newText) => {
//     return {
//         type: UPDATE_NEW_MESSAGE_BODY,
//         text: newText,
//     }
// } 


export default store;

window.state = store.state

