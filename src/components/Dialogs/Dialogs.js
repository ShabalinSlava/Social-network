import React from "react";
import c from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> );
  let messagesElements = state.messages.map( message => <Message message={message.message} key={message.id} />);
  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody);
  }

  // if(!props.isAuth) return <Redirect to='/login' />
  return(
    <div className={c.dialogs}>
      <div className={c.dialogs__items}>
        {dialogsElements}
      </div>
      <div className={c.messages}>
        <div>{messagesElements}</div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newMessageBody' placeholder='Enter your message' />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);
export default Dialogs;
