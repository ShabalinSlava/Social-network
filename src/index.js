import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let posts = [
  {id: 1, message: "Привет, как дела?", likesCount: 12},
  {id: 2, message: "Это мой первый пост", likesCount: 10},
]

let dialogs = [
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

let messages = [
  {id: 1, message: "Привет"},
  {id: 2, message: "Как дела?"},
  {id: 3, message: "Что нового?"}
]
ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
