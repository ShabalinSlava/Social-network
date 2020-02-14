import React from "react";
import c from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
function Profile(props) {
  return (
    <div className={c.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts}/>
    </div>
  );
}

export default Profile;
