import React from "react";
import c from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
function Profile(props) {
  return (
    <div className={c.content}>
      <ProfileInfo />
      <MyPostsContainer/>
    </div>
  );
}

export default Profile;
