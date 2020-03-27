import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import {reduxForm, Field} from 'redux-form';

let AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newPostText'/>
      </div>
      <div>
        <button>Add post</button>
        <button>Remove</button>
      </div>
    </form>

}

let AddNewPostFormRedux = reduxForm({form:'ProfileAddNewPostForm'}) (AddNewPostForm);

const MyPosts = (props) => {
  let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)
  let newPostElement = React.createRef();
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }
  return (
    <div className={c.posts__block}>
      <h3>My post</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={c.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
