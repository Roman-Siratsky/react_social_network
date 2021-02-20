import React from "react";
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from '../redux/messageReducer';
import Messages from './Messages';


const MessagesContainer = (props) => {

  const updateMessageBody = (text) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(text))
  }

  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  }

    return (
        <Messages updateMessageBody={updateMessageBody}
            sendMessage={sendMessage}
            messagesPage={props.store.getState().messagesPage}
      />
  );
};
export default MessagesContainer;
