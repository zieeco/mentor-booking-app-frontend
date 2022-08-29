import React from 'react';
import style from './Profile.module.css';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <div className={style.user_container}>
      <div className={style.user_details}>
        <div className={style.img_cont}>
          <img src={`${user.user.avatar}`} alt="Avatar" />
        </div>
        <div className={style.card_bdy}>
          <div className={style.name}>
            <h3>John Doe</h3>
          </div>
          <p>example@mail.com</p>
        </div>
      </div>

      <div className={style.user_contact}>
        <form className={style.user_form}>
          <label htmlFor="user-name">
            User name:
            <input type="text" value="john.doe" className={style.user_input} />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" value="johndoe" className={style.user_input} />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
