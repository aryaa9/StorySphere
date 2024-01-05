import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../components/UserContext';

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch user information');
        }
        return response.json();
      })
      .then((userInfo) => {
        setUserInfo(userInfo);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setUserInfo]);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Logout failed');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
        setUserInfo(null);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        StorySphere
      </Link>
      <nav>
        {loading && <span>Loading...</span>}
        {!loading && username ? (
          <>
            <Link to="/create">Create new post</Link>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
