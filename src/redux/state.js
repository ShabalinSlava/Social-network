import {rerenderEntireTree} from '../render';
let state =  {
  profilePage: {
    posts: [
      {id: 1, message: "Привет, как дела?", likesCount: 12},
      {id: 2, message: "Это мой первый пост", likesCount: 10},
    ],
    newPostText: 'Hallo Germany'
  },
  dialogsPage: {
    dialogs: [
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
    ],
    messages: [
      {id: 1, message: "Привет"},
      {id: 2, message: "Как дела?"},
      {id: 3, message: "Что нового?"}
    ]
  }
}

export let addPost = () => {
  let newPost = {
    id:5,
    message:state.profilePage.newPostText,
    likesCount:0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}
export default state;
