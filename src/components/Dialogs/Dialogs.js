import React from "react";
import c from "./Dialogs.module.css";
import {NavLink} from "react-router-dom"
const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return <div className={c.dialog + ' ' + c.active}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
}

const Message = (props) => {
  return <div className={c.message}>{props.message}</div>
}

const Dialogs = props => {
  return(
    <div className={c.dialogs}>
      <div className={c.dialogs__items}>
        <DialogItem name="Виталя" id="1" />
        <DialogItem name="Арут" id="2" />
        <DialogItem name="Тоц" id="3" />
        <DialogItem name="Владик" id="4" />
        <DialogItem name="Мидик" id="5" />
        <DialogItem name="Логан" id="6" />
        <DialogItem name="Вася" id="7" />
        <DialogItem name="Серега" id="8" />
        <DialogItem name="Рома" id="9" />
        <DialogItem name="Андрюха" id="10" />
      </div>
      <div className={c.messages}>
        <Message message="Привет" />
        <Message message="Как дела?" />
        <Message message="Что нового?" />
      </div>
    </div>
  );
}
export default Dialogs;
