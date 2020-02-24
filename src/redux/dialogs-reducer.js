const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
let initialState = {
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
  ],
  newMessageBody: ''
};
const dialogsReducer = (state =  initialState, action) => {
  switch(action.type){
    case UPDATE_NEW_MESSAGE_BODY:
    state.newMessageBody = action.body;
    return state;
    case SEND_MESSAGE:
    let body = state.newMessageBody;
    state.newMessageBody = '';
    state.messages.push({id: 6, message: body});
    return state;
    default:
    return state;
  }
}
export const sendMessageCreator = () => ({type:SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type:UPDATE_NEW_MESSAGE_BODY, body:body})
export default dialogsReducer;
