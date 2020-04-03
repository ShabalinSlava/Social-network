import React from "react";
import c from "./ProfileInfo.module.css";
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
const ProfileInfo = ({profile, status, updateStatus}) => {
  if(!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img className={c.content__img} src="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg"/>
      </div>
      <div className={c.content__wrap}>
        <div className={c.description__block}>
          <img src={profile.photos.large} />
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
