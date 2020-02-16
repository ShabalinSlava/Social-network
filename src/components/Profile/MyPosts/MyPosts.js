import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }
  return (
    <div className={c.posts__block}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={ newPostElement } value={props.newPostText}/>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={c.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
