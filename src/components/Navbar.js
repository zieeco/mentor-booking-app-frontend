/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import {
  NavLink, Link, useLocation, useNavigate,
} from 'react-router-dom';
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
  FaTwitter,
} from 'react-icons/fa';
import style from './Navbar.module.css';
import { signOutUser } from '../redux/actions/auth';

export default function Navbar() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logOut = () => {
    dispatch(signOutUser(navigate, user.type, setUser));
  };

  useEffect(() => {
    const token = user?.jwt;
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        logOut();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <nav className={style.nav}>
      <Link to="/" className={style.logo}>
        BookAMentor
      </Link>
      {user && <img src={user.avatar} alt={`${user.mentor_name}`} />}
      <div className={style.menu}>
        {!user && <NavLink to="/auth/user/signin">Log in</NavLink>}
        {!user && <NavLink to="/auth/mentor/signup">Sign up</NavLink>}
        <NavLink to="/" active className={style.activelink}>
          Home
        </NavLink>
        {user && (
          <>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/myreservations">My Reservations</NavLink>
            <NavLink to="/reserve">Reserve</NavLink>
          </>
        ) }

        {(user?.role === 'admin' || user?.role === 'superadmin') && (
        <>
          <NavLink to="pending-mentors">Pending Mentors</NavLink>
          <NavLink to="approved-mentors">Mentors List</NavLink>
        </>
        )}
        {user && (
        <a
          className={style.logout}
          onClick={logOut}
          type="button"
          aria-hidden="true"
        >
          Log out
        </a>
        )}
      </div>
      <div className={style.footer}>
        <ul className={style.social}>
          <a href="facebook" target="_blank" aria-label="facebook">
            <FaFacebookF />
          </a>
          <a href="twitter" target="_blank" aria-label="twitter">
            <FaTwitter />
          </a>
          <a href="googleplus" target="_blank" aria-label="google">
            <FaGooglePlusG />
          </a>
          <a href="instagram" target="_blank" aria-label="instagram">
            <FaInstagram />
          </a>
          <a href="linkedin" target="_blank" aria-label="linkedin">
            <FaLinkedinIn />
          </a>
        </ul>
        <p>
          <FaRegCopyright />
          {`${currentYear} Microverse`}
        </p>
      </div>
    </nav>
  );
}
