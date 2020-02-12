import React from "react";
import c from "./ProfileInfo.module.css";
function ProfileInfo() {
  return (
    <div>
    <div>
    <img className={c.content__img} src="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg"/>
    </div>
    <div className={c.content__wrap}>
    <div className={c.description__block}>ava+descr</div>
    </div>
    </div>
  );
}

export default ProfileInfo;
