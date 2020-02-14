import React from "react";
import c from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
  let messagesElements = props.messages.map( message => <Message message={message.message} />);

  return(
    <div className={c.dialogs}>
      <div className={c.dialogs__items}>
        {dialogsElements}
      </div>
      <div className={c.messages}>
        {messagesElements}
      </div>
    </div>
  );
}
export default Dialogs;
