import profileReducer, {addPostActionCreator} from './profile-reducer';
import React from 'react';

test('renders learn react link', () => {
  let action = addPostActionCreator('hallo');
  let state = {
    posts: [
      {id: 1, message: "Привет, как дела?", likesCount: 12},
      {id: 2, message: "Это мой первый пост", likesCount: 10},
    ]''
  };
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});
