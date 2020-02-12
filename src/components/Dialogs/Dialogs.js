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

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: "Виталя"},
    {id: 2, name: "Арут"},
    {id: 3, name: "Тоц"},
    {id: 4, name: "Владик"},
    {id: 5, name: "Мидик"},
    {id: 6, name: "Логан"},
    {id: 7, name: "Вася"},
    {id: 8, name: "Серега"},
    {id: 9, name: "Рома"},
    {id: 10, name: "Андрюха"}
  ]

  let mesasgesData = [
    {id: 1, message: "Привет"},
    {id: 2, message: "Как дела?"},
    {id: 3, message: "Что нового?"}
  ]

  return(
    <div className={c.dialogs}>
      <div className={c.dialogs__items}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
        <DialogItem name={dialogsData[6].name} id={dialogsData[6].id} />
        <DialogItem name={dialogsData[7].name} id={dialogsData[7].id} />
        <DialogItem name={dialogsData[8].name} id={dialogsData[8].id} />
        <DialogItem name={dialogsData[9].name} id={dialogsData[9].id} />

      </div>
      <div className={c.messages}>
        <Message message={mesasgesData[0].message} />
        <Message message={mesasgesData[1].message} />
        <Message message={mesasgesData[2].message} />
      </div>
    </div>
  );
}
export default Dialogs;
