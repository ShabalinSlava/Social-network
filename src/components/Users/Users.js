import React from 'react';
import styles from './users.module.css';
let Users = (props) => {
  if (props.users.length === 0 ) {
    props.setUsers( [
      {
        id: 1, photoUrl:'https://smart-lab.ru/uploads/images/01/96/84/2015/07/10/2904d0.jpg', followed: false, fullName: "Виталя", status: "Я Виталька", location: {city: 'Иркутск', country:'Россия'} },
      {
        id: 2, photoUrl:'https://smart-lab.ru/uploads/images/01/96/84/2015/07/10/2904d0.jpg', followed: true, fullName: "Тоцкий", status: "Я Тоц", location: {city: 'Варшава', country:'Польша'} },
      {
        id: 3, photoUrl:'https://smart-lab.ru/uploads/images/01/96/84/2015/07/10/2904d0.jpg', followed: false, fullName: "Арут", status: "Я Ара", location: {city: 'Ереван', country:'Армения'} }
    ])
  }
  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} className={styles.userPhoto} />
          </div>
          <div>
            {u.followed ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button> : <button onClick={() => { props.follow(u.id)}}>Follow</button>}

          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}
export default Users;
