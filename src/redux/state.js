const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
let store = {
  _state:{
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
  },
  _callSubscriber() {
    console.log("state was changed");
  },
  getState() {
    return this. _state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if(action.type === ADD_POST) {
      let newPost = {
        id:5,
        message:this._state.profilePage.newPostText,
        likesCount:0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if(action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText:text
  }
}
export default store;
