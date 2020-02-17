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
  getState() {
    return this. _state;
  },
  _callSubscriber() {
    console.log("state was changed");
  },
  addPost(){
    let newPost = {
      id:5,
      message:this._state.profilePage.newPostText,
      likesCount:0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  }
}
export default store;
