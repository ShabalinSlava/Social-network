import React from "react";
import c from "./Post.module.css";
function Post(props) {
  return (
    <div className={c.item}>
      <img src="https://www.kp.ru/afisha/wp-content/uploads/2018/08/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80.jpg" />
      {props.message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
}

export default Post;
