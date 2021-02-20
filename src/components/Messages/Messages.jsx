import React from "react";
import p from "./Messages.module.css";
import MessageItem from './MessageItem/MessageItem';
import DialogItem from './DialogItem/DialogItem';



const Messages = (props) => {
  
  const ourDialogs = props.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  const ourMessages = props.messagesPage.messages.map(message => <MessageItem message={message.message} />);
  

  const updateMessageBody = (event) => {
    const text = event.target.value;
    props.updateMessageBody(text);
  }

  const sendMessage = () => {
    props.sendMessage();
  }

  return (
    <div className={p.messagesPage}>
          <div className={p.dialogs}>
              {ourDialogs}
      </div>
          <div className={p.messages}>
        <div>{ourMessages}</div>
        <div className={p.sendingForm}>
          <textarea
            onChange={updateMessageBody}
            rows="2"
            value={props.messagesPage.newMessageBody}>
            </textarea>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
