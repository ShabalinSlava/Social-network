import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let postData = [
    {id: 1, message: "Привет, как дела?", likesCount: 12},
    {id: 2, message: "Это мой первый пост", likesCount: 10},
  ]

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
        <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
        <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
      </div>
    </div>
  );
}

export default MyPosts;
