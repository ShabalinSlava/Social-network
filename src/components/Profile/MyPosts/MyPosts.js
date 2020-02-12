import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  return (
    <div className={c.posts__block}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={c.posts}>
        <Post message="Привет, как дела?" likesCount="0"/>
        <Post message="Это мой первый пост" likesCount="23"/>
      </div>
    </div>
  );
}

export default MyPosts;
