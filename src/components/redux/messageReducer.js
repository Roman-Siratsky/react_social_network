const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

// в state приходит messagesPage
let initialState = {
            dialogs: [
                { name: 'John', id: 1 },
                { name: 'Harry', id: 2 },
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
}

export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                message: state.newMessageBody,
                id: state.messages.reduce(acc => {
                    return acc + 1;
                }, 1)
            };
            if (state.newMessageBody !== '') {
                state.messages.push(newMessage);
                state.newMessageBody = '';
            }
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.text;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}
export const updateNewMessageBodyActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        text: newText,
    }
} 

// export default messageReducer;